export default function CommunitiesPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-16">
      {/* Hero */}
      <section className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-wide text-loam-muted">
          For community leaders
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Turn your network into a hiring advantage.
        </h1>
        <p className="text-base text-loam-muted max-w-xl">
          Your community has shared standards and mutual trust. Loam channels that into a hiring marketplace where members vet candidates.
        </p>
        <a
          href="mailto:communities@loam.market"
          className="inline-flex items-center justify-center rounded-full bg-loam-accent px-5 py-2 text-xs font-medium text-white shadow-sm hover:opacity-90"
        >
          Email communities@loam.market
        </a>
      </section>

      {/* Good fit */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">Good fit for</h2>
        <p className="text-sm text-loam-muted max-w-xl">
          Bootcamp alumni, MBA cohorts, mission-aligned groups (EA, climate tech), professional cohorts (YC batch, On Deck), law schools—any network with shared standards.
        </p>
      </section>

      {/* How it works */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">How it works</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 text-sm text-loam-muted">
            <span className="font-semibold text-loam-ink block mb-1">1. Custom setup</span>
            We learn your standards and create a custom community page.
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 text-sm text-loam-muted">
            <span className="font-semibold text-loam-ink block mb-1">2. Seed experts</span>
            Seed 10–20 members as initial experts and run 1–2 test roles.
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 text-sm text-loam-muted">
            <span className="font-semibold text-loam-ink block mb-1">3. Launch</span>
            Launch to your community. Markets run, matches emerge.
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-4 text-sm text-loam-muted">
            <span className="font-semibold text-loam-ink block mb-1">4. Network effects</span>
            Network effects build as more members see it working.
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">Pricing</h2>
        <p className="text-sm text-loam-muted max-w-xl">
          Free for the community. Employers pay an industry competitive success fee when they hire (dynamic per community). Experts get 100k free credits. Candidates pay nothing.
        </p>
      </section>

      {/* What we need */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">What we need from you</h2>
        <div className="grid gap-3">
          <div className="rounded-lg border border-loam-border bg-white/50 p-3 text-sm text-loam-muted">
            Intro to 10–20 engaged members (hiring managers, seekers, evaluators).
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-3 text-sm text-loam-muted">
            Description of your standards—what makes someone succeed in your roles?
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-3 text-sm text-loam-muted">
            1–2 test roles with hiring managers willing to pilot.
          </div>
          <div className="rounded-lg border border-loam-border bg-white/50 p-3 text-sm text-loam-muted">
            Comms channel (Slack, Discord, email list) for announcements.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-4 border-t border-loam-border pt-12">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-loam-muted">FAQ</h2>
        <div className="space-y-4 text-sm text-loam-muted">
          <div>
            <p className="font-semibold text-loam-ink">Do we manage the marketplace?</p>
            <p>No. We run the platform, handle payments, and moderate. You make intros and celebrate placements.</p>
          </div>
          <div>
            <p className="font-semibold text-loam-ink">Can we keep this private?</p>
            <p>Yes. Invite-only with verified experts.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="space-y-3 border-t border-loam-border pt-12">
        <h2 className="text-lg font-semibold tracking-tight">Get started</h2>
        <p className="text-sm text-loam-muted">
          Email <a className="underline" href="mailto:communities@loam.market">communities@loam.market</a> with your community name, size, typical roles, and why prediction markets would work for your network.
        </p>
      </section>
    </div>
  );
}
