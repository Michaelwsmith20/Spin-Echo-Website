"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer, Brush, AreaChart, Area, ReferenceLine
} from "recharts";
import {
  Activity, Thermometer, Gauge, Droplets, Flame,
  AlertTriangle, Settings, Map as MapIcon, RefreshCw,
  Download, Box, Zap
} from "lucide-react";

const THEME = {
  accent: "#06B6D4",
  oil: "#FFFFFF",
  gas: "#06B6D4",
  water: "#14B8A6",
  ngl: "#A855F7",
  propane: "#22C55E",
  butane: "#10B981",
  pentane: "#059669",
  hexane: "#047857",
  grid: "rgba(255,255,255,0.05)"
};

function generateSeries(days = 3) {
  const out = [];
  const now = new Date();
  for (let i = days * 96; i >= 0; i--) {
    const t = new Date(now.getTime() - i * 15 * 60 * 1000);
    const base = 1200 + 150 * Math.sin(i / 12);
    const oil = Math.max(0, base + (Math.random() - 0.5) * 80);
    const gas = Math.max(0, 300 + 60 * Math.cos(i / 8) + (Math.random() - 0.5) * 50);
    const water = Math.max(0, 180 + 40 * Math.sin(i / 6) + (Math.random() - 0.5) * 40);
    const nglBase = 80 + 20 * Math.sin(i / 10) + (Math.random() - 0.5) * 10;
    const qTotal = oil + gas + water + nglBase;
    
    const fP = 0.36 + 0.06 * Math.sin(i / 37);
    const fB = 0.28 + 0.04 * Math.cos(i / 29);
    const fPe = 0.22 + 0.03 * Math.sin(i / 41 + 1);
    const fH = Math.max(0.08, 1 - (fP + fB + fPe));

    out.push({
      time: t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      fullTime: t.toLocaleString(),
      oil: +oil.toFixed(1),
      gas: +gas.toFixed(1),
      water: +water.toFixed(1),
      ngl: +nglBase.toFixed(1),
      propane: +(nglBase * fP).toFixed(1),
      butane: +(nglBase * fB).toFixed(1),
      pentane: +(nglBase * fPe).toFixed(1),
      hexane: +(nglBase * fH).toFixed(1),
      qTotal: +qTotal.toFixed(1),
      gvf: +(gas / qTotal).toFixed(3),
      wlr: +(water / (oil + water || 1)).toFixed(3),
      p: +(45 + 2 * Math.sin(i / 24)).toFixed(2),
      T: +(68 + 3 * Math.cos(i / 36)).toFixed(2),
      sqi: +(0.98 - Math.abs(Math.sin(i / 42)) * 0.08).toFixed(3),
    });
  }
  return out;
}

const wells = [
  { id: "SE 01A", status: "Producing", operator: "Spin Echo Test Pad", basin: "Permian" },
  { id: "SE 02C", status: "Producing", operator: "Spin Echo Test Pad", basin: "Permian" },
];

function MetrologyKpi({ icon: Icon, label, value, unit, alert = false, small = false }) {
  return (
    <div className={`glass-panel ${small ? 'p-4' : 'p-5'} border-white/5 bg-white/[0.02] flex flex-col justify-between h-full`}>
      <div className="flex items-center gap-2 mb-3">
        <Icon size={14} className="text-spinecho-accent opacity-70" />
        <span className="text-[9px] font-mono text-spinecho-slate uppercase tracking-widest leading-none">{label}</span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className={`${small ? 'text-lg' : 'text-2xl'} font-bold font-mono text-white tabular-nums leading-none`}>{value}</span>
        <span className="text-[10px] font-mono text-spinecho-slate uppercase leading-none">{unit}</span>
      </div>
      {alert && <div className="mt-2 text-[9px] text-red-400 font-mono animate-pulse uppercase tracking-tighter">Attention Required</div>}
    </div>
  );
}

export default function FlowmeterDashboard() {
  const [hasMounted, setHasMounted] = useState(false);
  const [selectedWell, setSelectedWell] = useState(wells[0].id);
  const [isStacked, setIsStacked] = useState(true);
  const [pulseActive, setPulseActive] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const interval = setInterval(() => {
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const data = useMemo(() => {
    if (!hasMounted) return [];
    return generateSeries(3);
  }, [selectedWell, hasMounted]);

  const latest = data.length > 0 ? data[data.length - 1] : { qTotal: 0, gas: 0, oil: 0, water: 0, ngl: 0, gvf: 0, wlr: 0, T: 0, sqi: 0 };

  if (!hasMounted) {
    return (
      <div className="p-12 text-center bg-spinecho-dark flex items-center justify-center min-h-[600px]">
        <div className="text-spinecho-accent font-mono text-xs uppercase tracking-widest animate-pulse">Initializing Metrology Interface...</div>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 text-white pb-8">
      
      {/* 1. INTERFACE TOOLBAR */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 glass-panel border-white/10 bg-[#0F1115]">
        <div className="flex items-center gap-6 text-left">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Operator Interface</h2>
            <p className="text-[9px] font-mono text-spinecho-slate uppercase tracking-[0.2em] mt-1">Spin Echo Metrology Systems // Build 2.0.4</p>
          </div>
          <div className="h-8 w-px bg-white/10 hidden md:block" />
          <select value={selectedWell} onChange={(e) => setSelectedWell(e.target.value)} className="bg-white/5 border border-white/10 rounded px-4 py-2 text-xs font-mono outline-none focus:border-spinecho-accent text-white">
            {wells.map(w => <option key={w.id} value={w.id} className="bg-[#0F1115]">{w.id} - {w.basin}</option>)}
          </select>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded border border-white/5">
            <span className="text-[10px] font-mono text-spinecho-slate uppercase">Stacked View</span>
            <button onClick={() => setIsStacked(!isStacked)} className={`w-10 h-5 rounded-full relative transition-colors ${isStacked ? 'bg-spinecho-accent' : 'bg-white/10'}`}>
              <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${isStacked ? 'right-1' : 'left-1'}`} />
            </button>
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-spinecho-accent text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-lg shadow-lg shadow-spinecho-accent/20">
            <Download size={14} /> Export Data
          </button>
        </div>
      </div>

      {/* 2. KPI GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-left">
        <MetrologyKpi icon={Gauge} label="Total Flow" value={latest.qTotal} unit="sm3/h" />
        <MetrologyKpi icon={Flame} label="Gas Rate" value={latest.gas} unit="sm3/h" />
        <MetrologyKpi icon={Droplets} label="Oil Rate" value={latest.oil} unit="bbl/h" />
        <MetrologyKpi icon={Droplets} label="Water Rate" value={latest.water} unit="bbl/h" />
        <MetrologyKpi icon={Activity} label="NGL Phase" value={latest.ngl} unit="bbl/h" />
        <MetrologyKpi icon={Activity} label="GVF" value={(latest.gvf * 100).toFixed(1)} unit="%" />
        <MetrologyKpi icon={Activity} label="WLR" value={(latest.wlr * 100).toFixed(1)} unit="%" />
        <MetrologyKpi icon={Thermometer} label="Temperature" value={latest.T} unit="°C" />
      </div>

      {/* 3. MAIN ANALYTICS ROW */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 text-left">
        
        <div className="xl:col-span-2 glass-panel p-8 bg-[#0F1115]">
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-spinecho-accent">Phase Resolved Flow Dynamics</h3>
            <div className="flex gap-4 text-[9px] font-mono uppercase text-spinecho-slate">
               <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white" /> Oil</span>
               <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" /> Gas</span>
               <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-500" /> Water</span>
            </div>
          </div>
          
          <div className="h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
              {isStacked ? (
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke={THEME.grid} vertical={false} />
                  <XAxis dataKey="time" fontSize={10} stroke="#475569" minTickGap={30} axisLine={false} tickLine={false} />
                  <YAxis fontSize={10} stroke="#475569" axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#0F1115', border: '1px solid rgba(255,255,255,0.1)' }} />
                  <Area type="monotone" dataKey="oil" stackId="1" stroke={THEME.oil} fill={THEME.oil} fillOpacity={0.1} />
                  <Area type="monotone" dataKey="water" stackId="1" stroke={THEME.water} fill={THEME.water} fillOpacity={0.1} />
                  <Area type="monotone" dataKey="gas" stackId="1" stroke={THEME.gas} fill={THEME.gas} fillOpacity={0.1} />
                </AreaChart>
              ) : (
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke={THEME.grid} vertical={false} />
                  <XAxis dataKey="time" fontSize={10} stroke="#475569" minTickGap={30} axisLine={false} tickLine={false} />
                  <YAxis fontSize={10} stroke="#475569" axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#0F1115', border: '1px solid rgba(255,255,255,0.1)' }} />
                  <Line type="monotone" dataKey="oil" stroke={THEME.oil} dot={false} strokeWidth={2} />
                  <Line type="monotone" dataKey="water" stroke={THEME.water} dot={false} strokeWidth={2} />
                  <Line type="monotone" dataKey="gas" stroke={THEME.gas} dot={false} strokeWidth={2} />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* FIXED GVF CHART WITH AXIS LABELS */}
          <div className="h-[200px] mt-12 pt-10 border-t border-white/5">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke={THEME.grid} vertical={false} />
                <XAxis dataKey="time" hide />
                <YAxis domain={[0, 1]} ticks={[0, 0.25, 0.5, 0.75, 1]} tickFormatter={(val) => `${val * 100}%`} fontSize={10} stroke="#475569" axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#0F1115', border: '1px solid rgba(255,255,255,0.1)' }} />
                <Legend iconType="circle" align="right" verticalAlign="top" wrapperStyle={{ fontSize: '10px', textTransform: 'uppercase', fontFamily: 'monospace', paddingBottom: '20px' }} />
                <Line type="monotone" dataKey="gvf" name="GVF %" stroke={THEME.accent} dot={false} strokeWidth={2} />
                <Line type="monotone" dataKey="wlr" name="WLR %" stroke={THEME.water} dot={false} strokeWidth={2} />
                <ReferenceLine y={0.8} label={{ value: 'GVF LIMIT', position: 'insideTopRight', fill: '#ef4444', fontSize: 9, fontWeight: 'bold' }} stroke="#ef4444" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-panel p-6 bg-[#0F1115] text-left h-fit">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
              <AlertTriangle size={14} className="text-yellow-500" /> Operational Alerts
            </h3>
            <div className="space-y-3">
              {[
                { level: "High", msg: "Sudden GVF step change (>15%)", time: "14:35" },
                { level: "Medium", msg: "Sensor drift detected on T probe", time: "09:10" }
              ].map((a, i) => (
                <div key={i} className="p-4 bg-white/[0.02] border border-white/5 rounded-lg flex justify-between items-start">
                  <div>
                    <span className={`text-[8px] font-mono px-2 py-0.5 rounded uppercase ${a.level === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{a.level}</span>
                    <p className="text-xs mt-3 text-white font-medium">{a.msg}</p>
                    <p className="text-[9px] font-mono text-spinecho-slate mt-1 uppercase">{a.time} // Logged</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 bg-[#0F1115] text-left">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-3 text-spinecho-accent">
              <Settings size={14} /> Metrology Integrity
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <MetrologyKpi small icon={Activity} label="Signal Quality" value="98" unit="%" />
              <MetrologyKpi small icon={Activity} label="Comms Uptime" value="99.9" unit="%" />
              <MetrologyKpi small icon={Thermometer} label="Delta T Drift" value="0.3" unit="C/d" />
              <MetrologyKpi small icon={Gauge} label="Pressure Drop" value="2.4" unit="bar" />
            </div>
          </div>
        </div>
      </div>

      {/* 4. ASSET / DIGITAL TWIN ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        <div className="glass-panel p-6 bg-[#0F1115]">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-3 text-spinecho-accent"><MapIcon size={14} /> Connected Assets</h3>
          <div className="space-y-2">
            {wells.map(w => (
              <button key={w.id} onClick={() => setSelectedWell(w.id)} className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${selectedWell === w.id ? 'border-spinecho-accent bg-spinecho-accent/10' : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05]'}`}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-bold tracking-tight">{w.id}</span>
                  <span className={`text-[8px] font-mono px-2 py-0.5 rounded uppercase ${w.status === 'Producing' ? 'text-green-400 bg-green-400/10' : 'text-spinecho-slate bg-white/5'}`}>{w.status}</span>
                </div>
                <p className="text-[9px] font-mono text-spinecho-slate uppercase tracking-wider">{w.operator}</p>
              </button>
            ))}
          </div>
        </div>

        {/* EXPANDED DIGITAL TWIN VISUAL */}
        <div className="lg:col-span-2 glass-panel p-6 bg-[#0F1115] relative overflow-hidden">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-3 text-spinecho-accent">
            <Box size={14} /> Live Digital Twin
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
            {/* Expanded Visualization Section */}
            <div className="lg:col-span-8 relative h-72 lg:h-80 rounded-xl border border-white/5 bg-black flex items-center justify-center overflow-hidden">
               <img 
                 src="https://i.postimg.cc/K8w83Fbz/digitaltwin.png" 
                 alt="Hardware Twin" 
                 className="w-full h-full object-cover opacity-90 brightness-110" 
               />
               <AnimatePresence>
                 {pulseActive && (
                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-spinecho-accent/30 blur-3xl pointer-events-none" />
                 )}
               </AnimatePresence>
               <div className="absolute top-0 left-0 w-full h-px bg-spinecho-accent/40 shadow-[0_0_15px_#06B6D4] animate-[scan_4s_linear_infinite]" />
               <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 bg-black/80 rounded-full border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-white uppercase tracking-widest">Active Sensing</span>
               </div>
            </div>

            {/* Status Section */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[8px] font-mono text-spinecho-slate uppercase tracking-widest">RF Pulse</span>
                  <span className={`text-[9px] font-mono uppercase font-bold ${pulseActive ? 'text-spinecho-accent' : 'text-white/20'}`}>{pulseActive ? 'Firing' : 'Standby'}</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                   <motion.div animate={{ width: pulseActive ? "100%" : "0%" }} className="h-full bg-spinecho-accent" />
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[8px] font-mono text-spinecho-slate uppercase tracking-widest">Magnetic Field</span>
                  <span className="text-[9px] font-mono text-green-400 font-bold uppercase">Stable</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-green-500/30 w-full" /></div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                <div className="flex justify-between items-center">
                  <span className="text-[8px] font-mono text-spinecho-slate uppercase tracking-widest">Telemetry Stream</span>
                  <span className="text-[9px] font-mono text-white font-bold uppercase">10.2 Hz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. RESTORED NGL BREAKDOWN CHART */}
      <div className="glass-panel p-8 bg-[#0F1115] text-left">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-10 text-spinecho-accent font-mono">NGL Component Characterisation (C3 TO C6+)</h3>
        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke={THEME.grid} vertical={false} />
              <XAxis dataKey="time" fontSize={10} stroke="#475569" minTickGap={30} axisLine={false} tickLine={false} />
              <YAxis fontSize={10} stroke="#475569" axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0F1115', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }} />
              <Legend iconType="rect" verticalAlign="top" align="right" wrapperStyle={{ fontSize: '10px', textTransform: 'uppercase', fontFamily: 'monospace', paddingBottom: '30px' }} />
              <Area type="monotone" dataKey="propane" name="Propane (C3)" stackId="1" stroke={THEME.propane} fill={THEME.propane} fillOpacity={0.2} strokeWidth={2} />
              <Area type="monotone" dataKey="butane" name="Butane (C4)" stackId="1" stroke={THEME.butane} fill={THEME.butane} fillOpacity={0.2} strokeWidth={2} />
              <Area type="monotone" dataKey="pentane" name="Pentane (C5)" stackId="1" stroke={THEME.pentane} fill={THEME.pentane} fillOpacity={0.2} strokeWidth={2} />
              <Area type="monotone" dataKey="hexane" name="Hexane (C6+)" stackId="1" stroke={THEME.hexane} fill={THEME.hexane} fillOpacity={0.2} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* FOOTER */}
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-mono text-spinecho-slate uppercase tracking-widest px-4 italic">
        <div>System time: {new Date().toLocaleString()} // Ver 2.0.4c</div>
        <div>Physics based sensing // Real time molecular quantification</div>
      </div>
    </motion.div>
  );
}

// SCALED PREVIEW EXPORT
export function DashboardPreview() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-full h-full bg-[#050608] animate-pulse rounded-xl" />;
  return (
    <div className="w-full h-full overflow-hidden relative bg-[#050608] pointer-events-none rounded-xl">
      <div className="absolute inset-0 scale-[0.4] lg:scale-[0.5] origin-top-left w-[250%] lg:w-[200%] h-[250%] lg:h-[200%] p-4">
        <FlowmeterDashboard />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}