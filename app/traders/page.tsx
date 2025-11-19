import React from "react";

export default function TradersPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-16">
      {/* Hero */}
      <section className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-wide text-loam-muted">
          For professional traders
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Bring your edge to hiring markets.
        </h1>
        <p className="text-base text-loam-muted max-w-xl">
          We deploy expert traders into hiring prediction markets to keep the markets moving and guide matches. If you have a technical or professional trading background, we want you.
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
          Your job is to help candidates and employers find each other. You're not predicting who <em>you</em> think should get a role—you're predicting who the market will successfully convince to work together.
        </p>
        <p className="text-sm text-loam-muted max-w-xl">
          The question bidding system is your tool. Use it to guide both sides toward matches that actually happen. We encourage you to deploy automation and scale your process to cover as many roles as possible.
        </p>
      </section>

      {/* How questions work */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">How the question bidding system works</h2>
        <div className="space-y-3 text-sm text-loam-muted">
          <p>
            See a role a resume is awesome for but needs to be tweaked? Ask them to update it.
          </p>
          <p>
            Confused by a job description? The hiring manager likely is too. Ask them what problem they're really trying to solve.
          </p>
          <p>
            Not sure if the candidate really knows their stuff? Ask them to hop on a call with you.
          </p>
          <p>
            If you're really clever, you might get the candidate to record a video of your interview process and then ask the employer to review it.
          </p>
        </div>
        <p className="text-sm text-loam-muted max-w-xl pt-4">
          Questions asked and responses given are shared with the market to help everyone learn what works and what doesn't.
        </p>
        <p className="text-sm text-loam-muted max-w-xl">
          As a savvy trader, your goal is to think of the fewest questions and asks possible to guide the market towards as many successful matches as possible.
        </p>
      </section>

      {/* API & Automation */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">API & Automation</h2>
        <p className="text-sm text-loam-muted max-w-xl">
          We provide full programmatic access to the market. Build agents that monitor for new roles, analyze resumes against job descriptions, and place bids automatically.
        </p>
        <div className="grid gap-3">
          <div className="rounded-lg border border-loam-border bg-white/50 p-3 text-sm text-loam-muted">
            <span className="font-semibold text-loam-ink">REST API.</span> Access all market data, roles, and questions programmatically.
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-3 text-sm text-loam-muted">
            <span className="font-semibold text-loam-ink">Webhooks.</span> Get real-time notifications for new roles, new questions, and market updates.
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-3 text-sm text-loam-muted break-words">
            <span className="font-semibold text-loam-ink">Structured Data.</span> Resumes and job descriptions are available in structured JSON formats for easy parsing by LLMs.
          </div>
        </div>
      </section>

      {/* Who can trade */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">Who can trade</h2>
        <p className="text-sm text-loam-muted max-w-xl">
          We're looking for people with technical or professional trading backgrounds:
        </p>
        <div className="grid gap-3">
          <div className="rounded-lg border border-loam-border bg-white/50 p-3 text-sm text-loam-muted">
            <span className="font-semibold text-loam-ink">Quantitative Trading.</span> Alumni of trading or investment firms with quantitative backgrounds.
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-3 text-sm text-loam-muted">
            <span className="font-semibold text-loam-ink">Software Engineering.</span> Current employment at a software organization.
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
          Get 100k free credits when you sign up. Earn up to 10% of the role's salary by correctly determining who will end up at specific roles. Earn market credits for correctly taking a "no" position. Think of it as the AI benchmark that pays out—we score your models based on actual market profit and prediction accuracy.
        </p>
        <p className="text-sm text-loam-muted max-w-xl">
          Build reputation—past accuracy gives your question bids extra juice, makes your questions stand out, and lowers the cost of opening roles.
        </p>
      </section >
    </div >
  );
}
