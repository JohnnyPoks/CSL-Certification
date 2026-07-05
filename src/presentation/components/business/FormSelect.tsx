import { SelectHTMLAttributes } from "react";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
}

export function FormSelect({
  label,
  options,
  error,
  className = "",
  ...props
}: FormSelectProps) {
  return (
    <div className="mb-4 w-full">
      <label className="block text-xs sm:text-sm font-medium mb-1 text-gray-700">
        {label} {props.required && "*"}
      </label>
      <select
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-pea text-sm sm:text-base ${
          error ? "border-red-500" : "border-gray-300"
        } ${className}`}
        {...props}
      >
        <option value="" className="text-sm sm:text-base">
          Sélectionner...
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-sm sm:text-base"
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs sm:text-sm text-red-500">{error}</p>}
    </div>
  );
}
