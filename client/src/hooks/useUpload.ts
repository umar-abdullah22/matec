import useImageStore from '@store/useImageStore';
import { useState } from 'react';

export const useUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const { addImage } = useImageStore();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
      
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
      setFile(selectedFile);
    } else {
      setPreviewUrl(null);
      setFile(null);
    }
  };

  const handleUpload = async (event: React.FormEvent) => {
    event.preventDefault();
      
    if (file) {
      setIsUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      try {
        await addImage(formData);
      } catch {
        console.error("Failed to upload image");
      } finally {
        setIsUploading(false);
        setFile(null);
        setPreviewUrl(null);
      }
    }
  };

  const handleCancel = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  return {
    file,
    previewUrl,
    isUploading,
    handleFileChange,
    handleUpload,
    handleCancel,
  };
};
