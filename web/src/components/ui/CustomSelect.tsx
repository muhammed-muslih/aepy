import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface CustomSelectProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const CustomSelect = ({
  id,
  name,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  disabled = false,
  required = false,
  className = "",
}: CustomSelectProps) => {
  const generatedId = useId();
  const selectId = id ?? generatedId;

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectedOption = options.find((option) => option.value === value);

  const closeDropdown = () => {
    setIsOpen(false);
    setActiveIndex(-1);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getNextEnabledIndex = (startIndex: number, direction: 1 | -1) => {
    let index = startIndex;

    for (let i = 0; i < options.length; i++) {
      index = (index + direction + options.length) % options.length;

      if (!options[index].disabled) {
        return index;
      }
    }

    return -1;
  };

  const selectOption = (option: SelectOption) => {
    if (option.disabled) return;

    onChange(option.value);
    closeDropdown();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;

    switch (event.key) {
      case "ArrowDown": {
        event.preventDefault();

        if (!isOpen) {
          setIsOpen(true);
          setActiveIndex(
            selectedOption
              ? options.findIndex((option) => option.value === value)
              : getNextEnabledIndex(-1, 1),
          );
        } else {
          setActiveIndex((current) => getNextEnabledIndex(current, 1));
        }
        break;
      }

      case "ArrowUp": {
        event.preventDefault();

        if (!isOpen) {
          setIsOpen(true);
          setActiveIndex(
            selectedOption
              ? options.findIndex((option) => option.value === value)
              : getNextEnabledIndex(0, -1),
          );
        } else {
          setActiveIndex((current) => getNextEnabledIndex(current, -1));
        }
        break;
      }

      case "Enter":
      case " ": {
        event.preventDefault();

        if (!isOpen) {
          setIsOpen(true);
          setActiveIndex(
            selectedOption
              ? options.findIndex((option) => option.value === value)
              : getNextEnabledIndex(-1, 1),
          );
        } else if (activeIndex >= 0) {
          selectOption(options[activeIndex]);
        }
        break;
      }

      case "Escape":
        event.preventDefault();
        closeDropdown();
        break;

      case "Tab":
        closeDropdown();
        break;
    }
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <button
        id={selectId}
        type="button"
        name={name}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${selectId}-listbox`}
        aria-required={required}
        onClick={() => {
          if (disabled) return;

          setIsOpen((previous) => {
            if (!previous) {
              const selectedIndex = options.findIndex(
                (option) => option.value === value,
              );

              setActiveIndex(
                selectedIndex >= 0 ? selectedIndex : getNextEnabledIndex(-1, 1),
              );
            }

            return !previous;
          });
        }}
        onKeyDown={handleKeyDown}
        className={`
          flex w-full items-center justify-between gap-3
          rounded-xl border border-aepy-caramel
          bg-transparent px-4 py-3
          text-left text-sm text-aepy-chocolate
          outline-none transition-all duration-200
          focus:border-aepy-orange focus:ring-2 focus:ring-aepy-orange/10
          disabled:cursor-not-allowed disabled:opacity-50
        `}
      >
        <span className={!selectedOption ? "text-aepy-chocolate/50" : ""}>
          {selectedOption?.label ?? placeholder}
        </span>

        <ChevronDown
          size={18}
          className={`shrink-0 text-aepy-chocolate/70 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown options */}
      <div
        id={`${selectId}-listbox`}
        role="listbox"
        aria-labelledby={selectId}
        aria-hidden={!isOpen}
        className={`
          absolute left-0 top-[calc(100%+8px)] z-50 w-full
          origin-top rounded-xl border border-aepy-caramel/70
          bg-aepy-cream p-1.5 shadow-lg shadow-aepy-chocolate/10
          transition-all duration-200
          ${
            isOpen
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-2 scale-[0.98] opacity-0"
          }
        `}
      >
        <div className="max-h-60 overflow-y-auto">
          {options.map((option, index) => {
            const isSelected = option.value === value;
            const isActive = index === activeIndex;

            return (
              <button
                key={option.value}
                ref={(element) => {
                  optionRefs.current[index] = element;
                }}
                type="button"
                role="option"
                aria-selected={isSelected}
                disabled={option.disabled}
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectOption(option)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`
                  flex w-full items-center justify-between gap-3
                  rounded-lg px-3 py-3 text-left text-sm
                  transition-colors duration-150
                  ${
                    option.disabled
                      ? "cursor-not-allowed opacity-40"
                      : "cursor-pointer"
                  }
                  ${
                    isActive || isSelected
                      ? "bg-aepy-orange/15 text-aepy-chocolate"
                      : "text-aepy-chocolate hover:bg-aepy-orange/15 hover:text-aepy-chocolate"
                  }
                `}
              >
                <span>{option.label}</span>

                {isSelected && (
                  <Check size={17} className="shrink-0 text-aepy-orange" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Native form value */}
      <input type="hidden" name={name} value={value} required={required} />
    </div>
  );
};

export default CustomSelect;
