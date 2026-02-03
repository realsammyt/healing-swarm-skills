import React, { useState, useEffect } from 'react';
import { cn } from '@site/src/lib/utils';

export interface BreathePauseProps {
  /** Duration of pause in seconds */
  duration: number;
  /** Main message to display */
  message: string;
  /** Optional subtext */
  subtext?: string;
  /** Show breathing animation guide */
  showBreathingGuide?: boolean;
  /** Called when pause completes or is skipped */
  onComplete: () => void;
  /** Called when user cancels */
  onCancel?: () => void;
  /** Text for skip button */
  skipLabel?: string;
  /** Additional CSS classes */
  className?: string;
}

export function BreathePause({
  duration,
  message,
  subtext,
  showBreathingGuide = true,
  onComplete,
  onCancel,
  skipLabel = 'Skip',
  className,
}: BreathePauseProps) {
  const [remaining, setRemaining] = useState(duration);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    // Allow skip after 2 seconds to prevent accidental skip
    const skipTimer = setTimeout(() => setCanSkip(true), 2000);

    const countdown = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(countdown);
          onComplete();
          return 0;
        }
        return r - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(skipTimer);
      clearInterval(countdown);
    };
  }, [duration, onComplete]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center',
        'bg-grounding-darkest/95 backdrop-blur-sm',
        className
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="breathe-pause-message"
    >
      <div className="max-w-md text-center space-y-8 p-8">
        {/* Breathing circle */}
        {showBreathingGuide && (
          <div className="relative mx-auto w-32 h-32" aria-hidden="true">
            <div className="absolute inset-0 rounded-full border-4 border-healing-primary/30" />
            <div
              className="absolute inset-0 rounded-full border-4 border-healing-primary animate-breathe"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-light text-healing-light">
                {remaining}
              </span>
            </div>
          </div>
        )}

        {/* Message */}
        <div className="space-y-2">
          <h2
            id="breathe-pause-message"
            className="text-xl font-medium text-white"
          >
            {message}
          </h2>
          {subtext && (
            <p className="text-gray-400">{subtext}</p>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          {canSkip && (
            <button
              onClick={onComplete}
              className="px-4 py-2 text-sm text-gray-500 hover:text-gray-400 transition-colors"
            >
              {skipLabel}
            </button>
          )}
          {onCancel && (
            <button
              onClick={onCancel}
              className="px-4 py-2 text-sm text-gray-500 hover:text-gray-400 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>

        {/* Breathing instruction */}
        <p className="text-xs text-gray-600" aria-live="polite">
          {remaining > duration / 2 ? 'Breathe in...' : 'Breathe out...'}
        </p>
      </div>
    </div>
  );
}
