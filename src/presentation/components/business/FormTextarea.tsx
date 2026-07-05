import { TextareaHTMLAttributes } from "react";

interface FormTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function FormTextarea({
  label,
  error,
  className = "",
  ...props
}: FormTextareaProps) {
  return (
    <div className="mb-4 w-full">
      <label className="block text-xs sm:text-sm font-medium mb-1 text-gray-700">
        {label} {props.required && "*"}
      </label>
      <textarea
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-pea text-sm sm:text-base ${
          error ? "border-red-500" : "border-gray-300"
        } ${className}`}
        rows={4}
        {...props}
      />
      {error && <p className="mt-1 text-xs sm:text-sm text-red-500">{error}</p>}
    </div>
  );
}
