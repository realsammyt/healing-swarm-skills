import React from 'react';
import { cn } from '@site/src/lib/utils';

export type EvidenceLevel = 'strong' | 'moderate' | 'preliminary' | 'traditional';

export interface EvidenceCitationProps {
  level: EvidenceLevel;
  title: string;
  author?: string;
  date?: string;
  domain?: string;
  snippet: string;
  sampleSize?: number;
  limitations?: string;
  sourceUrl?: string;
  className?: string;
}

const EVIDENCE_LEVEL_CONFIG: Record<EvidenceLevel, {
  label: string;
  className: string;
  description: string;
}> = {
  strong: {
    label: 'Strong Evidence',
    className: 'bg-healing-primary text-grounding-darkest',
    description: 'Multiple high-quality studies with consistent results',
  },
  moderate: {
    label: 'Moderate Evidence',
    className: 'bg-calm-primary text-grounding-darkest',
    description: 'Some quality studies with mostly consistent results',
  },
  preliminary: {
    label: 'Preliminary Evidence',
    className: 'bg-sacred-gold text-grounding-darkest',
    description: 'Limited studies or mixed results',
  },
  traditional: {
    label: 'Traditional Knowledge',
    className: 'bg-sacred-gold-dark text-grounding-darkest',
    description: 'Historical use in traditional healing systems',
  },
};

export function EvidenceCitation({
  level,
  title,
  author,
  date,
  domain,
  snippet,
  sampleSize,
  limitations,
  sourceUrl,
  className,
}: EvidenceCitationProps) {
  const config = EVIDENCE_LEVEL_CONFIG[level];

  return (
    <div
      className={cn(
        'rounded-lg border border-healing-border bg-grounding-dark/50 p-4 space-y-3',
        'transition-all duration-200 hover:border-healing-primary hover:shadow-glow-healing',
        className
      )}
      role="article"
      aria-label={`Evidence citation: ${title}`}
    >
      {/* Evidence Level Badge */}
      <div className="flex items-center gap-2 flex-wrap">
        <span
          className={cn(
            'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold',
            config.className
          )}
          title={config.description}
          aria-label={`Evidence level: ${config.label}`}
        >
          {config.label}
        </span>
        {domain && (
          <span className="text-xs text-grounding-light px-2 py-1 rounded bg-grounding-medium/50">
            {domain}
          </span>
        )}
      </div>

      {/* Title and Metadata */}
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-healing-light leading-snug">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-grounding-light flex-wrap">
          {author && <span>{author}</span>}
          {author && date && <span className="text-grounding-medium">•</span>}
          {date && <time dateTime={date}>{date}</time>}
        </div>
      </div>

      {/* Snippet */}
      <blockquote className="border-l-2 border-healing-primary pl-3 text-sm text-gray-300 italic">
        {snippet}
      </blockquote>

      {/* Additional Details */}
      {(sampleSize !== undefined || limitations) && (
        <div className="space-y-2 pt-2 border-t border-grounding-medium">
          {sampleSize !== undefined && (
            <div className="text-sm">
              <span className="text-grounding-light">Sample Size:</span>{' '}
              <span className="text-calm-light font-medium">{sampleSize.toLocaleString()}</span>
            </div>
          )}
          {limitations && (
            <div className="text-sm">
              <span className="text-grounding-light">Limitations:</span>{' '}
              <span className="text-gray-300">{limitations}</span>
            </div>
          )}
        </div>
      )}

      {/* Source Link */}
      {sourceUrl && (
        <div className="pt-2">
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-1 text-sm text-healing-primary',
              'hover:text-healing-light hover:underline transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-healing-primary focus:ring-offset-2',
              'focus:ring-offset-grounding-dark rounded'
            )}
            aria-label={`View source: ${title}`}
          >
            <span>View Source</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
