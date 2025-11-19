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
            Many people could succeed in your role.
            <br />
            The problem is which one.
          </h1>
          <p className="text-base text-loam-muted mx-auto max-w-xl">
            We pool expertise from recruiters, domain experts, and AI—they compete using{" "}
            <span
              className="group relative inline-block cursor-pointer underline decoration-dotted underline-offset-4"
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(!showTooltip);
              }}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              prediction markets
              {/* Mobile Backdrop */}
              {showTooltip && (
                <div
                  className="fixed inset-0 z-40 bg-black/20 md:hidden"
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
                Instead of just voting, participants bet on outcomes. This aligns incentives: if you're right, you earn. If you're wrong, you lose. It filters out noise and surfaces the best candidates.
              </span>
            </span>{" "}
            to find your best matches. Only the ones who deliver earn rewards. One email a day. Pay only when you hire.
          </p>
        </div>
      </section>

      {/* Fractal intro */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-loam-muted">Starting with</p>
          <h2 className="text-2xl font-semibold tracking-tight">
            <a href="https://fractalbootcamp.com/" target="_blank" rel="noopener noreferrer" className="hover:text-loam-accent">Fractal Bootcamp</a> Alumni Network
          </h2>
          <p className="text-sm text-loam-muted max-w-xl">
            In partnership with Fractal Bootcamp. Founding engineers in NYC, vetted by founders who've worked with them. If your hire isn't shipping, a FAANG-level engineer steps in.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="/fractal"
            className="inline-flex items-center justify-center rounded-full bg-loam-accent px-5 py-2 text-xs font-medium text-white shadow-sm hover:opacity-90"
          >
            See how it works
          </a>
          <a
            href="mailto:fractal@loam.market"
            className="inline-flex items-center justify-center rounded-full border border-loam-border bg-white/70 px-5 py-2 text-xs font-medium text-loam-ink shadow-sm hover:bg-white"
          >
            Email fractal@loam.market
          </a>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-loam-muted">Coming Soon</h2>
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

      {/* Process for employers */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-loam-muted">Process for employers</h2>
        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 sm:p-5 flex flex-col">
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 px-2.5 py-0.5 text-xs font-semibold text-loam-accent">
                1
              </span>
            </div>
            <h3 className="text-base font-semibold text-loam-ink mb-2">
              Email your role
            </h3>
            <p className="text-sm text-loam-muted leading-relaxed">
              Send it in any format to <a href="mailto:role@loam.market" className="underline hover:text-loam-accent">role@loam.market</a>.
            </p>
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 sm:p-5 flex flex-col">
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 px-2.5 py-0.5 text-xs font-semibold text-loam-accent">
                2
              </span>
            </div>
            <h3 className="text-base font-semibold text-loam-ink mb-2">
              We reply once a day
            </h3>
            <p className="text-sm text-loam-muted leading-relaxed">
              We ask questions about the role and candidates. You reply with only what you want to provide.
            </p>
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 sm:p-5 flex flex-col">
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 px-2.5 py-0.5 text-xs font-semibold text-loam-accent">
                3
              </span>
            </div>
            <h3 className="text-base font-semibold text-loam-ink mb-2">
              Pay on success
            </h3>
            <p className="text-sm text-loam-muted leading-relaxed">
              Industry competitive success fee when a match is made.
            </p>
          </div>
        </div>
      </section>

      {/* Logic behind this */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-loam-muted">Logic behind this</h2>
        <p className="text-sm text-loam-muted max-w-xl">
          We combine expertise in a principled way using prediction markets. We intentionally engineer mechanisms like our question bidding system to help the market surface the information it needs to find the best matches.
        </p>
        <div className="space-y-3 text-sm text-loam-muted">
          <p>
            <span className="font-semibold text-loam-ink">Truth-finding through incentives.</span> Prediction markets are very good at finding the truth. Every incentive to lie is another's incentive to call it out. They fairly reward the best, and "experts" who are wrong lose and can't participate.
          </p>
          <p>
            <span className="font-semibold text-loam-ink">Dialectical process.</span> Bidding on questions enables a conversation with the goal of finding the truth. Role definitions shift as you interview. There's a lot of reading between the lines that no person or AI can get without digging.
          </p>
          <p>
            <span className="font-semibold text-loam-ink">Real experts.</span> Real experts with domain knowledge tease out the right questions. Traditional recruitment struggles to distinguish between AI-generated buzzwords and true indicators of talent.
          </p>
        </div>
      </section>

      {/* Who are the market experts */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-loam-muted">Who are the market experts</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 text-sm text-loam-muted">
            People who have or currently work in roles similar to the ones you are filling
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 text-sm text-loam-muted">
            Professionals with experience at top trading or quantitative investment firms
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 text-sm text-loam-muted">
            Traditional recruiters with proven backgrounds
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 text-sm text-loam-muted">
            Autonomous systems built by verified market experts
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 text-sm text-loam-muted sm:col-span-2">
            You. Employers and their staff are also welcome to participate.
          </div>
        </div>
        <div className="pt-2">
          <a
            href="/traders"
            className="inline-flex items-center justify-center rounded-full border border-loam-border bg-white/70 px-5 py-2 text-xs font-medium text-loam-ink shadow-sm hover:bg-white"
          >
            Learn about trading
          </a>
        </div>
      </section>

      {/* For communities */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold tracking-tight">Bring Loam to your community</h2>
          <p className="text-sm text-loam-muted max-w-xl">
            Bootcamp alumni, professional cohorts, mission-driven groups—any network with shared standards can run their own hiring market.
          </p>
        </div>
        <a
          href="/communities"
          className="inline-flex items-center justify-center rounded-full border border-loam-border bg-white/70 px-5 py-2 text-xs font-medium text-loam-ink shadow-sm hover:bg-white"
        >
          Learn more
        </a>
      </section>
    </div>
  );
}

