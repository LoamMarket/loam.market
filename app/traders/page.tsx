import React from "react";

export default function TradersPage() {
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
          We deploy expert participants to pre-interview candidates from vetted talent pools. If you have experience evaluating talent—as a recruiter, domain expert, or peer—we want you.
        </p>
        <a
          href="mailto:trader@loam.market"
          className="inline-flex items-center justify-center rounded-full bg-loam-accent px-5 py-2 text-xs font-medium text-white shadow-sm hover:opacity-90"
        >
          Email trader@loam.market
        </a>
      </section>

      {/* What you do */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">What you do</h2>
        <p className="text-sm text-loam-muted max-w-xl">
          Your job is to pre-interview candidates from our vetted pools. Everyone in these pools could succeed—you're finding who will truly <em>thrive</em> in a specific company's environment.
        </p>
        <p className="text-sm text-loam-muted max-w-xl">
          You ask the questions that reveal deeper fit: Does this candidate understand the company's specific problems? Will they thrive in this culture? The question bidding system is your tool. Use it strategically.
        </p>
      </section>

      {/* How questions work */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">How the question bidding system works</h2>
        <div className="space-y-3 text-sm text-loam-muted">
          <p>
            See a resume that's almost perfect for a role but needs clarification? Ask the candidate to update it.
          </p>
          <p>
            Confused by a job description? Ask the hiring manager what they're really trying to solve.
          </p>
          <p>
            Not sure if the candidate really gets it? Ask them to hop on a call with you.
          </p>
          <p>
            Efficient participants might get candidates to record video interviews, then ask employers to review them.
          </p>
        </div>
        <p className="text-sm text-loam-muted max-w-xl pt-4">
          Questions and responses are shared with the market so everyone learns what works.
        </p>
        <p className="text-sm text-loam-muted max-w-xl">
          Your goal: ask the fewest, highest-signal questions to guide candidates and companies toward successful matches.
        </p>
      </section>

      {/* API & Automation */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">API & Automation</h2>
        <p className="text-sm text-loam-muted max-w-xl">
          We provide full programmatic access. Build agents that monitor new roles, analyze fit, and place bids automatically.
        </p>
        <div className="grid gap-3">
          <div className="rounded-lg border border-loam-border bg-white/50 p-3 text-sm text-loam-muted">
            <span className="font-semibold text-loam-ink">REST API.</span> Access all market data, roles, and questions programmatically.
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-3 text-sm text-loam-muted">
            <span className="font-semibold text-loam-ink">Webhooks.</span> Get real-time notifications for new roles, questions, and market updates.
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-3 text-sm text-loam-muted break-words">
            <span className="font-semibold text-loam-ink">Structured Data.</span> Resumes and job descriptions available in structured JSON for easy LLM parsing.
          </div>
        </div>
      </section>

      {/* Who can trade */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">Who can participate</h2>
        <p className="text-sm text-loam-muted max-w-xl">
          We're looking for people with relevant experience:
        </p>
        <div className="grid gap-3">
          <div className="rounded-lg border border-loam-border bg-white/50 p-3 text-sm text-loam-muted">
            <span className="font-semibold text-loam-ink">Domain Expertise.</span> Current or former employees in roles similar to what companies are hiring for.
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-3 text-sm text-loam-muted">
            <span className="font-semibold text-loam-ink">Quantitative Background.</span> Alumni of trading or investment firms comfortable with markets.
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-3 text-sm text-loam-muted">
            <span className="font-semibold text-loam-ink">Professional Recruiting.</span> Access to LinkedIn Recruiter or similar tools.
          </div>
        </div>
        <p className="text-sm text-loam-muted pt-4">
          To join, email <a className="underline" href="mailto:trader@loam.market">trader@loam.market</a>. We'll verify your background.
        </p>
      </section>

      {/* Compensation */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">Compensation</h2>
        <p className="text-sm text-loam-muted max-w-xl">
          Get 100k free credits when you sign up. Earn up to 10% of the role's salary when your predictions are correct—not just about who gets hired, but who actually <em>thrives</em> long-term.
        </p>
        <p className="text-sm text-loam-muted max-w-xl">
          Build reputation: past accuracy gives your question bids more weight, makes your questions stand out, and lowers the cost of participating in new roles.
        </p>
      </section >
    </div >
  );
}
