import React from "react";

export default function FractalPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-16">
      {/* Hero */}
      <section className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-wide text-loam-muted">
          <a href="https://fractalbootcamp.com/" target="_blank" rel="noopener noreferrer" className="hover:text-loam-accent">Fractal Bootcamp</a> Vetted Pool · NYC
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Everyone here could succeed.<br />We find who will thrive.
        </h1>
        <p className="text-base text-loam-muted max-w-xl">
          Founding engineers in NYC, vetted by founders who've worked with them. We add pre-interviewing to reveal who will thrive in your specific startup.
        </p>
        <a
          href="mailto:fractal@loam.market"
          className="inline-flex items-center justify-center rounded-full bg-loam-accent px-5 py-2 text-xs font-medium text-white shadow-sm hover:opacity-90"
        >
          Email fractal@loam.market
        </a>
      </section>

      {/* What Makes This Pool Special */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">What makes this pool special</h2>
        <div className="grid gap-3">
          <div className="rounded-lg border border-loam-border bg-white/50 p-4">
            <h3 className="font-semibold text-loam-ink text-sm mb-2">Already vetted</h3>
            <p className="text-sm text-loam-muted">
              Every candidate has been through Fractal Bootcamp and worked alongside founders who can vouch for their abilities.
            </p>
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4">
            <h3 className="font-semibold text-loam-ink text-sm mb-2">Startup DNA</h3>
            <p className="text-sm text-loam-muted">
              These aren't just engineers—they're founding engineers who know how to ship fast and thrive in uncertainty.
            </p>
          </div>
        </div>
      </section>

      {/* For Companies */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">For companies</h2>
        <p className="text-sm text-loam-muted max-w-xl">
          Everyone in this pool is qualified. The question isn't "can they do the job?"—it's "will they thrive in <em>your</em> startup?"
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 w-8 h-8 text-sm font-semibold text-loam-accent mb-2">
              1
            </div>
            <h3 className="font-semibold text-loam-ink text-sm">Describe your role</h3>
            <p className="text-sm text-loam-muted">
              Email your needs. What problems are you solving? What's your culture like?
            </p>
          </div>
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 w-8 h-8 text-sm font-semibold text-loam-accent mb-2">
              2
            </div>
            <h3 className="font-semibold text-loam-ink text-sm">We pre-interview</h3>
            <p className="text-sm text-loam-muted">
              Fractal alumni, founders, and domain experts ask questions that reveal deeper fit.
            </p>
          </div>
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 w-8 h-8 text-sm font-semibold text-loam-accent mb-2">
              3
            </div>
            <h3 className="font-semibold text-loam-ink text-sm">Answer questions</h3>
            <p className="text-sm text-loam-muted">
              One email per day max. High-signal questions to understand what you need.
            </p>
          </div>
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 w-8 h-8 text-sm font-semibold text-loam-accent mb-2">
              4
            </div>
            <h3 className="font-semibold text-loam-ink text-sm">Meet matches</h3>
            <p className="text-sm text-loam-muted">
              Get intros to candidates who truly get your problems and will thrive.
            </p>
          </div>
        </div>
        <div className="pt-4 rounded-lg border border-loam-border bg-loam-accent/5 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-loam-muted mb-1">Pricing</p>
          <p className="text-sm text-loam-muted">
            Industry competitive success fee. Pay only when you hire.
          </p>
        </div>
      </section>

      {/* For Candidates & Experts */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">For candidates & alumni</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-loam-border bg-white/50 p-4">
            <h3 className="font-semibold text-loam-ink text-sm mb-2">Fractal candidates</h3>
            <p className="text-sm text-loam-muted mb-3">
              Email your resume. Answer questions once a day. Find where you'll thrive, not just where you'll succeed.
            </p>
            <a href="mailto:fractal@loam.market" className="text-xs text-loam-accent hover:underline">
              fractal@loam.market
            </a>
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4">
            <h3 className="font-semibold text-loam-ink text-sm mb-2">Fractal alumni & experts</h3>
            <p className="text-sm text-loam-muted mb-3">
              Get 100k free credits. Help your network find where they'll thrive. Earn when you're right about long-term fit.
            </p>
            <a href="mailto:interviewer@loam.market" className="text-xs text-loam-accent hover:underline">
              interviewer@loam.market
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">FAQ</h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-loam-border bg-white/50 p-4">
            <p className="font-semibold text-loam-ink text-sm mb-2">What kinds of roles?</p>
            <p className="text-sm text-loam-muted">
              Founding engineer roles in NYC. Best fit for early-stage startups needing someone who can ship fast and thrive in uncertainty.
            </p>
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4">
            <p className="font-semibold text-loam-ink text-sm mb-2">How is this different from just hiring a Fractal grad?</p>
            <p className="text-sm text-loam-muted">
              Everyone in this pool could succeed at your startup. We add pre-interviewing to find who will specifically <em>thrive</em> in your environment, culture, and problem space.
            </p>
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4">
            <p className="font-semibold text-loam-ink text-sm mb-2">Can experts evaluate their own candidates or roles?</p>
            <p className="text-sm text-loam-muted">
              Yes. The market is robust—every incentive to be biased is another expert's incentive to call it out.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
