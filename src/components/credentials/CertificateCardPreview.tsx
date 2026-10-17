import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { Certification } from '@/lib/data';
import { GoogleCloudIcon, MicrosoftIcon, AnthropicIcon, GuviIcon, CertificateRosetteSeal, CornerFlourish } from './IssuerIcons';

interface CertificateCardPreviewProps {
  certification: Certification;
  index: number;
}

export function CertificateCardPreview({
  certification,
  index,
}: CertificateCardPreviewProps) {
  const getIssuerTheme = (key: string) => {
    switch (key) {
      case 'google':
        return {
          glow: 'from-blue-500/15 via-green-500/10 to-transparent',
          borderHover: 'group-hover:border-blue-500/50',
          badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
          badgeText: 'Google Cloud',
          Icon: GoogleCloudIcon
        };
      case 'microsoft':
        return {
          glow: 'from-sky-500/15 via-blue-500/10 to-transparent',
          borderHover: 'group-hover:border-sky-500/50',
          badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
          badgeText: 'Microsoft Learn',
          Icon: MicrosoftIcon
        };
      case 'anthropic':
        return {
          glow: 'from-amber-500/15 via-orange-500/10 to-transparent',
          borderHover: 'group-hover:border-amber-500/50',
          badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
          badgeText: 'Anthropic Academy',
          Icon: AnthropicIcon
        };
      case 'guvi':
      default:
        return {
          glow: 'from-emerald-500/15 via-teal-500/10 to-transparent',
          borderHover: 'group-hover:border-emerald-500/50',
          badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
          badgeText: 'GUVI (IIT Madras)',
          Icon: GuviIcon
        };
    }
  };

  const theme = getIssuerTheme(certification.issuerKey);
  const IssuerLogo = theme.Icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.3) }}
      className={`group relative flex flex-col rounded-2xl glass-card border border-border/60 ${theme.borderHover} overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1`}
    >
      {/* ----------------- CERTIFICATE IMAGE CANVAS (TOP) ----------------- */}
      <a
        href={certification.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full aspect-[16/10] bg-slate-950 p-4 sm:p-5 flex flex-col justify-between overflow-hidden cursor-pointer select-none border-b border-border/40"
      >
        {/* Ambient Issuer Aura Glow */}
        <div className={`absolute -top-10 -right-10 w-48 h-48 rounded-full blur-2xl pointer-events-none bg-gradient-to-br ${theme.glow}`} />

        {/* Subtle Security Micro-Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px),
                              linear-gradient(to right, #ffffff 1px, transparent 1px),
                              linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '20px 20px, 10px 10px, 10px 10px'
          }}
        />

        {/* Certificate Decorative Border Frame */}
        <div className="absolute inset-2 sm:inset-2.5 border border-slate-700/60 rounded-lg pointer-events-none group-hover:border-primary/40 transition-colors">
          <CornerFlourish className="absolute top-1 left-1 w-4 h-4 text-primary/50" />
          <div className="absolute top-1 right-1 rotate-90">
            <CornerFlourish className="w-4 h-4 text-primary/50" />
          </div>
          <div className="absolute bottom-1 left-1 -rotate-90">
            <CornerFlourish className="w-4 h-4 text-primary/50" />
          </div>
          <div className="absolute bottom-1 right-1 rotate-180">
            <CornerFlourish className="w-4 h-4 text-primary/50" />
          </div>
        </div>

        {/* Mini Preview Header */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-slate-900/90 border border-slate-800 shadow-sm">
              <IssuerLogo className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[9px] font-mono font-bold tracking-widest text-slate-300 uppercase leading-none">
                {certification.issuer}
              </p>
              <p className="text-[8px] text-slate-400 font-mono leading-none mt-0.5">
                Official Credential
              </p>
            </div>
          </div>

          {/* Golden Seal Mini Representation */}
          <div className="shrink-0 flex items-center gap-1">
            <CertificateRosetteSeal className="w-7 h-7 drop-shadow-sm" />
          </div>
        </div>

        {/* Mini Preview Center: Recipient & Credential Title */}
        <div className="relative z-10 my-auto text-center px-2">
          <p className="text-[8px] font-mono uppercase tracking-[0.2em] text-primary/90 font-medium">
            Certificate of Achievement
          </p>
          <p className="text-[10px] text-slate-400 font-serif italic mt-0.5">Awarded to</p>
          <p className="text-xs sm:text-sm font-extrabold text-white tracking-tight font-sans">
            Kharthie Ramakrishnan
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary/70 to-transparent mx-auto my-1" />
          <p className="text-[11px] sm:text-xs font-bold text-slate-200 line-clamp-2 leading-tight">
            {certification.fullTitle || certification.title}
          </p>
        </div>

        {/* Mini Preview Bottom Bar */}
        <div className="relative z-10 flex items-center justify-between text-[8px] font-mono text-slate-400 pt-1 border-t border-slate-800/60">
          <span className="flex items-center gap-1 text-emerald-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Verified Record
          </span>
          <span className="truncate max-w-[120px] text-slate-400">
            ID: {certification.credentialId}
          </span>
        </div>

        {/* Hover Action Overlay: Direct Verify on click */}
        <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4 z-20">
          <div className="px-4 py-2 rounded-lg bg-primary text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-xl shadow-primary/25 transition-transform group-hover:scale-105">
            <span>Verify Credential</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>
      </a>

      {/* ----------------- REDUCED MINIMAL BOTTOM BAR ----------------- */}
      <div className="p-3.5 sm:p-4 flex flex-col gap-2.5 bg-card/30">
        <div className="flex items-center justify-between gap-2">
          <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${theme.badge} shrink-0`}>
            {certification.category}
          </span>
          <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1 shrink-0">
            <ShieldCheck className="w-3 h-3 text-emerald-500" />
            Verified
          </span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <h3 className="font-semibold text-xs sm:text-sm text-foreground truncate group-hover:text-primary transition-colors">
            {certification.fullTitle || certification.title}
          </h3>

          {certification.credentialUrl && (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-medium text-primary hover:text-primary-foreground hover:bg-primary flex items-center gap-1 shrink-0 transition-all py-1 px-2.5 rounded-lg border border-primary/30 bg-primary/10"
            >
              <span>Verify</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
