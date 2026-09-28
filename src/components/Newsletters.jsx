import React from "react";

const newsletters = [
  {
    year: "2026",
    issues: [
      {
        period: "April - June",
        label: "Q2 Newsletter",
        path: "/news-letter-Apr-Jun-2026/",
      },
      {
        period: "January - March",
        label: "Q1 Newsletter",
        path: "/news-letter-Jan-March-2026/",
      },
    ],
  },
  {
    year: "2025",
    issues: [
      {
        period: "October - December",
        label: "Q4 Newsletter",
        path: "/news-letter-Oct-Dec-2025/",
      },
      {
        period: "July - September",
        label: "Q3 Newsletter",
        path: "/news-letter-Jul-Sep-2025/",
      },
      {
        period: "April - June",
        label: "Q2 Newsletter",
        path: "/news-letter-Apr-Jun-2025/",
      },
    ],
  },
];

function NewsletterCard({ issue }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative flex h-32 items-center justify-between overflow-hidden bg-gradient-to-br from-[#0056b3] to-[#0b2d5c] px-6 text-white">
        <div className="absolute -right-6 -top-10 h-36 w-36 rounded-full border-[18px] border-white/10" />
        <div className="absolute -bottom-16 left-16 h-36 w-36 rounded-full border-[18px] border-white/10" />
        <div className="relative z-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
            CSPIT • CHARUSAT
          </p>
          <h2 className="text-2xl font-bold">{issue.label}</h2>
        </div>
        <span className="relative z-10 rounded-full bg-white/15 px-3 py-2 text-sm font-bold backdrop-blur-sm">
          EDITION
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-5 text-lg font-semibold text-slate-800">
          {issue.period}
        </p>
        <p className="mb-6 flex-1 text-sm leading-6 text-slate-500">
          Official newsletter edition of Chandubhai S. Patel Institute of
          Technology.
        </p>
        <a
          href={issue.path}
          className="inline-flex items-center justify-center rounded-lg bg-[#0056b3] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#003f82] focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Read newsletter
          <span className="ml-2 transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </article>
  );
}

export default function Newsletters() {
  return (
    <main className="min-h-screen bg-[#e1e1e1] pb-20 pt-16 lg:pt-[100px]">
      <section className="relative bg-gradient-to-r from-[#0056b3] to-[#2081e9] px-6 py-10 text-center text-white shadow-md">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold uppercase tracking-wider md:text-4xl">
            Newsletter Archive
          </h1>
          <p className="mt-2 text-base opacity-90 md:text-lg">
            Official publications, activities, achievements, and campus updates.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-12">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#0056b3]">
              Archive
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Browse by year
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            {newsletters.flatMap((year) => year.issues).length} editions
            available
          </p>
        </div>

        <div className="space-y-12">
          {newsletters.map(({ year, issues }) => (
            <section key={year} aria-labelledby={`newsletter-year-${year}`}>
              <div className="mb-5 flex items-center gap-4">
                <h3
                  id={`newsletter-year-${year}`}
                  className="text-2xl font-extrabold text-slate-900"
                >
                  {year}
                </h3>
                <div className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {issues.map((issue) => (
                  <NewsletterCard key={issue.path} issue={issue} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
