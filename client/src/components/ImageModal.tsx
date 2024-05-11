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
        <div className="bg-gray-800 rounded-lg overflow-hidden" style={{ maxHeight: '650px' }}>
          <img src={src} alt={alt} className="max-w-full max-h-full" />
        </div>
        <button
          onClick={onClose}
          className="absolute top-1 right-1 bg-gray-800 text-white rounded-full py-1 px-3 hover:bg-gray-600"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
