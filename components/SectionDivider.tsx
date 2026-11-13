import React from 'react';

interface SectionDividerProps {
  className?: string;
  showPip?: boolean;
}

export default function SectionDivider({
  className = 'section-divider--center-pip',
  showPip = true,
}: SectionDividerProps) {
  return (
    <div className={`section-divider ${className}`}>
      {showPip && <span className="crosshair crosshair--center">+</span>}
    </div>
  );
}
