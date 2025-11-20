const sections = [
  {
    title: "General",
    items: [
      {
        question: "How is this different from a normal recruiter?",
        answer:
          "Traditional recruiting gives you the opinion of one firm. Loam runs a market where many experts compete on who is most likely to succeed. The market rewards people who are right and pushes out people who are often wrong.",
      },
      {
        question: "What is a prediction market in plain language?",
        answer:
          "It’s a place where people trade on what they think will happen. Prices move based on where people put their credits, and that price reflects the market’s odds. In Loam’s case, the market predicts who will succeed in a given role.",
      },
      {
        question: "How do market rewards work?",
        answer:
          "When a match is made, a success fee is paid out. Experts who were on the right side earn a share.",
      },
      {
        question: "What does ‘unbiased’ actually mean here?",
        answer:
          "We don’t argue for or against candidates. We earn from credits and a portion of the success fee. Questions remain authentic, tooling is open source, and markets surface the truth.",
      },
      {
        question: "What data do you share with the market?",
        answer:
          "Questions and responses are shared with verified experts so they can learn what signals matter. Role details and resumes are used only to run the markets. Candidates choose which roles they engage with.",
      },
    ],
  },
  {
    title: "Fractal network",
    items: [
      {
        question: "What kinds of roles do you support?",
        answer: "Right now we are focusing on the software industry. Founding engineer roles in NYC through the Fractal network. More technical roles are coming soon.",
      },


      {
        question: "How do you verify experts?",
        answer:
          "Fractal alumni verify via their bootcamp email or portfolio. Founders and advisors verify via work email or LinkedIn. We prioritize people with direct Fractal ties.",
      },
      {
        question: "Can someone be both a candidate and an expert?",
        answer: "Yes. Many alumni are hiring for their own startups while also exploring other opportunities.",
      },
    ],
  },

];

export default function FaqPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight">FAQ</h1>
        <p className="text-sm text-loam-muted max-w-2xl">
          Answers for employers, candidates, and experts using community-validated prediction markets.
        </p>
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-loam-muted">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-lg border border-loam-border bg-white/50 p-4"
                  >
                    <p className="font-semibold text-loam-ink text-base mb-2">
                      {item.question}
                    </p>
                    <p className="text-sm text-loam-muted leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
