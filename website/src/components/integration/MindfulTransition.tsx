import React, { useState, useEffect } from 'react';
import { cn } from '@site/src/lib/utils';

export interface MindfulTransitionProps {
  /** Main message */
  message: string;
  /** Supporting text */
  subtext?: string;
  /** Duration before auto-continue in seconds (0 to disable) */
  duration?: number;
  /** Called when user continues or duration expires */
  onContinue: () => void;
  /** Called when user cancels */
  onCancel?: () => void;
  /** Show countdown timer */
  showTimer?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export function MindfulTransition({
  message,
  subtext,
  duration = 0,
  onContinue,
  onCancel,
  showTimer = true,
  className,
}: MindfulTransitionProps) {
  const [remaining, setRemaining] = useState(duration);

  useEffect(() => {
    if (duration <= 0) return;

    const timer = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(timer);
          onContinue();
          return 0;
        }
        return r - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [duration, onContinue]);

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center min-h-[300px] p-8',
        'rounded-xl bg-grounding-dark border border-grounding-medium',
        className
      )}
      role="status"
      aria-live="polite"
    >
      {/* Breathing indicator */}
      <div
        className="w-16 h-16 rounded-full border-4 border-calm-primary/50 mb-8 animate-breathe"
        aria-hidden="true"
      />

      {/* Message */}
      <div className="text-center space-y-3 max-w-md">
        <h2 className="text-xl font-medium text-white">
          {message}
        </h2>
        {subtext && (
          <p className="text-gray-400">
            {subtext}
          </p>
        )}
      </div>

      {/* Timer */}
      {duration > 0 && showTimer && remaining > 0 && (
        <p className="text-sm text-gray-500 mt-6">
          Continuing in {remaining}s...
        </p>
      )}

      {/* Actions */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={onContinue}
          className={cn(
            'px-6 py-3 rounded-lg font-medium transition-colors',
            'bg-healing-primary text-grounding-darkest hover:bg-healing-dark'
          )}
        >
          Continue
        </button>
        {onCancel && (
          <button
            onClick={onCancel}
            className={cn(
              'px-6 py-3 rounded-lg transition-colors',
              'border border-gray-600 text-gray-300 hover:border-gray-500'
            )}
          >
            Go Back
          </button>
        )}
      </div>
    </div>
  );
}
