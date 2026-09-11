import type { ReactNode } from "react";
import { IconAlert } from "@/components/ui/icons";
import { ERROR_INK, fieldErrorClasses, fieldLabelClasses } from "@/components/ui/formStyles";

/**
 * Label + control + inline error, in the order screen readers expect.
 *
 * The control is passed as children so each field keeps control of its own
 * `id`, `aria-invalid` and `aria-describedby` without this wrapper having to
 * guess anything about the input it contains.
 */
export function FormField({
  htmlFor,
  label,
  required = false,
  optionalNote,
  error,
  hint,
  children,
}: {
  htmlFor: string;
  label: string;
  required?: boolean;
  optionalNote?: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div data-field={htmlFor}>
      <label htmlFor={htmlFor} className={fieldLabelClasses}>
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-gold">
            *
          </span>
        )}
        {optionalNote && (
          <span className="ml-2 font-body text-[10px] tracking-normal normal-case text-slate/45">
            {optionalNote}
          </span>
        )}
      </label>

      {children}

      {hint && !error && (
        <p id={`${htmlFor}-hint`} className="mt-2 font-body text-[12px] leading-snug text-slate/55">
          {hint}
        </p>
      )}

      {error && (
        <p id={`${htmlFor}-error`} role="alert" className={fieldErrorClasses} style={{ color: ERROR_INK }}>
          <IconAlert aria-hidden="true" className="mt-px h-3.5 w-3.5 shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}

/** Serialises the ids an input should reference for its hint and error text. */
export function describedByFor(
  id: string,
  opts: { hasHint?: boolean; hasError?: boolean },
): string | undefined {
  const ids: string[] = [];
  if (opts.hasHint) ids.push(`${id}-hint`);
  if (opts.hasError) ids.push(`${id}-error`);
  return ids.length ? ids.join(" ") : undefined;
}
