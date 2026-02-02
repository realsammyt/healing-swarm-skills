import React, { useState } from 'react';
import { cn } from '@site/src/lib/utils';

export interface SafetyConsentProps {
  title: string;
  body: string;
  checkboxLabel?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel?: () => void;
  className?: string;
}

export function SafetyConsent({
  title,
  body,
  checkboxLabel = 'I understand and acknowledge the above information',
  confirmLabel = 'I Consent',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
  className,
}: SafetyConsentProps) {
  const [isAcknowledged, setIsAcknowledged] = useState(false);

  const handleConfirm = () => {
    if (isAcknowledged) {
      onConfirm();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsAcknowledged(!isAcknowledged);
    }
  };

  return (
    <div
      className={cn(
        'rounded-lg border-2 border-feedback-warning bg-grounding-dark p-6 space-y-5',
        'shadow-lg',
        className
      )}
      role="dialog"
      aria-labelledby="safety-consent-title"
      aria-describedby="safety-consent-body"
    >
      {/* Warning Icon and Title */}
      <div className="flex items-start gap-3">
        <div
          className="flex-shrink-0 p-2 rounded-full bg-feedback-warning/20"
          aria-hidden="true"
        >
          <svg
            className="w-6 h-6 text-feedback-warning"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h2
            id="safety-consent-title"
            className="text-xl font-bold text-feedback-warning"
          >
            {title}
          </h2>
        </div>
      </div>

      {/* Body Text */}
      <div
        id="safety-consent-body"
        className="text-sm text-gray-300 leading-relaxed space-y-3"
      >
        {body.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Acknowledgment Checkbox */}
      <div className="pt-2">
        <label
          className={cn(
            'flex items-start gap-3 p-4 rounded-lg cursor-pointer',
            'transition-all duration-200',
            'border-2',
            isAcknowledged
              ? 'border-healing-primary bg-healing-ghost'
              : 'border-grounding-medium bg-grounding-dark/50 hover:border-grounding-light'
          )}
        >
          <div className="flex-shrink-0 pt-0.5">
            <input
              type="checkbox"
              checked={isAcknowledged}
              onChange={(e) => setIsAcknowledged(e.target.checked)}
              onKeyDown={handleKeyDown}
              className={cn(
                'w-5 h-5 rounded border-2',
                'focus:ring-2 focus:ring-offset-2 focus:ring-offset-grounding-dark',
                isAcknowledged
                  ? 'border-healing-primary bg-healing-primary focus:ring-healing-primary'
                  : 'border-grounding-medium bg-grounding-dark focus:ring-grounding-light'
              )}
              aria-describedby="checkbox-label"
            />
          </div>
          <span
            id="checkbox-label"
            className={cn(
              'text-sm font-medium transition-colors',
              isAcknowledged ? 'text-healing-light' : 'text-grounding-light'
            )}
          >
            {checkboxLabel}
          </span>
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 pt-2">
        <button
          type="button"
          onClick={handleConfirm}
          disabled={!isAcknowledged}
          className={cn(
            'flex-1 px-6 py-3 rounded-lg font-semibold',
            'transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grounding-dark',
            isAcknowledged
              ? 'bg-healing-primary text-grounding-darkest hover:bg-healing-dark focus:ring-healing-primary cursor-pointer shadow-glow-healing'
              : 'bg-grounding-medium text-grounding-light cursor-not-allowed opacity-50'
          )}
          aria-label={`${confirmLabel} - ${isAcknowledged ? 'enabled' : 'disabled, please acknowledge first'}`}
        >
          {confirmLabel}
        </button>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className={cn(
              'px-6 py-3 rounded-lg font-semibold',
              'border-2 border-grounding-medium text-grounding-light',
              'hover:border-grounding-light hover:text-gray-300',
              'focus:outline-none focus:ring-2 focus:ring-grounding-light focus:ring-offset-2',
              'focus:ring-offset-grounding-dark',
              'transition-all duration-200'
            )}
            aria-label={cancelLabel}
          >
            {cancelLabel}
          </button>
        )}
      </div>

      {/* Disabled State Helper */}
      {!isAcknowledged && (
        <p
          className="text-xs text-feedback-warning/70 text-center italic"
          role="status"
          aria-live="polite"
        >
          Please read and acknowledge the information above to continue
        </p>
      )}
    </div>
  );
}
