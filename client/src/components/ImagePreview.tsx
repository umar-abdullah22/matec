import React from 'react';

interface ImagePreviewProps {
  src: string;
  onRemove: () => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ src, onRemove }) => {
  return (
    <div className="relative mb-4">
      <img src={src} alt="Preview" className="w-full h-auto" />
      <button
        type="button"
        onClick={onRemove}
        className="absolute top-1 right-1 bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-3 rounded-full"
        aria-label="Close"
      >
        &times;
      </button>
    </div>
  );
};

export default ImagePreview;
