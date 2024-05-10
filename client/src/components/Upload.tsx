import React from 'react';
import { useUpload } from '../hooks/useUpload';
import ImagePreview from './ImagePreview'; 

const Upload: React.FC = () => {
  const {
    previewUrl,
    isUploading,
    handleFileChange,
    handleUpload,
    handleCancel,
  } = useUpload();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleUpload} className="w-full max-w-md p-4 bg-white rounded shadow-md">
        {previewUrl && <ImagePreview src={previewUrl} onRemove={handleCancel} />}
        {!previewUrl && (
          <input type="file" accept="image/*" onChange={handleFileChange} required className="mb-4"/>
        )}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" disabled={!previewUrl || isUploading}>
          {isUploading ? "Uploading..." : "Upload Image"}
        </button>
      </form>
    </div>
  );
};

export default Upload;
