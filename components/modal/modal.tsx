import { XIcon } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const closeModal = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent scrolling on the body when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeModal]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black bg-opacity-50"
      onClick={closeModal} // Close modal when clicking on the background
    >
      <div
        className={`relative m-4 w-full max-w-xl rounded-lg bg-white dark:bg-slate-950 border border-0.5 border-gray-600/50 p-6 shadow-xl ${
          isAnimating ? "animate-fadeOut" : "animate-fadeIn"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="mb-8 flex items-center justify-between">
          {title && <h2 className="text-2xl font-bold">{title}</h2>}
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700"
          >
            <XIcon />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
