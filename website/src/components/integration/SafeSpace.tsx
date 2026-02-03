import React from 'react';
import { cn } from '@site/src/lib/utils';

export interface Resource {
  label: string;
  url: string;
}

export interface SafeSpaceProps {
  /** Called when user returns to main experience */
  onReturn: () => void;
  /** Optional external support resources */
  resources?: Resource[];
  /** Activities available in safe space */
  activities?: Array<{
    id: string;
    icon: string;
    title: string;
    description: string;
    onClick: () => void;
  }>;
  /** Additional CSS classes */
  className?: string;
}

const defaultActivities = [
  {
    id: 'breathe',
    icon: '🌬️',
    title: 'Breathing Exercise',
    description: 'A gentle guided breathing practice',
  },
  {
    id: 'sounds',
    icon: '🎵',
    title: 'Calming Sounds',
    description: 'Ambient audio to help you settle',
  },
  {
    id: 'journal',
    icon: '📝',
    title: 'Journal',
    description: 'Write about what you\'re feeling',
  },
  {
    id: 'progress',
    icon: '🗺️',
    title: 'View Progress',
    description: 'See where you are in the experience',
  },
];

export function SafeSpace({
  onReturn,
  resources,
  activities,
  className,
}: SafeSpaceProps) {
  const displayActivities = activities || defaultActivities;

  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-b from-grounding-darkest to-grounding-dark p-8',
        className
      )}
      role="dialog"
      aria-labelledby="safe-space-title"
    >
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="text-4xl mb-4" role="img" aria-label="Safe space">🏡</div>
          <h2 id="safe-space-title" className="text-2xl font-semibold text-white">
            Safe Space
          </h2>
          <p className="text-gray-400 mt-2">
            You've stepped away. Take all the time you need.
          </p>
        </div>

        {/* Activities */}
        <div className="grid gap-4 md:grid-cols-2">
          {displayActivities.map((activity) => (
            <button
              key={activity.id}
              onClick={activity.onClick}
              className={cn(
                'p-6 rounded-xl text-left transition-all duration-200',
                activity.id === 'breathe' && 'bg-healing-ghost border border-healing-primary/30 hover:border-healing-primary',
                activity.id === 'sounds' && 'bg-calm-ghost border border-calm-primary/30 hover:border-calm-primary',
                activity.id === 'journal' && 'bg-sacred-gold-ghost border border-sacred-gold/30 hover:border-sacred-gold',
                activity.id === 'progress' && 'bg-grounding-dark border border-grounding-medium hover:border-grounding-light',
                !['breathe', 'sounds', 'journal', 'progress'].includes(activity.id) &&
                  'bg-grounding-dark border border-grounding-medium hover:border-grounding-light'
              )}
            >
              <span className="text-2xl mb-2 block">{activity.icon}</span>
              <h3 className="font-medium text-gray-200">{activity.title}</h3>
              <p className="text-sm text-gray-400 mt-1">
                {activity.description}
              </p>
            </button>
          ))}
        </div>

        {/* Real-world resources */}
        {resources && resources.length > 0 && (
          <div className="p-4 rounded-lg bg-grounding-darkest">
            <h4 className="font-medium text-gray-300 mb-2">
              If you need support beyond this experience:
            </h4>
            <ul className="space-y-1">
              {resources.map(resource => (
                <li key={resource.url}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-calm-light hover:underline"
                  >
                    {resource.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Return */}
        <div className="text-center space-y-4">
          <button
            onClick={onReturn}
            className="px-6 py-3 rounded-lg bg-healing-primary text-grounding-darkest font-medium"
          >
            Return to Experience
          </button>
          <p className="text-xs text-gray-500">
            You can access this space anytime by pressing Escape.
          </p>
        </div>
      </div>
    </div>
  );
}
