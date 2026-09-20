import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function HudOverlay() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 flex justify-between px-4 py-3 text-[10px] font-mono text-zinc-600 uppercase tracking-widest hidden md:flex"
      data-purpose="cyber-hud-overlay"
      aria-hidden="true"
    >
      <div className="space-y-1">
        <div>{personal.coordinates}</div>
        <div className="text-brand-neon flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-neon animate-ping"></span>
          <span>{personal.systemStatus}</span>
        </div>
      </div>
      <div className="text-right space-y-1">
        <div>{personal.systemId}</div>
        <div>{personal.coreStack}</div>
      </div>
    </div>
  );
}
