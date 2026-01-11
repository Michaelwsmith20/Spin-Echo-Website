export default function Problem() {
  const painPoints = [
    {
      title: "High GVF Uncertainty",
      description: "Conventional meters struggle in wet gas and transient regimes, leading to unreliable production data when gas volume dominates.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-spinecho-accent" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 12c.5.5 1.5.5 2 0s1.5-.5 2 0 1.5.5 2 0 1.5-.5 2 0 1.5.5 2 0 1.5-.5 2 0 1.5.5 2 0 1.5-.5 2 0" />
          <path d="M2 17c.5.5 1.5.5 2 0s1.5-.5 2 0 1.5.5 2 0 1.5-.5 2 0 1.5-.5 2 0 1.5-.5 2 0 1.5-.5 2 0" />
          <path d="M2 7c.5.5 1.5.5 2 0s1.5-.5 2 0 1.5.5 2 0 1.5-.5 2 0 1.5-.5 2 0 1.5-.5 2 0 1.5-.5 2 0" opacity="0.3" />
        </svg>
      )
    },
    {
      title: "Radioactive Risks",
      description: "Many legacy multiphase meters rely on radioactive sources, increasing regulatory burden, HSE risk, and operational complexity.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-spinecho-accent" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 12L8 5.5M12 12l4-6.5M12 12v9" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "Low-Frequency Data",
      description: "Existing measurement systems deliver data that is too slow, noisy, or uncertain to support real-time operational decisions.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-spinecho-accent" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 17l4-4 4 4 4-4 6 6" />
          <path d="M3 7l4 4 4-4 4 4 6-6" opacity="0.3" />
        </svg>
      )
    },
    {
      title: "The Inference Gap",
      description: "Operators are forced to rely on inferred models and periodic well tests instead of continuous, first-principles measurement.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-spinecho-accent" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 12h18M12 3v18" opacity="0.2" />
          <circle cx="12" cy="12" r="4" strokeDasharray="2 2" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 px-6 bg-spinecho-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-spinecho-accent font-mono text-sm uppercase tracking-[0.2em] mb-4">The Challenge</h2>
          <h3 className="text-3xl lg:text-5xl font-bold text-white max-w-3xl">
            Legacy measurement leaves a blind spot in the pipe.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <div key={index} className="glass-panel p-8 border-white/5 hover:border-spinecho-accent/30 transition-all duration-300 group hover:-translate-y-1">
              <div className="mb-6">
                {point.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4 leading-snug">{point.title}</h4>
              <p className="text-spinecho-slate text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}