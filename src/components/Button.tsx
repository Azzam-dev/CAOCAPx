"use client";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: string;
}

export default function Button({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      relative w-full rounded-lg transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70 
      ${
        outline
          ? "bg-red border-gray text-black"
          : "border-blue-500 bg-blue-500 text-white"
      }

      ${
        small
          ? "border-[1px] py-1 text-sm font-light"
          : "text-md border-2 py-3 font-semibold"
      }
      `}
    >
      {label}
    </button>
  );
}
