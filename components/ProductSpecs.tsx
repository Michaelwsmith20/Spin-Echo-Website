import React from 'react';

export default function ProductSpecs() {
  const generalSpecs = [
    { label: "Service", value: "Sour per NACE MR0175 / ISO 15156" },
    { label: "Max Working pressure", value: "100 bar / 1500 psi" },
    { label: "Ambient Temperature", value: "-4°F to 140°F [-20 to 60°C]" },
    { label: "Process Temperature", value: "32°F to 194°F [0 to 82°C]" },
    { label: "Power Consumption", value: "230 VAC / 150 W" },
    { label: "Connectivity", value: "RS 485 or Ethernet TCP IP (Modbus)" },
    { label: "Hazardous Zone Classification", value: "ATEX, IECEx, CSA, UL" },
    { label: "Ingress Protection", value: "IP67 / NEMA 4X" },
    { label: "Dimensions (L x W x H)", value: "3500mm x 300mm x 450mm" },
    { label: "Weight", value: "~500 kgs" },
    { label: "Water in Liquid Ratio (WLR)", value: "0 to 100%" },
    { label: "Gaseous Void Fraction", value: "0 to 100%" },
  ];

  const performanceMatrix = [
    { application: "MPFM (Oil Production)", liq: "< 3%", gas: "< 5%", velocity: "5 m/s", response: "0.1 s" },
    { application: "MPFM (Wet Gas)", liq: "< 5%", gas: "< 3%", velocity: "20 m/s", response: "5 s" },
    { application: "SPFM (Binary H2)", liq: "—", gas: "< 0.5%", velocity: "20 m/s", response: "5 s" },
  ];

  return (
    <section id="specs" className="py-24 px-6 bg-[#0A0C10]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-spinecho-accent font-mono text-sm uppercase tracking-[0.2em] mb-4">Metrology Data</h2>
          <h3 className="text-3xl lg:text-5xl font-bold text-white">Technical Specification</h3>
          <p className="text-spinecho-slate mt-4 font-mono text-xs uppercase tracking-widest">Target Specification (4 Inch Nominal variant)</p>
        </div>

        {/* General Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0 border-t border-white/10 mb-20">
          {generalSpecs.map((spec, index) => (
            <div key={index} className="flex justify-between py-4 border-b border-white/5 group hover:bg-white/[0.02] px-2 transition-colors">
              <span className="text-spinecho-slate text-sm font-medium">{spec.label}</span>
              <span className="text-white text-sm font-mono text-right">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Application Specific Performance Matrix */}
        <div className="mb-8">
          <h4 className="text-white font-bold text-xl mb-8">Application Specific Performance</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-4 text-spinecho-accent font-mono text-[10px] uppercase tracking-widest">Application</th>
                  <th className="py-4 px-4 text-spinecho-accent font-mono text-[10px] uppercase tracking-widest text-right">Liquid Accuracy</th>
                  <th className="py-4 px-4 text-spinecho-accent font-mono text-[10px] uppercase tracking-widest text-right">Gas Accuracy</th>
                  <th className="py-4 px-4 text-spinecho-accent font-mono text-[10px] uppercase tracking-widest text-right">Max Velocity</th>
                  <th className="py-4 px-4 text-spinecho-accent font-mono text-[10px] uppercase tracking-widest text-right">Response T</th>
                </tr>
              </thead>
              <tbody>
                {performanceMatrix.map((row, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-6 px-4 text-white font-bold text-sm">{row.application}</td>
                    <td className="py-6 px-4 text-spinecho-slate font-mono text-sm text-right">{row.liq}</td>
                    <td className="py-6 px-4 text-spinecho-slate font-mono text-sm text-right">{row.gas}</td>
                    <td className="py-6 px-4 text-spinecho-slate font-mono text-sm text-right">{row.velocity}</td>
                    <td className="py-6 px-4 text-spinecho-slate font-mono text-sm text-right">{row.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-8">
          <p className="text-spinecho-slate text-[10px] italic font-mono uppercase tracking-widest">
            * higher pressures available by special order
          </p>
        </div>

      </div>
    </section>
  );
}