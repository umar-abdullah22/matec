import useGallery from '@hooks/useGallery';
import React from 'react';
import ImageModal from './ImageModal';

interface ImageCardProps {
    image: { url: string; filename: string; id: string };
    onImageClick: (url: string) => void;
    onDeleteClick: (id: string, event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick, onDeleteClick }) => {
    const {
        imageToView,
        closeImageView,
    } = useGallery();

    return (
        <div className="max-w-sm bg-white cursor-pointer border border-gray-200 transition-transform duration-500 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 dark:bg-gray-800 dark:border-gray-700 dark:shadow-neon-effect">
            {imageToView && <ImageModal src={imageToView} alt="Zoomed Image" onClose={closeImageView} />}
                
            <img
                className="w-96 h-96 object-contain hover:scale-105 transition-transform duration-500"
                src={`data:image/jpeg;base64,${image.url}`}
                alt={image.filename}
                onClick={() => onImageClick(`data:image/jpeg;base64,${image.url}`)}
            />
            <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{image.filename}</h5>
                <div className='flex justify-end'>
                    <button
                        className="px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-700"
                        onClick={(e) => { onDeleteClick(image.id, e) }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
