import { useState, useEffect, useCallback } from 'react';
import useImageStore from '../store/useImageStore';

const useGallery = () => {
  const { images, fetchImages, deleteImage, hasMore, page } = useImageStore();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState('');
  const [imageToView, setImageToView] = useState('');

  useEffect(() => {
    if (images.length === 0) fetchImages();
  }, [fetchImages, images.length]);

  const handleScroll = useCallback  (() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore) return;
    fetchImages();
  }, [fetchImages, hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleDeleteClick = (id: string) => {
    setSelectedImageId(id);
    setModalOpen(true);
  };

  const handleCancel = () => setModalOpen(false);

  const handleConfirmDelete = () => {
    if (selectedImageId) {
      deleteImage(selectedImageId);
      setModalOpen(false);
      setSelectedImageId('');
    }
  };

  const openImageView = (imageUrl: string) => setImageToView(imageUrl);

  const closeImageView = () => setImageToView('');

  return {
    images,
    isModalOpen,
    imageToView,
    handleDeleteClick,
    handleCancel,
    handleConfirmDelete,
    openImageView,
    closeImageView,
    fetchImages,
    hasMore, page
  };
};

export default useGallery;
