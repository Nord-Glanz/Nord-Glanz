import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string;
  description?: string;
  beforeImage?: string;
  afterImage?: string;
  onPrev?: () => void;
  onNext?: () => void;
}

export function LightboxModal({
  isOpen,
  onClose,
  title,
  imageSrc,
  description,
  onPrev,
  onNext
}: LightboxModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col max-h-[90vh]">
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
          <h3 className="text-white font-bold text-lg sm:text-xl truncate pr-4">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            id="lightbox-close-button"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Image Display */}
        <div className="relative flex-1 bg-black flex items-center justify-center p-2 min-h-[350px] sm:min-h-[500px]">
          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-4 p-3 rounded-full bg-slate-900/80 text-white border border-slate-700 hover:bg-[#1B75D0] transition-colors z-10"
              id="lightbox-prev-button"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <img
            src={imageSrc}
            alt={title}
            referrerPolicy="no-referrer"
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl"
          />

          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-4 p-3 rounded-full bg-slate-900/80 text-white border border-slate-700 hover:bg-[#1B75D0] transition-colors z-10"
              id="lightbox-next-button"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Modal Description Footer */}
        {description && (
          <div className="p-4 sm:p-6 bg-slate-900/90 border-t border-slate-800 text-slate-300 text-sm">
            <p className="leading-relaxed">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
