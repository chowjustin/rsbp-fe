import type * as React from "react";
import { get, type RegisterOptions, useFormContext } from "react-hook-form";
import clsxm from "@/lib/clsxm";

export type RadioProps = {
	/** Input label */
	label: string;
	name: string;
	value: string | number;
	variant?: "small" | "medium" | "large";
	defaultValue?: string | number;
	/** Small text below input, useful for additional information */
	helperText?: string;
	/** Disables the input and shows defaultValue (can be set from React Hook Form) */
	readOnly?: boolean;
	/** Disable error style (not disabling error validation) */
	hideError?: boolean;
	/** Manual validation using RHF, it is encouraged to use yup resolver instead */
	validation?: RegisterOptions;
	/** Set error message from parent component */
	setError?: React.Dispatch<React.SetStateAction<string>>;
	/* input button classname */
	buttonClassName?: string;
	labelTextClassname?: string;
	className?: string;
} & React.ComponentPropsWithoutRef<"input">;

export default function RadioButton({
	label,
	placeholder = "",
	helperText,
	name,
	value,
	readOnly = false,
	hideError = false,
	variant = "medium",
	defaultValue,
	validation,
	setError,
	className,
	buttonClassName,
	labelTextClassname,
	...rest
}: RadioProps) {
	const {
		register,
		formState: { errors },
		watch,
	} = useFormContext();
	const error = get(errors, name);
	const isError = !!error;
	const selectedValue = watch(name);
	const isSelected = selectedValue === value;
	const isDark = true;

	// Heuristic to check if text is likely to wrap (long string or includes line breaks)
	const isLikelyMultiLine = label.length > 50 || label.includes("\n");

	return (
		<label
			htmlFor={`${name}_${value}`}
			className={clsxm(
				// Use items-start for multiline or items-center for single-line alignment
				// We default to items-start for robustness with wrapped text.
				"flex items-center gap-4 space-x-2 w-full p-4 rounded-xl cursor-pointer transition-all duration-200 shadow-sm",
				"text-white border-2",
				// Background and Border colors for dark theme
				isSelected
					? "bg-primary-600 border-primary-500"
					: "bg-white/5 border-white/10",
				isSelected
					? "hover:bg-primary-500"
					: isError
						? "border-red-500 hover:border-red-400 hover:bg-red-900/20"
						: "hover:bg-white/10 hover:border-white/20",
				className,
			)}
		>
			{/* Radio Button Input */}
			<input
				{...register(name, validation)}
				{...rest}
				type="radio"
				name={name}
				id={`${name}_${value}`}
				value={value}
				defaultChecked={defaultValue === value}
				disabled={readOnly}
				className={clsxm(
					// Base sizing classes
					variant === "small"
						? "size-2.5 md:size-3.5"
						: variant === "medium"
							? "size-4 md:size-5"
							: "size-6 md:size-7",
					// Alignment fix: Removed mt-px, relying on flex items-start/center
					"shrink-0 cursor-pointer mt-0.5 translate-y-[3.75px]",
					// Base styles
					"focus:outline-none focus:ring-0 focus:ring-offset-0",
					// Customized checked state for dark theme contrast
					isDark
						? "checked:bg-primary-500 checked:ring-2 checked:ring-offset-2 checked:ring-primary-400 checked:ring-offset-slate-950"
						: "checked:bg-primary-500 checked:hover:bg-primary checked:focus:bg-primary checked:active:bg-primary",
					// Disabled/Error states
					readOnly &&
						"cursor-not-allowed bg-gray-100 disabled:checked:bg-primary-400",
					isError && "border-red-500 bg-red-900/20",
					buttonClassName,
				)}
				placeholder={placeholder}
				aria-describedby={name}
			/>

			{/* Label Text - Added pt-0.5 for subtle alignment correction */}
			<span
				className={clsxm(
					"flex-1 text-base leading-relaxed text-slate-100",
					// This padding helps align the text more naturally when using flex-start
					isLikelyMultiLine ? "pt-0" : "pt-0.5",
				)}
			>
				{label}
			</span>

			{/* Helper text logic (original behavior kept) */}
			{helperText && <div className="text-xs text-gray-400">{helperText}</div>}

			{/* Error message (moved outside label for accessibility and layout) */}
			{!hideError && error && (
				// Using a generic div with classes similar to ErrorMessage.tsx for quick integration
				<div className="flex space-x-1 mt-1">
					<p className="text-red-500 text-xs">{error.message}</p>
				</div>
			)}
		</label>
	);
}
