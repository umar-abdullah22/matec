import React from 'react';
import { useUpload } from '@hooks/useUpload';
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
    <div className="flex justify-center border border-gray-200 items-center min-h-screen rounded-lg shadow-lg dark:border-gray-700 dark:shadow-neon-effect">
      <form onSubmit={handleUpload} className="w-full border border-gray-200 dark:border-gray-700 max-w-md p-4 bg-white dark:bg-gray-800 rounded shadow-md">
        {previewUrl && <ImagePreview src={previewUrl} onRemove={handleCancel} />}
        {!previewUrl && (
          <label className='group flex flex-col justify-center items-center cursor-pointer'>
            <svg className="text-indigo-500 w-24 mx-auto mb-4 group-hover:text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
            <input type="file" accept="image/*" onChange={handleFileChange} required className="mb-4 text-sm cursor-pointer w-36 hidden" />
            <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 group-hover:bg-indigo-500">Choose Image</div>
          </label>
        )}
        <button type="submit" className={`mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full cursor-pointer ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!previewUrl || isUploading}>
          {isUploading ? "Uploading..." : "Upload Image"}
        </button>
      </form>
    </div>
  );
};

export default Upload;
