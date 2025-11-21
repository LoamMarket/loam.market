import React from "react";

export default function CandidatesPage() {
    return (
        <div className="mx-auto max-w-2xl space-y-16">
            {/* Hero */}
            <section className="space-y-4">
                <p className="text-xs font-medium uppercase tracking-wide text-loam-muted">
                    For candidates
                </p>
                <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                    Find where you'll thrive.
                </h1>
                <p className="text-base text-loam-muted max-w-xl">
                    Answer questions about your experience. Earn credits. Get matched to roles where you'll actually thrive, not just succeed.
                </p>
                <a
                    href="mailto:resume@loam.market"
                    className="inline-flex items-center justify-center rounded-full bg-loam-accent px-5 py-2 text-xs font-medium text-white shadow-sm hover:opacity-90"
                >
                    Email resume@loam.market
                </a>
            </section>

            {/* How It Works */}
            <section className="space-y-4 border-t border-loam-border pt-12">
                <h2 className="text-lg font-semibold tracking-tight">How it works</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                        <div className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 w-8 h-8 text-sm font-semibold text-loam-accent mb-2">
                            1
                        </div>
                        <h3 className="font-semibold text-loam-ink text-sm">Submit your profile</h3>
                        <p className="text-sm text-loam-muted">
                            Email us your resume and the types of roles you're looking for.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 w-8 h-8 text-sm font-semibold text-loam-accent mb-2">
                            2
                        </div>
                        <h3 className="font-semibold text-loam-ink text-sm">Answer questions</h3>
                        <p className="text-sm text-loam-muted">
                            Interviewers ask clarifying questions about your experience. One email per day max.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="inline-flex items-center justify-center rounded-full bg-loam-accent/10 w-8 h-8 text-sm font-semibold text-loam-accent mb-2">
                            3
                        </div>
                        <h3 className="font-semibold text-loam-ink text-sm">Get matched</h3>
                        <p className="text-sm text-loam-muted">
                            When the market converges, you get intros to companies where you'll thrive.
                        </p>
                    </div>
                </div>
            </section>

            {/* Earn While You Search */}
            <section className="space-y-4 border-t border-loam-border pt-12">
                <h2 className="text-lg font-semibold tracking-tight">Earn while you search</h2>
                <div className="grid gap-3">
                    <div className="rounded-lg border border-loam-border bg-white/50 p-4">
                        <h3 className="font-semibold text-loam-ink text-sm mb-2">Get credits for answering questions</h3>
                        <p className="text-sm text-loam-muted">
                            Every time you answer a question about your experience, you earn market credits. The more helpful your answers, the more you earn.
                        </p>
                    </div>
                    <div className="rounded-lg border border-loam-border bg-white/50 p-4">
                        <h3 className="font-semibold text-loam-ink text-sm mb-2">Use credits to participate</h3>
                        <p className="text-sm text-loam-muted">
                            Use your earned credits to participate in the prediction markets yourself—help evaluate other candidates and companies, and earn real money when you're right.
                        </p>
                    </div>
                    <div className="rounded-lg border border-loam-border bg-white/50 p-4">
                        <h3 className="font-semibold text-loam-ink text-sm mb-2">Or earn on autopilot</h3>
                        <p className="text-sm text-loam-muted">
                            Don't want to actively trade? Use our auto-invest feature. Your credits automatically invest in matches similar to yours, earning you returns while you focus on your search.
                        </p>
                    </div>
                </div>
            </section>

            {/* What Questions Look Like */}
            <section className="space-y-4 border-t border-loam-border pt-12">
                <h2 className="text-lg font-semibold tracking-tight">What questions look like</h2>
                <p className="text-sm text-loam-muted max-w-xl">
                    <span className="font-semibold text-loam-ink">You don't have to answer anything you don't want to.</span> It's the market's job to learn what questions you'll actually answer. Skip what doesn't feel right—the market adapts.
                </p>
                <div className="space-y-3 text-sm text-loam-muted">
                    <p>
                        <span className="font-semibold text-loam-ink">Example (500 credits):</span> "Your resume mentions scaling a system to 10M users—can you record a 3-minute video explaining the biggest technical tradeoff you made?"
                    </p>
                    <p>
                        <span className="font-semibold text-loam-ink">Example (200 credits):</span> "You said you're looking for early-stage startups—what's your definition of 'early-stage'? Pre-seed? Series A?"
                    </p>
                    <p>
                        <span className="font-semibold text-loam-ink">Example (1000 credits):</span> "Hop on a 15-minute call with me to dig into your distributed systems experience?"
                    </p>
                </div>
                <p className="text-sm text-loam-muted pt-2">
                    Questions help the market understand what you actually bring to the table and what environments you'll thrive in.
                </p>
            </section>

            {/* Eligibility */}
            <section className="space-y-4 border-t border-loam-border pt-12">
                <h2 className="text-lg font-semibold tracking-tight">Eligibility</h2>
                <div className="rounded-lg border border-loam-border bg-loam-accent/5 p-4">
                    <p className="text-sm text-loam-muted mb-3">
                        <span className="font-semibold text-loam-ink">Currently accepting candidates from specific vetted pools.</span> We partner with organizations that pre-vet talent, ensuring everyone in our system could succeed—we just help find where you'll thrive.
                    </p>
                    <p className="text-sm text-loam-muted">
                        Not in a pool yet? Email us anyway at <a href="mailto:resume@loam.market" className="underline text-loam-accent">resume@loam.market</a> and we'll let you know if there's a pool you can join or when we expand.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-loam-border pt-12 pb-4">
                <div className="rounded-lg border border-loam-border bg-loam-accent/5 p-6 text-center space-y-3">
                    <h2 className="text-lg font-semibold tracking-tight">Ready to find where you'll thrive?</h2>
                    <p className="text-sm text-loam-muted max-w-md mx-auto">
                        Email us your resume and we'll let you know if you're eligible to join.
                    </p>
                    <a
                        href="mailto:resume@loam.market"
                        className="inline-flex items-center justify-center rounded-full bg-loam-accent px-5 py-2 text-xs font-medium text-white shadow-sm hover:opacity-90"
                    >
                        resume@loam.market
                    </a>
                </div>
            </section>
        </div>
    );
}
