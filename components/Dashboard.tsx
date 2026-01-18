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
  Download, Box, Zap, Share2
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

function generateSeries() {
  const out = [];
  const now = new Date();
  for (let i = 200; i >= 0; i--) {
    const t = new Date(now.getTime() - i * 15 * 60 * 1000);
    const oil = 1200 + 150 * Math.sin(i / 12);
    const nglBase = 80 + 20 * Math.sin(i / 10);
    out.push({
      time: t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      oil: +oil.toFixed(1),
      gas: 300 + Math.random() * 20,
      water: 180 + Math.random() * 10,
      ngl: +nglBase.toFixed(1),
      propane: +(nglBase * 0.4).toFixed(1),
      butane: +(nglBase * 0.3).toFixed(1),
      pentane: +(nglBase * 0.2).toFixed(1),
      hexane: +(nglBase * 0.1).toFixed(1),
      gvf: 0.82 + Math.random() * 0.05,
      wlr: 0.12 + Math.random() * 0.02,
      T: 68.4,
      sqi: 0.98
    });
  }
  return out;
}

const wells = [
  { id: "SE 01A", status: "Producing", operator: "Spin Echo Test Pad", basin: "Permian" },
  { id: "SE 02C", status: "Producing", operator: "Spin Echo Test Pad", basin: "Permian" },
];

function MetrologyKpi({ icon: Icon, label, value, unit, alert = false, small = false }: any) {
  return (
    <div className={`glass-panel ${small ? 'p-4' : 'p-5'} border-white/5 bg-white/[0.02] flex flex-col justify-between h-full text-left`}>
      <div className="flex items-center gap-2 mb-3">
        <Icon size={14} className="text-[#06B6D4] opacity-70" />
        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest leading-none">{label}</span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className={`${small ? 'text-lg' : 'text-2xl'} font-bold font-mono text-white tabular-nums leading-none`}>{value}</span>
        <span className="text-[10px] font-mono text-slate-400 uppercase leading-none">{unit}</span>
      </div>
      {alert && <div className="mt-2 text-[9px] text-red-400 font-mono animate-pulse uppercase tracking-tighter">Attention Required</div>}
    </div>
  );
}

export default function FlowmeterDashboard() {
  const [hasMounted, setHasMounted] = useState(false);
  const [pulseActive, setPulseActive] = useState(false);
  const [isStacked, setIsStacked] = useState(true);
  const [selectedWell, setSelectedWell] = useState(wells[0].id);
  const [viewMode, setViewMode] = useState<'meter' | 'pid'>('meter');

  useEffect(() => {
    setHasMounted(true);
    const interval = setInterval(() => {
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const data = useMemo(() => { if (!hasMounted) return []; return generateSeries(); }, [hasMounted]);

  if (!hasMounted) return <div className="min-h-[600px] flex items-center justify-center text-[#06B6D4] font-mono text-xs animate-pulse tracking-widest uppercase">Initialising metrology system...</div>;

  const latest = data[data.length - 1];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 text-white pb-8 font-sans">
      
      {/* 1. TOOLBAR */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 glass-panel border-white/10 bg-[#0F1115]">
        <div className="flex items-center gap-6">
          <div className="text-left">
            <h2 className="text-xl font-bold tracking-tight text-white uppercase leading-none mb-1">Operator Interface</h2>
            <p className="text-[9px] font-mono text-slate-400 uppercase tracking-[0.2em]">Spin Echo Metrology {"//"} Build 2.0.4</p>
          </div>
          <div className="h-8 w-px bg-white/10 hidden md:block" />
          <select value={selectedWell} onChange={(e) => setSelectedWell(e.target.value)} className="bg-[#0A0C10] border border-white/10 rounded px-4 py-2 text-xs font-mono outline-none focus:border-[#06B6D4] text-white cursor-pointer">
            {wells.map(w => <option key={w.id} value={w.id}>{w.id} - {w.basin}</option>)}
          </select>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded border border-white/5">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Stacked View</span>
            <button onClick={() => setIsStacked(!isStacked)} className={`w-10 h-5 rounded-full relative transition-colors ${isStacked ? 'bg-[#06B6D4]' : 'bg-white/10'}`}>
              <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${isStacked ? 'right-1' : 'left-1'}`} />
            </button>
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-spinecho-accent text-[#050608] font-black uppercase text-[10px] tracking-[0.2em] rounded shadow-lg">
            <Download size={14} /> Export Data
          </button>
        </div>
      </div>

      {/* 2. KPI GRID (8 COLUMN) */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-left">
        <MetrologyKpi icon={Gauge} label="Total Flow" value="1540.2" unit="sm3/h" />
        <MetrologyKpi icon={Flame} label="Gas Rate" value={latest.gas.toFixed(1)} unit="sm3/h" />
        <MetrologyKpi icon={Droplets} label="Oil Rate" value={latest.oil.toFixed(1)} unit="bbl/h" />
        <MetrologyKpi icon={Droplets} label="Water Rate" value={latest.water.toFixed(1)} unit="bbl/h" />
        <MetrologyKpi icon={Activity} label="NGL Phase" value={latest.ngl} unit="bbl/h" />
        <MetrologyKpi icon={Activity} label="GVF" value="82.4" unit="%" />
        <MetrologyKpi icon={Activity} label="WLR" value="12.1" unit="%" />
        <MetrologyKpi icon={Thermometer} label="Temperature" value="68.4" unit="°C" />
      </div>

      {/* 3. MAIN ANALYTICS ROW */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 text-left">
        
        <div className="xl:col-span-2 glass-panel p-8 bg-[#0F1115] border-white/5 shadow-2xl">
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-spinecho-accent">Phase Resolved Flow Dynamics</h3>
            <div className="flex gap-4 text-[9px] font-mono uppercase text-slate-400">
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
                  <Area type="monotone" dataKey="oil" stackId="1" stroke={THEME.oil} fill={THEME.oil} fillOpacity={0.1} strokeWidth={2} />
                  <Area type="monotone" dataKey="water" stackId="1" stroke={THEME.water} fill={THEME.water} fillOpacity={0.1} strokeWidth={2} />
                  <Area type="monotone" dataKey="gas" stackId="1" stroke={THEME.gas} fill={THEME.gas} fillOpacity={0.1} strokeWidth={2} />
                  <Brush height={20} fill="#0A0C10" stroke="rgba(255,255,255,0.1)" />
                </AreaChart>
              ) : (
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke={THEME.grid} vertical={false} />
                  <XAxis dataKey="time" fontSize={10} stroke="#475569" minTickGap={30} axisLine={false} tickLine={false} />
                  <YAxis fontSize={10} stroke="#475569" axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#0F1115', border: '1px solid rgba(255,255,255,0.1)' }} />
                  <Line type="monotone" dataKey="oil" stroke={THEME.oil} dot={false} strokeWidth={2.5} />
                  <Line type="monotone" dataKey="water" stroke={THEME.water} dot={false} strokeWidth={2.5} />
                  <Line type="monotone" dataKey="gas" stroke={THEME.gas} dot={false} strokeWidth={2.5} />
                  <Brush height={20} fill="#0A0C10" stroke="rgba(255,255,255,0.1)" />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>
          
          <div className="h-[180px] mt-12 pt-10 border-t border-white/5">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke={THEME.grid} vertical={false} />
                <YAxis domain={[0, 1]} ticks={[0, 0.5, 1]} tickFormatter={(val) => `${val * 100}%`} fontSize={10} stroke="#475569" axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#0F1115', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }} />
                <Legend iconType="circle" align="right" verticalAlign="top" wrapperStyle={{ fontSize: '10px', textTransform: 'uppercase', fontFamily: 'monospace', paddingBottom: '20px' }} />
                <Line type="monotone" dataKey="gvf" name="GVF %" stroke={THEME.accent} dot={false} strokeWidth={2} />
                <Line type="monotone" dataKey="wlr" name="WLR %" stroke={THEME.water} dot={false} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-panel p-6 bg-[#0F1115] text-left h-fit border-white/5">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-3"><AlertTriangle size={14} className="text-yellow-500" /> Operational Alerts</h3>
            <div className="space-y-3">
              {[
                { level: "High", msg: "Sudden GVF step change (>15%)", time: "14:35" },
                { level: "Medium", msg: "Sensor drift detected on T probe", time: "09:10" }
              ].map((a, i) => (
                <div key={i} className="p-4 bg-white/[0.02] border border-white/5 rounded-lg flex justify-between items-start">
                  <div className="text-left">
                    <span className={`text-[8px] font-mono px-2 py-0.5 rounded uppercase ${a.level === 'High' ? 'bg-red-500/20 text-red-400 border border-red-500/20' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/20'}`}>{a.level}</span>
                    <p className="text-xs mt-3 text-white font-medium">{a.msg}</p>
                    <p className="text-[9px] font-mono text-spinecho-slate mt-1 uppercase text-left">{a.time} {"//"} Logged</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* METER HEALTH - RESTORED TO SIDE PANEL */}
          <div className="glass-panel p-6 bg-[#0F1115] border-white/5 text-left">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-3 text-spinecho-accent">
              <Settings size={14} /> Metrology Integrity
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <MetrologyKpi small icon={Activity} label="Signal Quality" value="98" unit="%" alert={latest.sqi < 0.8} />
              <MetrologyKpi small icon={Activity} label="Comms Uptime" value="99.9" unit="%" />
              <MetrologyKpi small icon={Thermometer} label="Delta T Drift" value="0.3" unit="C/d" />
              <MetrologyKpi small icon={Gauge} label="Pressure Drop" value="2.4" unit="bar" />
            </div>
          </div>
        </div>
      </div>

      {/* 4. ASSET / DIGITAL TWIN ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        <div className="glass-panel p-6 bg-[#0F1115] border-white/5">
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

        {/* RESTORED & ENHANCED DIGITAL TWIN WITH P&ID TOGGLE */}
        <div className="lg:col-span-2 glass-panel p-6 bg-[#0F1115] relative overflow-hidden border-white/5 group">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-3 text-spinecho-accent">
              <Box size={14} /> {viewMode === 'meter' ? 'Live Digital Twin' : 'Process P&ID View'}
            </h3>
            {/* VIEW TOGGLE BUTTON */}
            <button 
              onClick={() => setViewMode(viewMode === 'meter' ? 'pid' : 'meter')}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded font-mono text-[9px] uppercase tracking-widest hover:bg-spinecho-accent hover:text-black transition-all flex items-center gap-2"
            >
              <RefreshCw size={10} /> Switch to {viewMode === 'meter' ? 'P&ID' : 'Hardware'}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
            <div className="lg:col-span-8 relative h-72 lg:h-96 rounded-xl border border-white/5 bg-black flex items-center justify-center overflow-hidden">
               <AnimatePresence mode="wait">
                {viewMode === 'meter' ? (
                  <motion.div key="meter" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full relative">
                    <img src="https://i.postimg.cc/FsYRWJXY/digitaltwin.png" alt="Hardware Twin" className="w-full h-full object-cover opacity-90 brightness-110" />
                    {/* Live Operational Pulses */}
                    <AnimatePresence>
                      {pulseActive && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.25 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-spinecho-accent/40 blur-3xl pointer-events-none" />
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div key="pid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full p-8 flex items-center justify-center bg-[#050608]">
                    {/* CUSTOM SVG P&ID SCHEMATIC */}
                    <svg viewBox="0 0 400 200" className="w-full h-full text-spinecho-accent" stroke="currentColor" fill="none" strokeWidth="1.5">
                       <path d="M20 100h80M300 100h80" strokeOpacity="0.3" />
                       <rect x="100" y="70" width="200" height="60" rx="4" fill="currentColor" fillOpacity="0.05" />
                       <text x="200" y="105" textAnchor="middle" fill="currentColor" className="text-[12px] font-mono uppercase tracking-[0.2em]">Spin Echo NMR</text>
                       <path d="M120 100h160" strokeDasharray="4 4" />
                       {/* Input/Output indicators */}
                       <circle cx="20" cy="100" r="3" fill="currentColor" />
                       <circle cx="380" cy="100" r="3" fill="currentColor" />
                       <path d="M150 70v-30h100v30" strokeOpacity="0.3" strokeDasharray="2 2" />
                       <text x="200" y="30" textAnchor="middle" fill="#94A3B8" className="text-[8px] font-mono uppercase">Optional Calibration Bypass</text>
                    </svg>
                  </motion.div>
                )}
               </AnimatePresence>

               {/* Scanning Logic */}
               <div className="absolute top-0 left-0 w-full h-px bg-spinecho-accent/40 shadow-[0_0_15px_#06B6D4] animate-[scan_4s_linear_infinite]" />
               
               {/* Active Sensing Tag */}
               <div className="absolute bottom-6 left-6 flex items-center gap-2 px-3 py-1.5 bg-black/80 rounded-full border border-white/10 shadow-2xl">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-white uppercase tracking-widest font-bold">System Live</span>
               </div>
            </div>

            {/* Live Telemetry Panels */}
            <div className="lg:col-span-4 space-y-4 text-left pr-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="flex justify-between items-center mb-1 text-left">
                  <span className="text-[8px] font-mono text-spinecho-slate uppercase tracking-widest">RF Pulse Cycle</span>
                  <span className={`text-[9px] font-mono uppercase font-bold ${pulseActive ? 'text-spinecho-accent' : 'text-white/20'}`}>{pulseActive ? 'Exciting' : 'Relaxing'}</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                   <motion.div animate={{ width: pulseActive ? "100%" : "0%" }} className="h-full bg-spinecho-accent" />
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="flex justify-between items-center mb-1 text-left">
                  <span className="text-[8px] font-mono text-spinecho-slate uppercase tracking-widest">Magnetic Field</span>
                  <span className={`text-[9px] font-mono text-green-400 font-bold uppercase text-left`}>Stable</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-green-500/30 w-full" /></div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-left">
                <div className="flex justify-between items-center text-left">
                  <span className="text-[8px] font-mono text-spinecho-slate uppercase tracking-widest">Data Interface</span>
                  <span className="text-[9px] font-mono text-white font-bold uppercase text-left tracking-tighter">API // Modbus Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. NGL BREAKDOWN CHART */}
      <div className="glass-panel p-8 bg-[#0F1115] text-left border-white/5 shadow-2xl">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-10 text-spinecho-accent font-mono text-left">NGL Component Characterisation (C3 TO C6+)</h3>
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
              <Brush height={20} fill="#0A0C10" stroke="rgba(255,255,255,0.1)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* FOOTER */}
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-mono text-spinecho-slate uppercase tracking-widest px-4 italic text-left opacity-60">
        <div>System time: {new Date().toLocaleString()} {"//"} Ver 2.0.4c</div>
        <div>Physics based sensing {"//"} Real time molecular quantification</div>
      </div>
    </motion.div>
  );
}

// SCALED PREVIEW EXPORT FOR MODULE 4
export function DashboardPreview() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-full h-full bg-[#050608] animate-pulse rounded-xl" />;
  return (
    <div className="w-full h-full overflow-hidden relative bg-[#050608] pointer-events-none rounded-xl border border-white/10">
      <div className="absolute inset-0 scale-[0.4] lg:scale-[0.5] origin-top-left w-[250%] lg:w-[200%] h-[250%] lg:h-[200%] p-4">
        <FlowmeterDashboard />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}