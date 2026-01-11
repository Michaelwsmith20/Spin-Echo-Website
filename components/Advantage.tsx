export default function Advantage() {
  return (
    <section className="py-24 px-6 bg-[#0F1115]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: The Technical Argument */}
          <div>
            <h2 className="text-spinecho-accent font-mono text-sm uppercase tracking-[0.2em] mb-4">
              Technical Differentiation
            </h2>
            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              From Correlation-based <br /> 
              to First-Principles.
            </h3>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-spinecho-accent/10 flex items-center justify-center border border-spinecho-accent/20">
                  <span className="text-spinecho-accent font-bold">01</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Direct Phase Sensing</h4>
                  <p className="text-spinecho-slate leading-relaxed">
                    Instead of using pressure drops or ultrasonic timing to infer flow, our NMR tech directly senses the hydrogen atoms in each phase. We quantify oil, gas, and water by their molecular signature.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-spinecho-accent/10 flex items-center justify-center border border-spinecho-accent/20">
                  <span className="text-spinecho-accent font-bold">02</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Inherent Signal Validation</h4>
                  <p className="text-spinecho-slate leading-relaxed">
                    The NMR resonance signal provides its own quality check. If the fluid regime changes, the signal characterizes the change immediately. No manual "re-tuning" of correlations required.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Visual Data Comparison */}
          <div className="glass-panel p-8 relative overflow-hidden">
            <div className="mb-6 pb-6 border-b border-white/5">
              <div className="flex justify-between items-end mb-4">
                <span className="text-xs font-mono text-white/40 uppercase">Legacy Inference Data</span>
                <span className="text-xs text-red-400 font-mono">High Uncertainty</span>
              </div>
              <div className="h-16 flex items-end gap-1">
                {[...Array(20)].map((_, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-red-400/20" 
                    style={{ height: `${Math.random() * 80 + 20}%` }} 
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-end mb-4">
                <span className="text-xs font-mono text-spinecho-accent uppercase">Spin Echo Resolution</span>
                <span className="text-xs text-spinecho-accent font-mono">Continuous Truth</span>
              </div>
              <div className="h-24 flex items-end gap-1 relative">
                <div className="absolute inset-0 bg-spinecho-accent/5 blur-xl rounded-full" />
                {[...Array(30)].map((_, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-spinecho-accent transition-all duration-1000" 
                    style={{ 
                      height: `${40 + Math.sin(i * 0.5) * 20 + Math.random() * 5}%`,
                      opacity: 0.6 + (Math.random() * 0.4)
                    }} 
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-[11px] font-mono text-spinecho-slate uppercase tracking-wider">
                Real-time phase characterization // Frequency: 10Hz+
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}