import React from "react";
import { CheckCircle2, X } from "lucide-react";

interface ToastProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#14142B]/95 border border-cyan-400/40 text-white shadow-[0_10px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(34,211,238,0.35)] backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200">
      <div className="p-1 rounded-full bg-cyan-400/20 text-cyan-300">
        <CheckCircle2 className="w-4 h-4" />
      </div>
      <span className="text-xs sm:text-sm font-medium tracking-wide">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-[#A1A1B5] hover:text-white transition-colors"
        aria-label="Dismiss toast"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
