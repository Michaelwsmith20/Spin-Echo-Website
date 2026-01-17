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
  Download, Box
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
  const [pulseActive, setPulseActive] = useState(false);
  const [isStacked, setIsStacked] = useState(true);
  const [selectedWell, setSelectedWell] = useState(wells[0].id);

  useEffect(() => {
    setHasMounted(true);
    const interval = setInterval(() => {
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const data = useMemo(() => { if (!hasMounted) return []; return generateSeries(); }, [hasMounted]);

  if (!hasMounted) return <div className="min-h-[600px] flex items-center justify-center text-spinecho-accent font-mono text-xs animate-pulse tracking-widest uppercase">Initialising metrology system...</div>;

  const latest = data[data.length - 1];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 text-white pb-8 font-sans">
      
      {/* 1. TOOLBAR */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 glass-panel border-white/10 bg-[#0F1115]">
        <div className="flex items-center gap-6">
          <div className="text-left">
            <h2 className="text-xl font-bold tracking-tight text-white uppercase leading-none mb-1">Operator Interface</h2>
            <p className="text-[9px] font-mono text-spinecho-slate uppercase tracking-[0.2em]">Spin Echo Metrology {"//"} Build 2.0.4</p>
          </div>
          <div className="h-8 w-px bg-white/10 hidden md:block" />
          <select value={selectedWell} onChange={(e) => setSelectedWell(e.target.value)} className="bg-[#0A0C10] border border-white/10 rounded px-4 py-2 text-xs font-mono outline-none focus:border-spinecho-accent text-white cursor-pointer">
            {wells.map(w => <option key={w.id} value={w.id}>{w.id} - {w.basin}</option>)}
          </select>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded border border-white/5">
            <span className="text-[10px] font-mono text-spinecho-slate uppercase tracking-widest leading-none">Stacked View</span>
            <button onClick={() => setIsStacked(!isStacked)} className={`w-10 h-5 rounded-full relative transition-colors ${isStacked ? 'bg-spinecho-accent' : 'bg-white/10'}`}>
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
                <div key={i} className="p-4 bg-white/[0.02] border border-white/5 rounded-lg flex justify-between items-start text-left">
                  <div className="text-left">
                    <span className={`text-[8px] font-mono px-2 py-0.5 rounded uppercase ${a.level === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{a.level}</span>
                    <p className="text-xs mt-3 text-white font-medium">{a.msg}</p>
                    <p className="text-[9px] font-mono text-spinecho-slate mt-1 uppercase">{a.time} {"//"} Logged</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 bg-[#0F1115] border-white/5">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-3 text-spinecho-accent text-left"><Box size={14} /> Live Digital Twin</h3>
            <div className="relative h-64 lg:h-80 rounded-xl border border-white/5 bg-black flex items-center justify-center overflow-hidden">
               <img src="https://i.postimg.cc/FsYRWJXY/digitaltwin.png" alt="Hardware" className="w-full h-full object-cover opacity-90 brightness-110" />
               <AnimatePresence>{pulseActive && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.25 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-spinecho-accent/40 blur-3xl pointer-events-none" />}</AnimatePresence>
               <div className="absolute top-0 left-0 w-full h-px bg-spinecho-accent/40 animate-[scan_4s_linear_infinite]" />
               <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 bg-black/80 rounded-full border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-white uppercase tracking-widest font-bold">Active Sensing</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. NGL BREAKDOWN CHART (C3 to C6+) */}
      <div className="glass-panel p-8 bg-[#0F1115] text-left border-white/5 shadow-2xl">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-10 text-spinecho-accent font-mono text-left