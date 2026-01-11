import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      label: "Step 01",
      title: "Molecular Alignment",
      description: "As fluids pass through the meter, the hydrogen bearing molecules travel through a controlled magnetic field that aligns hydrogen nuclei within the flow. This creates a stable physical reference across gas, oil, and water before any measurement is taken.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-spinecho-accent" stroke="currentColor" strokeWidth="1.5">
          {/* Field Lines */}
          <path d="M4 4v16M20 4v16" strokeOpacity="0.3" strokeDasharray="2 2" />
          {/* Aligned Nuclei */}
          <path d="M8 8l2 2-2 2M14 8l2 2-2 2M11 15l2 2-2 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      label: "Step 02",
      title: "Fluid Characterisation",
      description: "A precisely timed radio frequency pulse excites the aligned molecules. As they relax, each phase produces a distinct resonance decay signature. These signatures directly reveal the presence and proportion of oil, gas, and water based on fundamental physics, not inferred correlations.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-spinecho-accent" stroke="currentColor" strokeWidth="1.5">
          {/* RF Pulse hitting a target */}
          <path d="M2 12h4l2-8 4 16 2-8h8" strokeOpacity="0.3" />
          <circle cx="12" cy="12" r="3" className="animate-pulse" />
          <path d="M12 12L19 5" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      label: "Step 03",
      title: "Flow Measurement",
      description: "By analysing how these phase specific signals evolve as the fluid moves through the measurement volume, Spin Echo determines the true flow rate of each phase. This enables accurate, phase resolved flow measurement even under rapidly changing or transient conditions.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-spinecho-accent" stroke="currentColor" strokeWidth="1.5">
          {/* Time of Flight / Velocity between two points */}
          <path d="M4 7h16M4 17h16" strokeOpacity="0.2" />
          <path d="M7 7v10M17 7v10" />
          <path d="M7 12h10" strokeDasharray="4 2" />
          <path d="M14 9l3 3-3 3" />
        </svg>
      )
    },
    {
      label: "Step 04",
      title: "Operational Action",
      description: "High frequency measurement data streams directly into your control system. Operators receive live, phase resolved insights to optimise production, detect instability, and protect downstream equipment in real time.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-spinecho-accent" stroke="currentColor" strokeWidth="1.5">
          {/* High fidelity data stream */}
          <path d="M3 12h3l2-4 4 8 2-4h8" />
          <circle cx="21" cy="12" r="1" fill="currentColor" />
          <path d="M18 5l3-3m-3 17l3 3" strokeOpacity="0.4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 px-6 bg-spinecho-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-spinecho-accent font-mono text-sm uppercase tracking-[0.2em] mb-4">The Process</h2>
          <h3 className="text-3xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
            How Spin Echo delivers truth.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="mb-8 p-4 w-fit rounded-xl bg-white/5 border border-white/10 group-hover:border-spinecho-accent/50 transition-colors">
                {step.icon}
              </div>
              <div className="mb-4">
                <span className="text-xs font-mono text-spinecho-accent uppercase tracking-widest block mb-2">{step.label}</span>
                <h4 className="text-xl font-bold text-white leading-tight">{step.title}</h4>
              </div>
              <p className="text-spinecho-slate text-sm leading-relaxed">
                {step.description}
              </p>
              {/* Optional: Visual arrow indicating flow to next step on large screens */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-10 -right-4 text-white/10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14m-4-4l4 4-4 4" strokeWidth="1" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}