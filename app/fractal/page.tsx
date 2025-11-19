import React from "react";

export default function FractalPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-16">
      {/* Hero */}
      <section className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-wide text-loam-muted">
          <a href="https://fractalbootcamp.com/" target="_blank" rel="noopener noreferrer" className="hover:text-loam-accent">Fractal Bootcamp</a> Alumni Network · NYC
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Founding engineers, vetted by founders.
        </h1>
        <p className="text-base text-loam-muted max-w-xl">
          In partnership with <a href="https://fractalbootcamp.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-loam-accent">Fractal Bootcamp</a>, which forges founding engineers. Alumni are building at startups across NYC. If your hire isn't shipping, a FAANG-level engineer steps in.
        </p>
        <a
          href="mailto:fractal@loam.market"
          className="inline-flex items-center justify-center rounded-full bg-loam-accent px-5 py-2 text-xs font-medium text-white shadow-sm hover:opacity-90"
        >
          Email fractal@loam.market
        </a>
      </section>

      {/* For companies */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">For companies hiring founding engineers or startup-ready talent</h2>
        <div className="grid gap-3 sm:gap-4">
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 sm:p-5">
            <h3 className="text-base font-semibold text-loam-ink mb-2 flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 px-2.5 py-0.5 text-xs font-semibold text-loam-accent">
                1
              </span>
              Email your role
            </h3>
            <p className="text-sm text-loam-muted leading-relaxed">
              Send it to fractal@loam.market.
            </p>
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 sm:p-5">
            <h3 className="text-base font-semibold text-loam-ink mb-2 flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 px-2.5 py-0.5 text-xs font-semibold text-loam-accent">
                2
              </span>
              Answer daily questions
            </h3>
            <p className="text-sm text-loam-muted leading-relaxed">
              The network asks what matters. You choose what to share.
            </p>
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 sm:p-5">
            <h3 className="text-base font-semibold text-loam-ink mb-2 flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 px-2.5 py-0.5 text-xs font-semibold text-loam-accent">
                3
              </span>
              Market evaluates fit
            </h3>
            <p className="text-sm text-loam-muted leading-relaxed">
              Alumni, founders, and experts compete to find the best matches.
            </p>
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 sm:p-5">
            <h3 className="text-base font-semibold text-loam-ink mb-2 flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 px-2.5 py-0.5 text-xs font-semibold text-loam-accent">
                4
              </span>
              High-confidence intro
            </h3>
            <p className="text-sm text-loam-muted leading-relaxed">
              When the market converges, you meet your candidate.
            </p>
          </div>
        </div>
        <div className="space-y-2 pt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-loam-muted">Pricing</p>
          <p className="text-sm text-loam-muted">
            Industry competitive success fee when you hire.
          </p>
        </div>
      </section>

      {/* For candidates */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">For Fractal candidates</h2>
        <p className="text-sm text-loam-muted max-w-xl">
          Email your resume to fractal@loam.market. Answer questions from your network once a day. Highlight roles you're excited about. The Fractal network vouches for you.
        </p>
      </section>

      {/* For experts */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">For Fractal alumni experts</h2>
        <p className="text-sm text-loam-muted max-w-xl">
          Get 100k free credits. Bid to ask candidates questions. Predict who will succeed and earn market rewards when you're right. Build reputation—accuracy makes your questions more visible.
        </p>
        <div className="space-y-2 text-sm text-loam-muted pt-4">
          <p className="font-semibold text-loam-ink">How the question bidding system works:</p>
          <p>
            You can ask questions to both candidates and employers. See a resume that's almost perfect for a role? Ask the candidate to tweak it. Confused by a job description? Ask the employer what problem they're really solving. Your goal is to guide both sides to each other with the fewest questions possible.
          </p>
          <p>
            Questions and responses are shared with the market so everyone learns what works.
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
            <p>Founding engineer roles in NYC through the Fractal network. More technical roles coming soon.</p>
          </div>

          <div>
            <p className="font-semibold text-loam-ink">How do you verify experts?</p>
            <p>Fractal alumni verify via bootcamp email or portfolio. Founders and advisors verify via work email or LinkedIn.</p>
          </div>
          <div>
            <p className="font-semibold text-loam-ink">Can experts trade on their own roles or candidates?</p>
            <p>Yes. Prediction markets are robust—every incentive to lie is another's incentive to call them out.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
