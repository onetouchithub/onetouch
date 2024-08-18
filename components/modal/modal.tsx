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
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeModal]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-0 shadow-lg">
      <div
        className={` m-4 w-full max-w-xl rounded-lg bg-black p-6 shadow-xl ${isAnimating ? "animate-fadeOut" : "animate-fadeIn"}`}
      >
        <div className="flex items-center justify-between mb-8">
          {title && <h2 className=" text-2xl font-bold">{title}</h2>}
          <button
            onClick={closeModal}
            className=" text-gray-500 hover:text-gray-700"
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
