"use client";

import { useState } from "react";

export default function Home() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="mx-auto max-w-2xl space-y-10 md:space-y-16">
      {/* Hero */}
      <section className="space-y-6 text-center">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Vetted pools where everyone could succeed.
            <br />
            We find who will thrive.
          </h1>
          <p className="text-base text-loam-muted mx-auto max-w-xl">
            We start with vetted talent pools—then use{" "}
            <span
              className="group relative inline-block cursor-pointer underline decoration-dotted underline-offset-4"
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(!showTooltip);
              }}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              pre-interviewing
              {/* Mobile Backdrop */}
              {showTooltip && (
                <span
                  className="fixed inset-0 z-40 bg-black/20 md:hidden block"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowTooltip(false);
                  }}
                />
              )}
              {/* Tooltip Content */}
              <span
                className={`fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 w-auto rounded-lg border border-loam-border bg-white p-4 text-sm text-loam-ink shadow-xl md:absolute md:inset-auto md:bottom-full md:left-1/2 md:mb-2 md:w-64 md:-translate-x-1/2 md:translate-y-0 md:p-3 md:text-xs md:shadow-lg ${showTooltip ? 'block' : 'hidden'}`}
                onClick={(e) => e.stopPropagation()}
              >
                Recruiters, domain experts, and peers from similar roles bid on which questions to ask candidates and companies. Then they participate in a prediction market, betting on who is worth your time based on the answers. They're financially incentivized to be right.
              </span>
            </span>{" "}
            to reveal who will thrive in your specific environment. Pay only when you hire.
          </p>
        </div>
      </section>

      {/* How Pre-Interviewing Works */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-loam-muted">How Pre-Interviewing Works</h2>
        <p className="text-sm text-loam-muted max-w-xl">
          Recruiters, domain experts, and peers from similar roles bid to ask candidates and you the questions that matter. Then they trade on prediction markets based on the answers to decide who is worth your time. They're financially incentivized to find truth: earn when they're right, lose when they're wrong.
        </p>
        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 sm:p-5">
            <h3 className="text-base font-semibold text-loam-ink mb-2 flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 px-2.5 py-0.5 text-xs font-semibold text-loam-accent">
                1
              </span>
              Send your role
            </h3>
            <p className="text-sm text-loam-muted leading-relaxed">
              Email <a href="mailto:role@loam.market" className="underline hover:text-loam-accent">role@loam.market</a> with your needs. If it's unclear, the market will ask clarifying questions.
            </p>
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 sm:p-5">
            <h3 className="text-base font-semibold text-loam-ink mb-2 flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 px-2.5 py-0.5 text-xs font-semibold text-loam-accent">
                2
              </span>
              We pre-interview
            </h3>
            <p className="text-sm text-loam-muted leading-relaxed">
              Participants evaluate candidates from our vetted pools, asking questions that reveal competency and cultural fit.
            </p>
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 sm:p-5">
            <h3 className="text-base font-semibold text-loam-ink mb-2 flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 px-2.5 py-0.5 text-xs font-semibold text-loam-accent">
                3
              </span>
              Meet matches
            </h3>
            <p className="text-sm text-loam-muted leading-relaxed">
              One email per day max with high-signal questions and candidates. Pay only when you hire.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-loam-muted">Why This Works</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <h3 className="font-semibold text-loam-ink">Fewer Interviews</h3>
            <p className="text-sm text-loam-muted">
              Pre-interviewing filters candidates before they reach your desk. Only see people who've been thoroughly vetted for competency and fit.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-loam-ink">Better Matches</h3>
            <p className="text-sm text-loam-muted">
              Beyond credentials, we reveal who truly understands your problems and will thrive in your culture—not just survive.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-loam-ink">Faster Hires</h3>
            <p className="text-sm text-loam-muted">
              Aligned incentives mean quality moves quickly. Our participants lose money if they're wrong about a candidate.
            </p>
          </div>
        </div>
      </section>

      {/* Our First Vetted Pool */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-loam-muted">Our First Vetted Pool</p>
          <h2 className="text-2xl font-semibold tracking-tight">
            In partnership with <a href="https://fractalbootcamp.com/" target="_blank" rel="noopener noreferrer" className="hover:text-loam-accent">Fractal Bootcamp</a> Alumni
          </h2>
          <p className="text-sm text-loam-muted max-w-xl">
            Founding engineers in NYC. Vetted by founders who've worked with them. Everyone in this pool could succeed—we help you find who will thrive in your startup.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="/fractal"
            className="inline-flex items-center justify-center rounded-full bg-loam-accent px-5 py-2 text-xs font-medium text-white shadow-sm hover:opacity-90"
          >
            Explore this pool
          </a>
          <a
            href="mailto:fractal@loam.market"
            className="inline-flex items-center justify-center rounded-full border border-loam-border bg-white/70 px-5 py-2 text-xs font-medium text-loam-ink shadow-sm hover:bg-white"
          >
            Email fractal@loam.market
          </a>
        </div>
      </section>

      {/* More Vetted Pools Coming */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-loam-muted">More Vetted Pools Coming</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <h3 className="font-medium text-loam-ink">
              <a href="https://bluedot.org/join-us" target="_blank" rel="noopener noreferrer" className="hover:text-loam-accent">Blue Dot</a>
            </h3>
            <p className="text-sm text-loam-muted">AI researchers and engineers from the Blue Dot network.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium text-loam-ink">
              <a href="https://www.highimpactprofessionals.org/" target="_blank" rel="noopener noreferrer" className="hover:text-loam-accent">High Impact Professionals</a>
            </h3>
            <p className="text-sm text-loam-muted">Mission-aligned professionals tackling global challenges.</p>
          </div>
        </div>
      </section>

      {/* Logic behind this */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-loam-muted">what sets us apart</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <h3 className="font-semibold text-loam-ink text-sm">Truth-finding</h3>
            <p className="text-sm text-loam-muted">
              Prediction markets are very good at finding the truth. Every incentive to lie is another's incentive to call it out. They fairly reward the best, and "experts" who are wrong lose and can't participate.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-loam-ink text-sm">Rigorous debate</h3>
            <p className="text-sm text-loam-muted">
              Bidding on questions enables a conversation with the goal of finding the truth. Role definitions shift as you interview. There's a lot of reading between the lines that no person or AI can get without digging.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-loam-ink text-sm">Real experts</h3>
            <p className="text-sm text-loam-muted">
              Real experts with domain knowledge tease out the right questions. Traditional recruitment struggles to distinguish between AI-generated buzzwords and true indicators of talent.
            </p>
          </div>
        </div>
      </section>

      {/* Who Participates */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-loam-muted">Who Participates in Pre-Interviewing</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 text-sm text-loam-muted">
            People who work in roles similar to the ones you're filling
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 text-sm text-loam-muted">
            Professionals with experience at top firms who know how to evaluate talent
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 text-sm text-loam-muted">
            Recruiters with proven track records
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 text-sm text-loam-muted">
            You. Employers and their teams can participate too.
          </div>
        </div>
        <div className="pt-2">
          <a
            href="/traders"
            className="inline-flex items-center justify-center rounded-full border border-loam-border bg-white/70 px-5 py-2 text-xs font-medium text-loam-ink shadow-sm hover:bg-white"
          >
            Learn about participating
          </a>
        </div>
      </section>
    </div >
  );
}
