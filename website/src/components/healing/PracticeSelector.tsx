import React, { useState, useRef, useCallback } from 'react';
import { cn } from '@site/src/lib/utils';

export interface PracticeOption {
  id: string;
  label: string;
  description: string;
}

export interface PracticeSelectorProps {
  title: string;
  description?: string;
  options: PracticeOption[];
  mode?: 'single' | 'multi';
  onSelect: (selectedIds: string[]) => void;
  defaultSelected?: string[];
  className?: string;
}

export function PracticeSelector({
  title,
  description,
  options,
  mode = 'single',
  onSelect,
  defaultSelected = [],
  className,
}: PracticeSelectorProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    new Set(defaultSelected)
  );
  const [focusedIndex, setFocusedIndex] = useState(0);
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (optionId: string) => {
    const newSelectedIds = new Set(selectedIds);

    if (mode === 'single') {
      newSelectedIds.clear();
      newSelectedIds.add(optionId);
    } else {
      if (newSelectedIds.has(optionId)) {
        newSelectedIds.delete(optionId);
      } else {
        newSelectedIds.add(optionId);
      }
    }

    setSelectedIds(newSelectedIds);
    onSelect(Array.from(newSelectedIds));
  };

  const focusOption = useCallback((index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, options.length - 1));
    setFocusedIndex(clampedIndex);
    optionRefs.current[clampedIndex]?.focus();
  }, [options.length]);

  const handleKeyDown = (event: React.KeyboardEvent, optionId: string, index: number) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        handleToggle(optionId);
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        focusOption(index + 1);
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        focusOption(index - 1);
        break;
      case 'Home':
        event.preventDefault();
        focusOption(0);
        break;
      case 'End':
        event.preventDefault();
        focusOption(options.length - 1);
        break;
    }
  };

  return (
    <div
      className={cn('space-y-4', className)}
      role="group"
      aria-label={title}
    >
      {/* Header */}
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-healing-light">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-grounding-light leading-relaxed">
            {description}
          </p>
        )}
        {mode === 'multi' && (
          <p className="text-xs text-calm-light italic">
            You can select multiple options
          </p>
        )}
      </div>

      {/* Options Grid */}
      <div
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        role={mode === 'single' ? 'radiogroup' : 'group'}
      >
        {options.map((option, index) => {
          const isSelected = selectedIds.has(option.id);

          return (
            <div
              key={option.id}
              ref={(el) => { optionRefs.current[index] = el; }}
              className={cn(
                'relative rounded-lg border-2 p-4 cursor-pointer',
                'transition-all duration-200',
                'focus:ring-2 focus:ring-offset-2',
                'focus:ring-offset-grounding-dark focus:ring-healing-primary',
                'focus:outline-none',
                'hover:scale-[1.02] active:scale-[0.98]',
                isSelected
                  ? 'border-healing-primary bg-healing-ghost shadow-glow-healing'
                  : 'border-grounding-medium bg-grounding-dark/50 hover:border-grounding-light'
              )}
              onClick={() => handleToggle(option.id)}
              onKeyDown={(e) => handleKeyDown(e, option.id, index)}
              role={mode === 'single' ? 'radio' : 'checkbox'}
              aria-checked={isSelected}
              tabIndex={index === focusedIndex ? 0 : -1}
            >
              {/* Selection Indicator */}
              <div className="absolute top-3 right-3">
                {isSelected ? (
                  <svg
                    className="w-5 h-5 text-healing-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <div
                    className="w-5 h-5 rounded-full border-2 border-grounding-medium"
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Option Content */}
              <div className="pr-8 space-y-2">
                <h4
                  className={cn(
                    'font-semibold transition-colors',
                    isSelected ? 'text-healing-light' : 'text-gray-300'
                  )}
                >
                  {option.label}
                </h4>
                <p
                  className={cn(
                    'text-sm leading-relaxed transition-colors',
                    isSelected ? 'text-gray-200' : 'text-grounding-light'
                  )}
                >
                  {option.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selection Summary */}
      {selectedIds.size > 0 && (
        <div
          className="flex items-center gap-2 text-sm text-calm-light"
          role="status"
          aria-live="polite"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            {selectedIds.size} {selectedIds.size === 1 ? 'option' : 'options'} selected
          </span>
        </div>
      )}
    </div>
  );
}
