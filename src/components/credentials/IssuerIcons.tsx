import React from 'react';

export function GoogleCloudIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
        fill="url(#gcp-gradient)"
      />
      <defs>
        <linearGradient id="gcp-gradient" x1="0" y1="4" x2="24" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4285F4" />
          <stop offset="0.33" stopColor="#34A853" />
          <stop offset="0.66" stopColor="#FBBC05" />
          <stop offset="1" stopColor="#EA4335" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function MicrosoftIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="9" height="9" fill="#F25022" rx="1.5" />
      <rect x="13" y="2" width="9" height="9" fill="#7FBA00" rx="1.5" />
      <rect x="2" y="13" width="9" height="9" fill="#00A4EF" rx="1.5" />
      <rect x="13" y="13" width="9" height="9" fill="#FFB900" rx="1.5" />
    </svg>
  );
}

export function AnthropicIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.2 3.5h3.2L24 20.5h-3.4l-1.8-4.5H12l-1.8 4.5H6.8L14.2 3.5zm1.5 5.2L13.1 13h5.2l-2.6-4.3z" fill="#D97757" />
      <path d="M4.6 15.2l2.3-5.8L9.2 15.2H4.6z" fill="#E89679" opacity="0.6" />
      <path d="M0 20.5l4-10.2h3.2L3.2 20.5H0z" fill="#CC6543" />
    </svg>
  );
}

export function GuviIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#10B981" fillOpacity="0.15" />
      <path
        d="M12 4L3 8.5L12 13L21 8.5L12 4Z"
        fill="#10B981"
      />
      <path
        d="M6 11.5V16.5C6 18.5 8.7 20 12 20C15.3 20 18 18.5 18 16.5V11.5L12 14.5L6 11.5Z"
        fill="#059669"
      />
      <circle cx="12" cy="12" r="1.5" fill="#34D399" />
    </svg>
  );
}

export function CertificateRosetteSeal({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sealGold" cx="32" cy="32" r="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE047" />
          <stop offset="0.45" stopColor="#EAB308" />
          <stop offset="0.85" stopColor="#CA8A04" />
          <stop offset="1" stopColor="#854D0E" />
        </radialGradient>
        <linearGradient id="ribbonLeft" x1="20" y1="42" x2="16" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EAB308" />
          <stop offset="1" stopColor="#854D0E" />
        </linearGradient>
        <linearGradient id="ribbonRight" x1="44" y1="42" x2="48" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EAB308" />
          <stop offset="1" stopColor="#854D0E" />
        </linearGradient>
      </defs>
      {/* Ribbons */}
      <path d="M22 40L16 60L25 54L30 60L28 40H22Z" fill="url(#ribbonLeft)" />
      <path d="M42 40L48 60L39 54L34 60L36 40H42Z" fill="url(#ribbonRight)" />
      {/* Scalloped Medallion Outer */}
      <circle cx="32" cy="32" r="23" fill="url(#sealGold)" stroke="#FEF08A" strokeWidth="1.5" />
      {/* Inner Ring */}
      <circle cx="32" cy="32" r="18" fill="#1E293B" stroke="#FDE047" strokeWidth="1" strokeDasharray="2 2" />
      {/* Center Star / Verified Symbol */}
      <path
        d="M32 20L34.5 27.5H42.5L36 32L38.5 39.5L32 35L25.5 39.5L28 32L21.5 27.5H29.5L32 20Z"
        fill="#FDE047"
      />
    </svg>
  );
}

export function CornerFlourish({ className = "w-6 h-6 text-primary/40" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 12V4C2 2.89543 2.89543 2 4 2H12" strokeLinecap="round" />
      <path d="M5 5L9 9" strokeLinecap="round" strokeOpacity="0.6" />
      <circle cx="4" cy="4" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
