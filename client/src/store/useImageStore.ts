import { create } from 'zustand';
import { ImageState } from '../types';
import * as galleryApi from '../api/galleryApi';

const useImageStore = create<ImageState>((set) => ({
  images: [],
  page: 1,
  hasMore: true,

  fetchImages: async (page = 1, limit = 10) => {
    try {
      const images = await galleryApi.fetchImages();
      set(state => ({
        images: page === 1 ? images : [...state.images, ...images],
        page,
        hasMore: images.length === limit
      }));    } catch (error) {
      console.error('Failed to fetch images:', error);
    }
  },

  addImage: async (newImage: FormData) => {
    try {
      const { images } = await galleryApi.addImage(newImage);
      set({ images });
    } catch (error) {
      console.error('Failed to upload image:', error);
    }
  },

  deleteImage: async (id: string) => {
    try {
      const { images } = await galleryApi.deleteImage(id);
      set({ images });
    } catch (error) {
      console.error('Failed to delete image:', error);
    }
  },
}));

export default useImageStore;
