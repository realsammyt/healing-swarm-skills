import React from 'react';
import { cn } from '@site/src/lib/utils';

export interface Milestone {
  id: string;
  title: string;
  description: string;
  achieved: boolean;
  achievedDate?: Date;
}

export interface HealingJourneyProps {
  /** Journey milestones */
  milestones: Milestone[];
  /** Current position in journey (0-based step count) */
  currentPosition: number;
  /** Total steps in journey */
  totalSteps: number;
  /** Additional CSS classes */
  className?: string;
}

export function HealingJourney({
  milestones,
  currentPosition,
  totalSteps,
  className,
}: HealingJourneyProps) {
  const progress = (currentPosition / totalSteps) * 100;

  const getEncouragement = (progress: number): string => {
    if (progress < 25) return "Every journey begins with a single step. You've begun. 🌱";
    if (progress < 50) return "You're building momentum. Keep going. 🌿";
    if (progress < 75) return "Halfway there! Your dedication shows. 🌳";
    if (progress < 100) return "The summit is in sight. You've got this. 🏔️";
    return "You did it. Take a moment to honor your journey. ✨";
  };

  return (
    <div className={cn('space-y-6', className)}>
      {/* Progress bar */}
      <div className="relative">
        <div className="h-2 bg-grounding-medium rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-healing-primary to-calm-primary transition-all duration-1000"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={currentPosition}
            aria-valuemin={0}
            aria-valuemax={totalSteps}
          />
        </div>
        <p className="text-sm text-gray-400 mt-2">
          Step {currentPosition} of {totalSteps} on your journey
        </p>
      </div>

      {/* Milestones */}
      <div className="space-y-4">
        {milestones.map((milestone, index) => {
          const isNextMilestone = !milestone.achieved &&
            index === milestones.findIndex(m => !m.achieved);

          return (
            <div
              key={milestone.id}
              className={cn(
                'p-4 rounded-lg border-2 transition-all',
                milestone.achieved
                  ? 'border-healing-primary bg-healing-ghost'
                  : isNextMilestone
                  ? 'border-calm-primary bg-calm-ghost animate-pulse'
                  : 'border-grounding-medium bg-grounding-dark/50 opacity-60'
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center font-semibold',
                    milestone.achieved
                      ? 'bg-healing-primary text-grounding-darkest'
                      : 'bg-grounding-medium text-grounding-light'
                  )}
                >
                  {milestone.achieved ? '✓' : index + 1}
                </div>
                <div>
                  <h4 className="font-medium text-gray-200">{milestone.title}</h4>
                  <p className="text-sm text-gray-400">{milestone.description}</p>
                  {milestone.achievedDate && (
                    <p className="text-xs text-healing-light mt-1">
                      Achieved {milestone.achievedDate.toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Encouragement */}
      <div className="text-center p-4 bg-grounding-dark rounded-lg" role="status">
        <p className="text-gray-300">{getEncouragement(progress)}</p>
      </div>
    </div>
  );
}
