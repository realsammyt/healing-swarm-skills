import React from 'react';
import { cn } from '@site/src/lib/utils';

export type StepStatus = 'completed' | 'current' | 'upcoming';

export interface HealingStep {
  id: string;
  label: string;
  status: StepStatus;
}

export interface HealingProgressProps {
  steps: HealingStep[];
  encouragementMessage?: string;
  className?: string;
}

const STATUS_CONFIG: Record<StepStatus, {
  circleClass: string;
  textClass: string;
  iconClass: string;
  lineClass: string;
}> = {
  completed: {
    circleClass: 'bg-healing-primary border-healing-primary',
    textClass: 'text-healing-light font-medium',
    iconClass: 'text-grounding-darkest',
    lineClass: 'bg-healing-primary',
  },
  current: {
    circleClass: 'bg-calm-primary border-calm-primary shadow-glow-calm animate-pulse-slow',
    textClass: 'text-calm-light font-semibold',
    iconClass: 'text-grounding-darkest',
    lineClass: 'bg-grounding-medium',
  },
  upcoming: {
    circleClass: 'bg-grounding-medium border-grounding-light',
    textClass: 'text-grounding-light',
    iconClass: 'text-grounding-light',
    lineClass: 'bg-grounding-medium',
  },
};

export function HealingProgress({
  steps,
  encouragementMessage,
  className,
}: HealingProgressProps) {
  return (
    <div
      className={cn('space-y-6', className)}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={steps.length}
      aria-valuenow={steps.filter(s => s.status === 'completed').length}
      aria-label="Healing journey progress"
    >
      {/* Steps */}
      <div className="space-y-0">
        {steps.map((step, index) => {
          const config = STATUS_CONFIG[step.status];
          const isLast = index === steps.length - 1;
          const showLine = !isLast;

          return (
            <div key={step.id} className="relative">
              <div className="flex items-center gap-4">
                {/* Step Circle */}
                <div className="relative flex-shrink-0">
                  <div
                    className={cn(
                      'w-10 h-10 rounded-full border-2 flex items-center justify-center',
                      'transition-all duration-300',
                      config.circleClass
                    )}
                    aria-label={`Step ${index + 1}: ${step.label} - ${step.status}`}
                  >
                    {step.status === 'completed' ? (
                      <svg
                        className={cn('w-5 h-5', config.iconClass)}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : step.status === 'current' ? (
                      <div
                        className={cn(
                          'w-3 h-3 rounded-full',
                          'bg-grounding-darkest animate-breathe'
                        )}
                        aria-hidden="true"
                      />
                    ) : (
                      <span
                        className={cn('text-sm font-medium', config.iconClass)}
                        aria-hidden="true"
                      >
                        {index + 1}
                      </span>
                    )}
                  </div>

                  {/* Connecting Line */}
                  {showLine && (
                    <div
                      className={cn(
                        'absolute left-1/2 top-10 w-0.5 h-8 -translate-x-1/2',
                        'transition-colors duration-300',
                        config.lineClass
                      )}
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Step Label */}
                <div className="flex-1 py-2">
                  <p
                    className={cn(
                      'text-base transition-colors duration-300',
                      config.textClass
                    )}
                  >
                    {step.label}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Encouragement Message */}
      {encouragementMessage && (
        <div
          className={cn(
            'mt-6 p-4 rounded-lg bg-healing-ghost border border-healing-border',
            'flex items-start gap-3'
          )}
          role="status"
          aria-live="polite"
        >
          <svg
            className="w-5 h-5 text-healing-primary flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <p className="text-sm text-healing-light leading-relaxed">
            {encouragementMessage}
          </p>
        </div>
      )}
    </div>
  );
}
