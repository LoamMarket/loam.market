import React from "react";

export default function InterviewersPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-16">
      {/* Hero */}
      <section className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-wide text-loam-muted">
          For interviewers
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Help companies find who will thrive.
        </h1>
        <p className="text-base text-loam-muted max-w-xl">
          Pre-interview candidates from vetted pools through prediction markets. If you have recruiting, domain expertise, or quantitative investment experience—we want you.
        </p>
        <a
          href="mailto:interviewer@loam.market"
          className="inline-flex items-center justify-center rounded-full bg-loam-accent px-5 py-2 text-xs font-medium text-white shadow-sm hover:opacity-90"
        >
          Email interviewer@loam.market
        </a>
      </section>

      {/* How It Works - Visual 3 Column */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">How it works</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 w-8 h-8 text-sm font-semibold text-loam-accent mb-2">
              1
            </div>
            <h3 className="font-semibold text-loam-ink text-sm">Bid on questions</h3>
            <p className="text-sm text-loam-muted">
              Spend credits to ask candidates and companies the questions that reveal true fit.
            </p>
          </div>
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 w-8 h-8 text-sm font-semibold text-loam-accent mb-2">
              2
            </div>
            <h3 className="font-semibold text-loam-ink text-sm">Trade on predictions</h3>
            <p className="text-sm text-loam-muted">
              Buy "yes" or "no" shares. Will the market convince both sides they should work together?
            </p>
          </div>
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 w-8 h-8 text-sm font-semibold text-loam-accent mb-2">
              3
            </div>
            <h3 className="font-semibold text-loam-ink text-sm">Earn rewards</h3>
            <p className="text-sm text-loam-muted">
              Correct predictions earn significant rewards in real money. Wrong ones cost you.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">Why this works</h2>
        <div className="grid gap-3">
          <div className="rounded-lg border border-loam-border bg-white/50 p-4">
            <h3 className="font-semibold text-loam-ink text-sm mb-2">Psychology over judgment</h3>
            <p className="text-sm text-loam-muted">
              You're not deciding who "deserves" the job. You're understanding what will convince both sides they're a match—reading between the lines of resumes and job descriptions.
            </p>
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4">
            <h3 className="font-semibold text-loam-ink text-sm mb-2">Both "yes" and "no" pay</h3>
            <p className="text-sm text-loam-muted">
              If the match doesn't work and you predicted "no," you earn credits to keep searching. Good evaluators know when to pass.
            </p>
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4">
            <h3 className="font-semibold text-loam-ink text-sm mb-2">Better interviewers spend less</h3>
            <p className="text-sm text-loam-muted">
              Accurate predictions fund your next positions. The better you are, the less you need to buy credits. Winnings compound.
            </p>
          </div>
        </div>
      </section>

      {/* Question Examples */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">What questions look like</h2>
        <div className="space-y-3 text-sm text-loam-muted">
          <p>
            <span className="font-semibold text-loam-ink">To candidates:</span> "Your resume mentions scaling systems—can you record a 3-minute video explaining the biggest technical tradeoff you made?"
          </p>
          <p>
            <span className="font-semibold text-loam-ink">To companies:</span> "Your job description says 'move fast'—how do you actually make decisions when engineering and product disagree?"
          </p>
          <p>
            <span className="font-semibold text-loam-ink">Direct:</span> "Hop on a 15-minute call with me to dig into your experience with distributed systems."
          </p>
        </div>
        <p className="text-sm text-loam-muted pt-2">
          Questions and answers are shared with the market. Everyone learns what reveals true fit.
        </p>
      </section>

      {/* Compensation & Eligibility */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">Compensation & eligibility</h2>
        <div className="space-y-3 text-sm text-loam-muted">
          <p>
            <span className="font-semibold text-loam-ink">Get started:</span> 100k free credits when you sign up.
          </p>
          <p>
            <span className="font-semibold text-loam-ink">Earn up to 10%</span> of the role's salary when your predictions are correct—not just about who gets hired, but who actually thrives long-term.
          </p>
          <p>
            <span className="font-semibold text-loam-ink">Build reputation:</span> Past accuracy makes your questions stand out, gives your bids more weight, and lowers your cost to participate.
          </p>
        </div>
        <div className="pt-3 space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-loam-muted">We're looking for</p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border border-loam-border bg-white px-3 py-1 text-xs text-loam-ink">
              Domain experts
            </span>
            <span className="inline-flex items-center rounded-full border border-loam-border bg-white px-3 py-1 text-xs text-loam-ink">
              Recruiters
            </span>
            <span className="inline-flex items-center rounded-full border border-loam-border bg-white px-3 py-1 text-xs text-loam-ink">
              Quant traders
            </span>
            <span className="inline-flex items-center rounded-full border border-loam-border bg-white px-3 py-1 text-xs text-loam-ink">
              Former FAANG engineers
            </span>
          </div>
        </div>
      </section>

      {/* API & Technical */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">API & automation</h2>
        <p className="text-sm text-loam-muted max-w-xl">
          Full programmatic access. Build agents that monitor roles, analyze fit, and bid automatically.
        </p>
        <div className="grid gap-2 sm:grid-cols-3">
          <div className="rounded-lg border border-loam-border bg-white/50 p-3 text-xs text-loam-muted">
            <span className="font-semibold text-loam-ink">REST API</span> for all market data
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-3 text-xs text-loam-muted">
            <span className="font-semibold text-loam-ink">Webhooks</span> for real-time updates
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-3 text-xs text-loam-muted">
            <span className="font-semibold text-loam-ink">Structured JSON</span> for LLM parsing
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-loam-border pt-12 pb-4">
        <div className="rounded-lg border border-loam-border bg-loam-accent/5 p-6 text-center space-y-3">
          <h2 className="text-lg font-semibold tracking-tight">Ready to participate?</h2>
          <p className="text-sm text-loam-muted max-w-md mx-auto">
            Email us with your background and we'll verify your experience.
          </p>
          <a
            href="mailto:interviewer@loam.market"
            className="inline-flex items-center justify-center rounded-full bg-loam-accent px-5 py-2 text-xs font-medium text-white shadow-sm hover:opacity-90"
          >
            interviewer@loam.market
          </a>
        </div>
      </section>
    </div>
  );
}
