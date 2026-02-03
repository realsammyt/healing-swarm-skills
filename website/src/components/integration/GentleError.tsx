import React, { useState } from 'react';
import { cn } from '@site/src/lib/utils';

export interface GentleErrorProps {
  /** Main error message */
  message: string;
  /** Additional explanation */
  explanation?: string;
  /** What this means for the user */
  impact?: string;
  /** Actionable suggestions */
  suggestions?: string[];
  /** Technical details (hidden by default) */
  technicalDetails?: string;
  /** Retry callback */
  onRetry?: () => void;
  /** Dismiss callback */
  onDismiss?: () => void;
  /** Get help callback */
  onGetHelp?: () => void;
  /** Tone variant */
  tone?: 'standard' | 'professional' | 'technical' | 'friendly';
  /** Additional CSS classes */
  className?: string;
}

export function GentleError({
  message,
  explanation,
  impact,
  suggestions = [],
  technicalDetails,
  onRetry,
  onDismiss,
  onGetHelp,
  tone = 'standard',
  className,
}: GentleErrorProps) {
  const [showTechnical, setShowTechnical] = useState(false);

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={cn(
        'rounded-xl border-2 p-6 space-y-4',
        'border-amber-500/50 bg-amber-500/10',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-full bg-amber-500/20 flex-shrink-0">
          <svg
            className="w-5 h-5 text-amber-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-amber-200">{message}</h3>
          {explanation && (
            <p className="mt-1 text-sm text-gray-300">{explanation}</p>
          )}
        </div>
      </div>

      {/* Impact statement */}
      {impact && (
        <p className="text-sm text-gray-400 italic pl-11">
          {impact}
        </p>
      )}

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="pl-11 space-y-2">
          <p className="text-sm font-medium text-gray-300">Things to try:</p>
          <ul className="space-y-1">
            {suggestions.map((suggestion, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-400"
              >
                <span className="text-healing-primary mt-0.5">→</span>
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3 pl-11 pt-2">
        {onRetry && (
          <button
            onClick={onRetry}
            className={cn(
              'px-4 py-2 rounded-lg font-medium transition-colors',
              'bg-healing-primary text-grounding-darkest hover:bg-healing-dark'
            )}
          >
            Try Again
          </button>
        )}
        {onGetHelp && (
          <button
            onClick={onGetHelp}
            className={cn(
              'px-4 py-2 rounded-lg transition-colors',
              'border border-gray-600 text-gray-300 hover:border-gray-500'
            )}
          >
            Get Help
          </button>
        )}
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="px-4 py-2 text-sm text-gray-500 hover:text-gray-400 transition-colors"
          >
            Dismiss
          </button>
        )}
      </div>

      {/* Technical details */}
      {technicalDetails && (
        <div className="pl-11 pt-2">
          <button
            onClick={() => setShowTechnical(!showTechnical)}
            className="text-xs text-gray-500 hover:text-gray-400 flex items-center gap-1"
            aria-expanded={showTechnical}
          >
            <span>{showTechnical ? '▼' : '▶'}</span>
            Technical details
          </button>
          {showTechnical && (
            <pre className="mt-2 p-3 rounded bg-grounding-darkest text-xs text-gray-500 overflow-auto max-h-32">
              {technicalDetails}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}
