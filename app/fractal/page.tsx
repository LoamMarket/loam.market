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
          Fractal Bootcamp creates founding engineers in NYC. They're already vetted by the founders who've worked with them. We add a layer of pre-interviewing to reveal who will thrive in your specific startup environment.
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
        <div className="space-y-3 text-sm text-loam-muted">
          <p>
            <span className="font-semibold text-loam-ink">Already vetted.</span> Every candidate has been through Fractal Bootcamp and worked alongside founders who can vouch for their abilities.
          </p>
          <p>
            <span className="font-semibold text-loam-ink">Startup DNA.</span> These aren't just engineers—they're founding engineers who know how to ship fast and thrive in uncertainty.
          </p>
        </div>
      </section>

      {/* For companies */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">For companies hiring founding engineers</h2>
        <p className="text-sm text-loam-muted max-w-xl">
          Everyone in this pool is qualified. The question isn't "can they do the job?"—it's "will they thrive in <em>your</em> startup?"
        </p>
        <div className="grid gap-3 sm:gap-4">
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 sm:p-5">
            <h3 className="text-base font-semibold text-loam-ink mb-2 flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 px-2.5 py-0.5 text-xs font-semibold text-loam-accent">
                1
              </span>
              Describe your role
            </h3>
            <p className="text-sm text-loam-muted leading-relaxed">
              Email your needs to fractal@loam.market. What problems are you solving? What's your culture like?
            </p>
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 sm:p-5">
            <h3 className="text-base font-semibold text-loam-ink mb-2 flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 px-2.5 py-0.5 text-xs font-semibold text-loam-accent">
                2
              </span>
              Market pre-interviews candidates
            </h3>
            <p className="text-sm text-loam-muted leading-relaxed">
              Fractal alumni, founders, and domain experts ask candidates the questions that reveal deeper fit with your specific environment.
            </p>
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 sm:p-5">
            <h3 className="text-base font-semibold text-loam-ink mb-2 flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 px-2.5 py-0.5 text-xs font-semibold text-loam-accent">
                3
              </span>
              Answer clarifying questions
            </h3>
            <p className="text-sm text-loam-muted leading-relaxed">
              One email per day. The network asks high-signal questions to better understand what you need.
            </p>
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 sm:p-5">
            <h3 className="text-base font-semibold text-loam-ink mb-2 flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 px-2.5 py-0.5 text-xs font-semibold text-loam-accent">
                4
              </span>
              Meet candidates who will thrive
            </h3>
            <p className="text-sm text-loam-muted leading-relaxed">
              When the market converges on strong matches, you get intros to candidates who truly get your problems.
            </p>
          </div>
        </div>
        <div className="space-y-2 pt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-loam-muted">Pricing</p>
          <p className="text-sm text-loam-muted">
            Industry competitive success fee. Pay only when you hire.
          </p>
        </div>
      </section>

      {/* For candidates */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">For Fractal candidates</h2>
        <p className="text-sm text-loam-muted max-w-xl">
          Email your resume to fractal@loam.market. Answer questions from your network once a day. Highlight roles you're excited about. The Fractal network helps you find where you'll thrive, not just where you'll succeed.
        </p>
      </section>

      {/* For experts */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">For Fractal alumni and connected experts</h2>
        <p className="text-sm text-loam-muted max-w-xl">
          Get 100k free credits. Help your network find where they'll thrive. Use the question bidding system to pre-interview candidates and companies. Earn when you're right about long-term fit.
        </p>
        <div className="space-y-2 text-sm text-loam-muted pt-4">
          <p className="font-semibold text-loam-ink">How it works:</p>
          <p>
            Ask candidates and companies the questions that reveal deeper fit. Everyone in this pool is qualified—you're finding who will truly thrive in each specific environment. See a resume that's perfect for a role? Ask the candidate one clarifying question. Confused by what a startup is really looking for? Ask the founder.
          </p>
          <p>
            Your goal: fewest questions, highest-signal insights. Questions and responses are shared so the whole network learns.
          </p>
        </div>
        <p className="text-sm text-loam-muted pt-4">
          Email <a className="underline" href="mailto:trader@loam.market">trader@loam.market</a> with your Fractal connection.
        </p>
      </section>

      {/* FAQ */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-loam-muted">FAQ</h2>
        <div className="space-y-4 text-sm text-loam-muted">
          <div>
            <p className="font-semibold text-loam-ink">What kinds of roles?</p>
            <p>Founding engineer roles in NYC. Best fit for early-stage startups needing someone who can ship fast and thrive in uncertainty.</p>
          </div>

          <div>
            <p className="font-semibold text-loam-ink">How is this different from just hiring a Fractal grad?</p>
            <p>Everyone in this pool could succeed at your startup. We add pre-interviewing to find who will specifically <em>thrive</em> in your environment, culture, and problem space.</p>
          </div>

          <div>
            <p className="font-semibold text-loam-ink">Can experts evaluate their own candidates or roles?</p>
            <p>Yes. The market is robust—every incentive to be biased is another expert's incentive to call it out.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
