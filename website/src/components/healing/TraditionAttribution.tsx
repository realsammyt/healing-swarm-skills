import React from 'react';
import { cn } from '@site/src/lib/utils';

export interface TraditionAttributionProps {
  traditionName: string;
  era?: string;
  primarySources: string[];
  adaptationNotes?: string;
  isOpenPractice: boolean;
  className?: string;
}

export function TraditionAttribution({
  traditionName,
  era,
  primarySources,
  adaptationNotes,
  isOpenPractice,
  className,
}: TraditionAttributionProps) {
  return (
    <div
      className={cn(
        'rounded-lg border-2 border-sacred-gold bg-grounding-dark p-5 space-y-4',
        'shadow-glow-sacred transition-all duration-300',
        'hover:shadow-glow-sacred hover:border-sacred-gold-light',
        className
      )}
      role="complementary"
      aria-label={`Traditional knowledge attribution: ${traditionName}`}
    >
      {/* Header with Tradition Name */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-xl font-bold text-sacred-gold-light">
            {traditionName}
          </h3>
          {!isOpenPractice && (
            <span
              className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-sacred-gold-dark text-grounding-darkest"
              title="This practice may have access restrictions or cultural protocols"
              aria-label="Closed practice indicator"
            >
              Closed Practice
            </span>
          )}
        </div>
        {era && (
          <p className="text-sm text-sacred-gold/80 italic">
            {era}
          </p>
        )}
      </div>

      {/* Primary Sources */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-sacred-gold uppercase tracking-wide">
          Primary Sources
        </h4>
        <ul className="space-y-1.5" role="list">
          {primarySources.map((source, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-gray-300"
            >
              <svg
                className="w-4 h-4 mt-0.5 flex-shrink-0 text-sacred-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{source}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Adaptation Notes */}
      {adaptationNotes && (
        <div className="space-y-2 pt-2 border-t border-sacred-gold/30">
          <h4 className="text-sm font-semibold text-sacred-gold uppercase tracking-wide">
            Adaptation Notes
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            {adaptationNotes}
          </p>
        </div>
      )}

      {/* Practice Status Notice */}
      <div
        className={cn(
          'pt-3 border-t border-sacred-gold/30',
          'text-xs text-sacred-gold/70 leading-relaxed'
        )}
      >
        {isOpenPractice ? (
          <p>
            This practice is considered open and can be respectfully learned and shared
            across cultures.
          </p>
        ) : (
          <p>
            This practice may be closed or have specific cultural protocols. Please research
            appropriate access, permissions, and guidance from tradition holders before
            practicing.
          </p>
        )}
      </div>

      {/* Sacred Icon */}
      <div className="flex justify-center pt-2" aria-hidden="true">
        <svg
          className="w-8 h-8 text-sacred-gold opacity-50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </div>
    </div>
  );
}
