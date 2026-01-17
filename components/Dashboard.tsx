"use client";
import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush, AreaChart, Area, ReferenceLine } from "recharts";
import { Activity, Thermometer, Gauge, Droplets, Flame, AlertTriangle, Settings, Map as MapIcon, RefreshCw, Download, Box } from "lucide-react";

const THEME = { accent: "#06B6D4", oil: "#FFFFFF", gas: "#06B6D4", water: "#14B8A6", ngl: "#A855F7", grid: "rgba(255,255,255,0.05)" };

function generateSeries() {
  const out = [];
  const now = new Date();
  for (let i = 288; i >= 0; i--) {
    const t = new Date(now.getTime() - i * 15 * 60 * 1000);
    const oil = 1200 + 150 * Math.sin(i / 12);
    out.push({ time: t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), oil: +oil.toFixed(1), gas: 300, water: 180, ngl: 80, gvf: 0.8, T: 68, sqi: 0.98 });
  }
  return out;
}

function MetrologyKpi({ icon: Icon, label, value, unit }: any) {
  return (
    <div className="glass-panel p-5 border-white/5 bg-white/[0.02] flex flex-col justify-between h-full text-left">
      <div className="flex items-center gap-2 mb-3"><Icon size={14} className="text-spinecho-accent opacity-70" /><span className="text-[9px] font-mono text-spinecho-slate uppercase tracking-widest leading-none">{label}</span></div>
      <div className="flex items-baseline gap-1"><span className="text-2xl font-bold font-mono text-white tabular-nums leading-none">{value}</span><span className="text-[10px] font-mono text-spinecho-slate uppercase leading-none">{unit}</span></div>
    </div>
  );
}

export default function FlowmeterDashboard() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => { setHasMounted(true); }, []);
  const data = useMemo(() => { if (!hasMounted) return []; return generateSeries(); }, [hasMounted]);
  if (!hasMounted) return <div className="min-h-[600px] flex items-center justify-center text-spinecho-accent font-mono text-xs animate-pulse tracking-widest">Initializing...</div>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 text-white pb-8 font-sans">
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 glass-panel border-white/10 bg-[#0F1115]">
        <div className="flex items-center gap-6 text-left">
          <div><h2 className="text-xl font-bold tracking-tight text-white">Operator Interface</h2><p className="text-[9px] font-mono text-spinecho-slate uppercase tracking-widest mt-1">Spin Echo Metrology {"//"} Build 2.0.4</p></div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4"><MetrologyKpi icon={Gauge} label="Total Flow" value="1540" unit="sm3/h" /><MetrologyKpi icon={Flame} label="Gas Rate" value="300" unit="sm3/h" /><MetrologyKpi icon={Droplets} label="Oil Rate" value="1200" unit="bbl/h" /><MetrologyKpi icon={Droplets} label="Water Rate" value="180" unit="bbl/h" /><MetrologyKpi icon={Activity} label="NGL Phase" value="80" unit="bbl/h" /><MetrologyKpi icon={Activity} label="GVF" value="80" unit="%" /><MetrologyKpi icon={Activity} label="WLR" value="15" unit="%" /><MetrologyKpi icon={Thermometer} label="Temp" value="68" unit="C" /></div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 text-left">
        <div className="xl:col-span-2 glass-panel p-8 bg-[#0F1115]"><h3 className="font-bold text-xs uppercase tracking-[0.2em] text-spinecho-accent mb-10">Phase Resolved Dynamics</h3><div className="h-[380px]"><ResponsiveContainer width="100%" height="100%"><AreaChart data={data}><CartesianGrid strokeDasharray="3 3" stroke={THEME.grid} vertical={false} /><XAxis dataKey="time" fontSize={10} stroke="#475569" minTickGap={30} axisLine={false} tickLine={false} /><YAxis fontSize={10} stroke="#475569" axisLine={false} tickLine={false} /><Tooltip contentStyle={{ backgroundColor: '#0F1115', border: '1px solid rgba(255,255,255,0.1)' }} /><Area type="monotone" dataKey="oil" stroke={THEME.oil} fill={THEME.oil} fillOpacity={0.1} strokeWidth={2} /></AreaChart></ResponsiveContainer></div></div>
        <div className="glass-panel p-6 bg-[#0F1115] text-left border-white/5"><h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-3"><AlertTriangle size={14} className="text-yellow-500" /> Live Alerts</h3><p className="text-xs text-spinecho-slate italic">System operating within normal parameters.</p></div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-mono text-spinecho-slate uppercase tracking-widest px-4 italic text-left"><div>System time: {new Date().toLocaleString()} {"//"} Ver 2.0.4c</div><div>Physics based sensing {"//"} Real time molecular quantification</div></div>
    </motion.div>
  );
}

export function DashboardPreview() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-full h-full bg-[#050608] animate-pulse rounded-xl" />;
  return (
    <div className="w-full h-full overflow-hidden relative bg-[#050608] pointer-events-none rounded-xl">
      <div className="absolute inset-0 scale-[0.4] lg:scale-[0.5] origin-top-left w-[250%] lg:w-[200%] h-[250%] lg:h-[200%] p-4"><FlowmeterDashboard /></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}