// src/components/ImageModal.tsx
import React from 'react';

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative p-4" style={{ width: '100%', maxWidth: '650px' }}>
        {/* Image container that can scale responsively */}
        <div className="bg-white rounded-lg overflow-hidden" style={{ maxHeight: '650px' }}>
          <img src={src} alt={alt} className="max-w-full max-h-full" />
        </div>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 bg-gray-800 text-white rounded-full p-2 m-4 hover:bg-gray-600"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
