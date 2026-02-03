import React from 'react';
import { cn } from '@site/src/lib/utils';

export interface CalmLoadingProps {
  /** Loading message */
  message?: string;
  /** Supporting text */
  subtext?: string;
  /** Show breathing suggestion */
  showBreathingTip?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
}

export function CalmLoading({
  message = 'Loading...',
  subtext,
  showBreathingTip = true,
  size = 'md',
  className,
}: CalmLoadingProps) {
  const sizeClasses = {
    sm: {
      container: 'py-4',
      circle: 'w-8 h-8 border-2',
      message: 'text-sm',
      subtext: 'text-xs',
    },
    md: {
      container: 'py-8',
      circle: 'w-12 h-12 border-3',
      message: 'text-base',
      subtext: 'text-sm',
    },
    lg: {
      container: 'py-12',
      circle: 'w-16 h-16 border-4',
      message: 'text-lg',
      subtext: 'text-base',
    },
  };

  const sizes = sizeClasses[size];

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={cn(
        'flex flex-col items-center justify-center',
        sizes.container,
        className
      )}
    >
      {/* Breathing circle loader */}
      <div className="relative mb-4">
        <div
          className={cn(
            'rounded-full border-healing-primary/30',
            sizes.circle
          )}
        />
        <div
          className={cn(
            'absolute inset-0 rounded-full border-healing-primary animate-breathe',
            sizes.circle.replace('border-', 'border-t-')
          )}
          style={{
            borderTopColor: '#2dd284',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
            animation: 'spin 1.5s linear infinite, breathe 4s ease-in-out infinite',
          }}
        />
      </div>

      {/* Message */}
      <p className={cn('text-gray-300 font-medium', sizes.message)}>
        {message}
      </p>

      {/* Subtext or breathing tip */}
      {(subtext || showBreathingTip) && (
        <p className={cn('text-gray-500 mt-2 text-center max-w-xs', sizes.subtext)}>
          {subtext || 'Take a breath while you wait'}
        </p>
      )}
    </div>
  );
}
