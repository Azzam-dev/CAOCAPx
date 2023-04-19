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
      relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full 
      ${
        outline
          ? "bg-red border-gray text-black"
          : "bg-blue-500 border-blue-500 text-white"
      }

      ${
        small
          ? "py-1 text-sm font-light border-[1px]"
          : "py-3 text-md font-semibold border-2"
      }
      `}
    >
      {label}
    </button>
  );
}
