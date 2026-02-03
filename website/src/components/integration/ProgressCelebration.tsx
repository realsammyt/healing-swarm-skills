import React, { useState } from 'react';
import { cn } from '@site/src/lib/utils';

export interface ProgressCelebrationProps {
  /** The achievement to celebrate */
  achievement: string;
  /** Optional description */
  description?: string;
  /** Called when celebration completes */
  onContinue: () => void;
  /** Additional CSS classes */
  className?: string;
}

export function ProgressCelebration({
  achievement,
  description,
  onContinue,
  className,
}: ProgressCelebrationProps) {
  const [phase, setPhase] = useState<'celebrate' | 'reflect' | 'continue'>('celebrate');

  return (
    <div
      className={cn(
        'fixed inset-0 flex items-center justify-center bg-grounding-darkest/95 z-50',
        className
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="celebration-title"
    >
      <div className="max-w-md w-full mx-4 p-8 text-center">
        {phase === 'celebrate' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-6xl animate-bounce">🎉</div>
            <h2 id="celebration-title" className="text-2xl font-bold text-white">
              {achievement}
            </h2>
            {description && (
              <p className="text-gray-400">{description}</p>
            )}
            <p className="text-sm text-gray-500">
              Take a moment to acknowledge this.
            </p>
            <button
              onClick={() => setPhase('reflect')}
              className="px-6 py-3 rounded-lg bg-healing-primary text-grounding-darkest font-medium"
            >
              Let it land
            </button>
          </div>
        )}

        {phase === 'reflect' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-4xl animate-breathe">✨</div>
            <p className="text-gray-300">
              This didn't happen by accident.
              <br />
              <span className="text-healing-light">You showed up.</span>
            </p>
            <p className="text-sm text-gray-500">
              Breathe in this moment.
            </p>
            <button
              onClick={() => setPhase('continue')}
              className="px-6 py-3 rounded-lg border border-gray-600 text-gray-300"
            >
              Ready to continue
            </button>
          </div>
        )}

        {phase === 'continue' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-4xl">🌱</div>
            <p className="text-gray-300">
              The journey continues.
              <br />
              What's calling to you next?
            </p>
            <button
              onClick={onContinue}
              className="px-6 py-3 rounded-lg bg-healing-primary text-grounding-darkest font-medium"
            >
              Let's go
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
