import React, { useState } from 'react';
import { cn } from '@site/src/lib/utils';

export interface Choice {
  id: string;
  text: string;
  subtext?: string;
  emotion?: 'hopeful' | 'cautious' | 'honest' | 'protective' | 'vulnerable';
}

export interface NarrativeChoiceProps {
  /** The prompt or situation */
  prompt: string;
  /** Available choices */
  choices: Choice[];
  /** Called when player makes a choice */
  onChoose: (choice: Choice) => void;
  /** Allow skipping difficult choices */
  allowSkip?: boolean;
  /** Called when player skips */
  onSkip?: () => void;
  /** Additional CSS classes */
  className?: string;
}

const emotionColors: Record<string, string> = {
  hopeful: 'border-healing-primary hover:border-healing-light',
  cautious: 'border-amber-400 hover:border-amber-300',
  honest: 'border-calm-primary hover:border-calm-light',
  protective: 'border-purple-400 hover:border-purple-300',
  vulnerable: 'border-pink-400 hover:border-pink-300',
};

export function NarrativeChoice({
  prompt,
  choices,
  onChoose,
  allowSkip = true,
  onSkip,
  className,
}: NarrativeChoiceProps) {
  const [hoveredChoice, setHoveredChoice] = useState<string | null>(null);

  return (
    <div
      className={cn('space-y-6 max-w-2xl mx-auto', className)}
      role="group"
      aria-label="Story choice"
    >
      {/* Prompt */}
      <p className="text-lg text-gray-200 text-center italic">
        {prompt}
      </p>

      {/* Choices */}
      <div className="space-y-3">
        {choices.map(choice => (
          <button
            key={choice.id}
            onClick={() => onChoose(choice)}
            onMouseEnter={() => setHoveredChoice(choice.id)}
            onMouseLeave={() => setHoveredChoice(null)}
            className={cn(
              'w-full p-4 rounded-lg text-left transition-all duration-200',
              'border-2 bg-grounding-dark',
              choice.emotion
                ? emotionColors[choice.emotion]
                : 'border-grounding-medium hover:border-grounding-light',
              hoveredChoice === choice.id && 'shadow-lg transform scale-[1.02]'
            )}
          >
            <p className="text-gray-200">{choice.text}</p>
            {choice.subtext && (
              <p className="text-sm text-gray-500 mt-1 italic">
                {choice.subtext}
              </p>
            )}
          </button>
        ))}
      </div>

      {/* Skip option for difficult moments */}
      {allowSkip && onSkip && (
        <button
          onClick={onSkip}
          className="w-full text-center text-sm text-gray-500 hover:text-gray-400 transition-colors"
        >
          I need to step back from this choice
        </button>
      )}

      {/* Choice guidance */}
      <p className="text-xs text-gray-600 text-center">
        There are no wrong choices. Each path reveals something different.
      </p>
    </div>
  );
}
