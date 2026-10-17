import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Copy, Check, ChevronLeft, ChevronRight, ShieldCheck, Award, Sparkles, Building2 } from 'lucide-react';
import { Certification } from '@/lib/data';
import { GoogleCloudIcon, MicrosoftIcon, AnthropicIcon, GuviIcon, CertificateRosetteSeal, CornerFlourish } from './IssuerIcons';
import { useToast } from '@/hooks/use-toast';

interface CertificateModalProps {
  certification: Certification | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalCount: number;
}

export function CertificateModal({
  certification,
  isOpen,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalCount
}: CertificateModalProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onNext, onPrev, onClose]);

  if (!isOpen || !certification) return null;

  const handleCopyLink = () => {
    if (certification.credentialUrl) {
      navigator.clipboard.writeText(certification.credentialUrl);
      setCopied(true);
      toast({
        title: "Link Copied!",
        description: "Official credential verification link copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getIssuerTheme = (key: string) => {
    switch (key) {
      case 'google':
        return {
          glow: 'from-blue-500/20 via-green-500/10 to-transparent',
          accent: 'border-blue-500/40',
          badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
          Icon: GoogleCloudIcon,
          orgTitle: 'GOOGLE CLOUD PLATFORM',
          authority: 'Google Cloud Skills Boost Certification Authority',
          watermark: 'GOOGLE CLOUD'
        };
      case 'microsoft':
        return {
          glow: 'from-cyan-500/20 via-blue-500/10 to-transparent',
          accent: 'border-sky-500/40',
          badgeBg: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
          Icon: MicrosoftIcon,
          orgTitle: 'MICROSOFT LEARN',
          authority: 'Microsoft Learn Worldwide Technical Education',
          watermark: 'MICROSOFT'
        };
      case 'anthropic':
        return {
          glow: 'from-amber-500/20 via-orange-500/10 to-transparent',
          accent: 'border-amber-500/40',
          badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
          Icon: AnthropicIcon,
          orgTitle: 'ANTHROPIC ACADEMY',
          authority: 'Anthropic AI Engineering Credential Program',
          watermark: 'ANTHROPIC'
        };
      case 'guvi':
      default:
        return {
          glow: 'from-emerald-500/20 via-teal-500/10 to-transparent',
          accent: 'border-emerald-500/40',
          badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
          Icon: GuviIcon,
          orgTitle: 'GUVI GEEK NETWORKS (IITM RESEARCH PARK)',
          authority: 'IIT Madras Research Park Accredited Tech Program',
          watermark: 'GUVI IITM'
        };
    }
  };

  const theme = getIssuerTheme(certification.issuerKey);
  const IssuerLogo = theme.Icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop Scrim */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-950 text-slate-100 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden my-auto z-10"
        >
          {/* Top Control Bar */}
          <div className="shrink-0 flex items-center justify-between px-5 py-3 border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Official Credential Preview
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                {currentIndex + 1} of {totalCount}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onPrev}
                title="Previous Credential (Left Arrow)"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={onNext}
                title="Next Credential (Right Arrow)"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="h-4 w-px bg-slate-800 mx-1" />
              <button
                onClick={onClose}
                title="Close (Escape)"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-rose-500/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Certificate Main Canvas */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-10 relative bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950 scrollbar-thin scrollbar-thumb-slate-800">
            {/* Ambient Background Glow */}
            <div className={`absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-gradient-to-br ${theme.glow}`} />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-primary/10" />

            {/* Subtle Guilloche / Security Pattern Canvas */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.035]"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, #fff 1.5px, transparent 1.5px),
                                  linear-gradient(to right, #fff 1px, transparent 1px),
                                  linear-gradient(to bottom, #fff 1px, transparent 1px)`,
                backgroundSize: '32px 32px, 16px 16px, 16px 16px'
              }}
            />

            {/* Watermark in background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.025] font-black tracking-widest text-7xl md:text-9xl text-white rotate-[-12deg]">
              {theme.watermark}
            </div>

            {/* Certificate Outer & Inner Ornate Border */}
            <div className={`relative p-6 sm:p-10 rounded-xl border-2 ${theme.accent} bg-slate-950/70 backdrop-blur-sm shadow-inner`}>
              {/* Corner Flourishes */}
              <CornerFlourish className="absolute top-2 left-2 w-8 h-8 text-primary/60" />
              <div className="absolute top-2 right-2 rotate-90">
                <CornerFlourish className="w-8 h-8 text-primary/60" />
              </div>
              <div className="absolute bottom-2 left-2 -rotate-90">
                <CornerFlourish className="w-8 h-8 text-primary/60" />
              </div>
              <div className="absolute bottom-2 right-2 rotate-180">
                <CornerFlourish className="w-8 h-8 text-primary/60" />
              </div>

              {/* Inner Decorative Pinstripe */}
              <div className="absolute inset-3 border border-slate-700/50 rounded-lg pointer-events-none" />

              {/* Certificate Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Header: Issuer Logo & Name */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-700 shadow-md">
                    <IssuerLogo className="w-7 h-7" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-mono font-bold tracking-widest text-slate-300 uppercase">
                      {theme.orgTitle}
                    </p>
                    <p className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" /> Publicly Verifiable Credential
                    </p>
                  </div>
                </div>

                {/* Certificate Formal Title */}
                <div className="my-3">
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-primary font-semibold">
                    Certificate of Competency & Achievement
                  </span>
                  <div className="w-32 h-0.5 mx-auto mt-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                </div>

                <p className="text-xs sm:text-sm text-slate-400 font-serif italic mt-2">
                  This hereby certifies that
                </p>

                {/* Recipient Name */}
                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-1 mb-2 font-sans bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
                  Kharthie Ramakrishnan
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 max-w-lg mb-3">
                  has successfully demonstrated proven practical competency and satisfied all official curriculum criteria for:
                </p>

                {/* Certificate Title Banner */}
                <div className="w-full max-w-2xl py-3 px-6 rounded-xl bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 border border-slate-700/80 shadow-lg my-2">
                  <h4 className="text-lg sm:text-2xl font-bold text-primary tracking-tight">
                    {certification.fullTitle || certification.title}
                  </h4>
                  <div className="flex flex-wrap justify-center items-center gap-2 mt-2">
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${theme.badgeBg}`}>
                      {certification.category}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      ID: {certification.credentialId}
                    </span>
                  </div>
                </div>

                {/* Credential Description */}
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl text-center my-3 leading-relaxed">
                  {certification.description}
                </p>

                {/* Skills Chips */}
                {certification.skills && certification.skills.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-1.5 my-3 max-w-xl">
                    {certification.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 flex items-center gap-1"
                      >
                        <Sparkles className="w-2.5 h-2.5 text-primary" />
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Certificate Validation Footer */}
                <div className="w-full mt-6 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 items-center gap-4 text-left">
                  {/* Left: Authority */}
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 p-2 rounded-lg bg-slate-900 border border-slate-800 text-primary">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">Issuing Authority</p>
                      <p className="text-xs font-semibold text-slate-200">{certification.issuer}</p>
                    </div>
                  </div>

                  {/* Center: Rosette Seal */}
                  <div className="flex flex-col items-center justify-center text-center">
                    <CertificateRosetteSeal className="w-14 h-14 drop-shadow-md" />
                    <span className="text-[10px] font-mono tracking-widest text-amber-400 font-bold mt-1 uppercase">
                      Official Seal
                    </span>
                  </div>

                  {/* Right: Verification Status */}
                  <div className="sm:text-right flex sm:flex-col justify-between sm:justify-center items-center sm:items-end">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">Verification Status</p>
                      <div className="flex items-center gap-1.5 justify-end">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-mono font-bold text-emerald-400">100% Authenticated</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="shrink-0 px-5 py-4 border-t border-slate-800/80 bg-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-400 font-mono truncate max-w-full">
              Credential ID: <span className="text-slate-200 font-bold">{certification.credentialId}</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={handleCopyLink}
                className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-medium flex items-center gap-1.5 transition-colors border border-slate-700"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied" : "Copy Link"}
              </button>

              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-slate-950 text-xs font-bold font-sans flex items-center gap-1.5 transition-all shadow-md hover:shadow-primary/25"
              >
                <span>Verify on {certification.issuer}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
