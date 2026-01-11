"use client";

import React from 'react';
import { DashboardPreview } from './Dashboard';

export default function ProductHardware() {
  const modules = [
    { 
      id: "01", 
      title: "Full Bore Flow Path", 
      subtitle: "The only component in contact with production fluids.", 
      description: "Spin Echo begins as a standard type approved polymer flow tube. There are no intrusions, restrictions, or moving parts in the flow path. The bore is designed to preserve natural multiphase behavior while providing a stable measurement volume for NMR sensing. By separating the flow path from the sensing hardware, Spin Echo minimizes erosion risk, simplifies certification, and preserves flow integrity across gas, condensate, and multiphase regimes.", 
      impact: "Reduced flow assurance risk and simplified integrity management at the wellhead.", 
      image: "https://i.postimg.cc/XJVFXzrz/module1.png" 
    },
    { 
      id: "02", 
      title: "Non Intrusive Sensing Probes", 
      subtitle: "Physics measurement without disturbing the flow.", 
      description: "Spin Echo probes are positioned outside the flow bore and never contact the produced fluids. Each probe is optimized for the expected flow regime and measurement objective, allowing the system to be configured for dry gas, wet gas, condensate, or multiphase applications. This modular probe approach avoids compromise designs while enabling accurate phase resolved measurement without flow conditioning or separation.", 
      impact: "Accurate multiphase measurement without separators, bypass lines, or intrusive instrumentation.", 
      image: "https://i.postimg.cc/W32rtHdC/module2.png" 
    },
    { 
      id: "03", 
      title: "Static Magnet Assembly", 
      subtitle: "A stable magnetic field by design, not adjustment.", 
      description: "The magnet system generates a uniform, static magnetic field around the flow bore. Unlike earlier NMR flow meters, field uniformity is achieved through fixed geometry rather than mechanical alignment or re shimming. With no moving or adjustable magnetic components, the system is inherently resistant to vibration, thermal cycling, and mechanical ageing.", 
      impact: "Long term measurement stability with minimal maintenance and no routine recalibration.", 
      image: "https://i.postimg.cc/bJzbdBZM/module3.png" 
    },
    { 
      id: "04", 
      title: "Integrated Electronics & Chassis", 
      subtitle: "High speed signal processing at the edge.", 
      description: "Electronics are integrated directly into the meter chassis, performing high frequency signal acquisition and phase resolved analysis at the wellhead. Data is processed locally before being transmitted to the control system, reducing latency and dependency on external computation. The structural chassis provides environmental protection, thermal stability, and mechanical robustness without influencing the measurement physics.", 
      impact: "Live operational insight with high availability in harsh field environments.", 
      image: "DASHBOARD" 
    }
  ];

  return (
    <section id="product" className="py-24 px-6 bg-spinecho-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-24 text-left">
          <h2 className="text-spinecho-accent font-mono text-sm uppercase tracking-[0.2em] mb-4">Modular Breakdown</h2>
          <h3 className="text-3xl lg:text-6xl font-bold text-white max-w-4xl leading-tight tracking-tight">
            Designed for the realities of <br /> modern field deployment.
          </h3>
        </div>

        <div className="space-y-40">
          {modules.map((module, index) => (
            <div 
              key={module.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-spinecho-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                  
                  <div className="relative glass-panel overflow-hidden border-white/5 bg-[#0F1115] aspect-video flex items-center justify-center shadow-2xl">
                    {module.image === "DASHBOARD" ? (
                      <div className="w-full h-full p-0">
                        <DashboardPreview />
                      </div>
                    ) : (
                      <img 
                        src={module.image} 
                        alt={module.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 text-left">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-spinecho-accent font-mono text-lg font-bold italic">0{module.id}</span>
                  <div className="h-px w-12 bg-spinecho-accent/30"></div>
                </div>
                
                <h4 className="text-3xl font-bold text-white mb-2 tracking-tight">{module.title}</h4>
                <p className="text-spinecho-accent font-mono text-[10px] uppercase tracking-widest mb-6 italic">
                  {module.subtitle}
                </p>
                
                <p className="text-spinecho-slate leading-relaxed mb-10 text-lg">
                  {module.description}
                </p>

                <div className="pt-8 border-t border-white/10">
                  <span className="text-[10px] font-mono text-spinecho-accent uppercase tracking-[0.2em] block mb-2">Commercial Impact</span>
                  <p className="text-white text-sm font-semibold italic leading-relaxed">
                    {module.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}