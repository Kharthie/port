import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications } from '@/lib/data';
import { CertificateCardPreview } from '@/components/credentials/CertificateCardPreview';
import { Search, Award, ShieldCheck, CheckCircle2, Sparkles, Filter, X } from 'lucide-react';

type FilterTab = 'all' | 'anthropic' | 'google' | 'microsoft' | 'guvi';

export function CertificationsSection() {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter tabs definition with dynamic counts
  const tabCounts = useMemo(() => {
    return {
      all: certifications.length,
      anthropic: certifications.filter(c => c.issuerKey === 'anthropic').length,
      google: certifications.filter(c => c.issuerKey === 'google').length,
      microsoft: certifications.filter(c => c.issuerKey === 'microsoft').length,
      guvi: certifications.filter(c => c.issuerKey === 'guvi').length,
    };
  }, []);

  const tabs: { key: FilterTab; label: string; count: number }[] = [
    { key: 'all', label: 'All Credentials', count: tabCounts.all },
    { key: 'anthropic', label: 'Anthropic', count: tabCounts.anthropic },
    { key: 'google', label: 'Google Cloud', count: tabCounts.google },
    { key: 'microsoft', label: 'Microsoft Learn', count: tabCounts.microsoft },
    { key: 'guvi', label: 'Full Stack (GUVI)', count: tabCounts.guvi },
  ];

  // Filtered certifications
  const filteredCertifications = useMemo(() => {
    return certifications.filter((cert) => {
      const matchesTab = activeTab === 'all' || cert.issuerKey === activeTab;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        cert.title.toLowerCase().includes(query) ||
        (cert.fullTitle && cert.fullTitle.toLowerCase().includes(query)) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.category.toLowerCase().includes(query) ||
        cert.credentialId.toLowerCase().includes(query) ||
        (cert.skills && cert.skills.some((s) => s.toLowerCase().includes(query)));

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section id="certifications" className="py-24 relative bg-card/20 overflow-hidden">
      {/* Ambient background blur circles */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS & SPECIALIZATIONS</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Professional <span className="text-gradient">Credentials</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
            Industry-recognized certifications and verified credentials across Generative AI, Cloud Infrastructure,
            Agentic Systems (MCP & Claude Code), and Full-Stack Engineering.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4 mx-auto md:mx-0" />
        </motion.div>

        {/* Quick Highlights Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10"
        >
          <div className="glass-card p-4 rounded-xl border border-border/50 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold font-mono text-foreground leading-none">
                {certifications.length}
              </p>
              <p className="text-[11px] text-muted-foreground font-mono mt-1">Verified Badges</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-border/50 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-secondary/10 text-secondary">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold font-mono text-foreground leading-none">4</p>
              <p className="text-[11px] text-muted-foreground font-mono mt-1">Global Issuers</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-border/50 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold font-mono text-foreground leading-none">100%</p>
              <p className="text-[11px] text-muted-foreground font-mono mt-1">Publicly Verifiable</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-border/50 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold font-mono text-foreground leading-none">AI & Cloud</p>
              <p className="text-[11px] text-muted-foreground font-mono mt-1">Core Focus</p>
            </div>
          </div>
        </motion.div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          {/* Tab Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 border ${
                    isActive
                      ? 'bg-primary text-slate-950 border-primary font-bold shadow-md shadow-primary/20'
                      : 'bg-card/40 hover:bg-card/80 text-muted-foreground hover:text-foreground border-border/50'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                      isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by skill, title, ID..."
              className="w-full pl-9 pr-9 py-2 text-xs rounded-xl bg-card/60 border border-border/60 placeholder:text-muted-foreground/60 text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Certificate Cards Grid */}
        {filteredCertifications.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredCertifications.map((cert, idx) => (
                <CertificateCardPreview
                  key={cert.id}
                  certification={cert}
                  index={idx}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty Search State */
          <div className="glass-card p-12 rounded-2xl text-center border border-border/50 max-w-md mx-auto my-12">
            <Filter className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-40" />
            <h3 className="text-base font-bold text-foreground mb-1">No credentials found</h3>
            <p className="text-xs text-muted-foreground mb-4">
              No certifications matched your filter "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setActiveTab('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-primary text-slate-950 font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
