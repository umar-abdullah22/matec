import axiosInstance, { handleError } from './axiosInstance';
import { toast } from 'react-toastify';

export const fetchImages = async () => {
  try {
    const response = await axiosInstance.get('');
    return response.data;
  } catch (error) {
    toast.error(handleError(error));
    throw error;
  }
};

export const addImage = async (imageData: FormData) => {
  try {
    const response = await axiosInstance.post('', imageData);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(handleError(error));
    throw error;
  }
};

export const deleteImage = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/${id}`);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(handleError(error));
    throw error;
  }
};
