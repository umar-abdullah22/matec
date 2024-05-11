import { create } from 'zustand';
import * as galleryApi from '@services/rest-services/galleryApi';
import { ImageState, PaginatedResponse } from '@type/gallery';

const useImageStore = create<ImageState>((set, get) => ({
  images: [],
  page: 1,
  hasMore: true,

  fetchImages: async (page = 1, limit = 3) => {
    try {
      const data: PaginatedResponse = await galleryApi.fetchImages(page, limit);
      const { images, hasMore } = data
      set(state => ({
        images: page === 1 ? images : [...state.images, ...images],
        page,
        hasMore
      }));
    } catch (error) {
      console.error('Failed to fetch images:', error);
    }
  },

  addImage: async (newImage: FormData) => {
    try {
      await galleryApi.addImage(newImage);
      get().fetchImages(1)
    } catch (error) {
      console.error('Failed to upload image:', error);
    }
  },

  deleteImage: async (id: string) => {
    try {
      await galleryApi.deleteImage(id);
      get().fetchImages(1)

    } catch (error) {
      console.error('Failed to delete image:', error);
    }
  },
}));

export default useImageStore;
