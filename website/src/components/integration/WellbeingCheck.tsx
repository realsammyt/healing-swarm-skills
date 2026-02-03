import React, { useState } from 'react';
import { cn } from '@site/src/lib/utils';

export interface WellbeingCheckProps {
  /** Main message */
  message?: string;
  /** Wellness suggestions to choose from */
  suggestions?: string[];
  /** Called when user dismisses */
  onDismiss: () => void;
  /** Called when user wants a break */
  onTakeBreak?: () => void;
  /** Position on screen */
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'center';
  /** Additional CSS classes */
  className?: string;
}

const defaultSuggestions = [
  'Stretch your shoulders and neck',
  'Look at something 20 feet away for 20 seconds',
  'Take three deep breaths',
  'Drink some water',
];

export function WellbeingCheck({
  message = "You've been working for a while",
  suggestions = defaultSuggestions,
  onDismiss,
  onTakeBreak,
  position = 'bottom-right',
  className,
}: WellbeingCheckProps) {
  const [selectedSuggestion, setSelectedSuggestion] = useState<number | null>(null);

  const positionClasses = {
    'bottom-right': 'fixed bottom-4 right-4',
    'bottom-left': 'fixed bottom-4 left-4',
    'top-right': 'fixed top-4 right-4',
    'center': 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  return (
    <div
      role="dialog"
      aria-labelledby="wellbeing-check-title"
      className={cn(
        positionClasses[position],
        'max-w-sm rounded-xl border p-6 shadow-lg z-40',
        'border-calm-primary/30 bg-grounding-dark',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 rounded-full bg-calm-ghost">
          <span className="text-xl" role="img" aria-label="wellness">💙</span>
        </div>
        <div>
          <h3 id="wellbeing-check-title" className="font-medium text-calm-light">
            {message}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            A quick wellness moment
          </p>
        </div>
      </div>

      {/* Suggestions */}
      <div className="space-y-2 mb-4">
        {suggestions.map((suggestion, i) => (
          <button
            key={i}
            onClick={() => setSelectedSuggestion(i)}
            className={cn(
              'w-full text-left p-3 rounded-lg text-sm transition-all',
              selectedSuggestion === i
                ? 'bg-calm-ghost border border-calm-primary text-calm-light'
                : 'bg-grounding-medium/50 text-gray-400 hover:bg-grounding-medium border border-transparent'
            )}
          >
            {selectedSuggestion === i && (
              <span className="mr-2" aria-hidden="true">✓</span>
            )}
            {suggestion}
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={onDismiss}
          className={cn(
            'flex-1 px-4 py-2 rounded-lg font-medium transition-colors',
            'bg-calm-primary text-grounding-darkest hover:bg-calm-dark'
          )}
        >
          {selectedSuggestion !== null ? "Done, thanks!" : "Got it"}
        </button>
        {onTakeBreak && (
          <button
            onClick={onTakeBreak}
            className={cn(
              'px-4 py-2 rounded-lg transition-colors',
              'border border-gray-600 text-gray-300 hover:border-gray-500'
            )}
          >
            Take Break
          </button>
        )}
      </div>
    </div>
  );
}
