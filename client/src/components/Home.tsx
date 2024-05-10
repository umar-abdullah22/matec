import Modal from './Modal';
import ImageModal from './ImageModal';
import useGallery from '../hooks/useGallery';

const Home = () => {
  const {
    images,
    isModalOpen,
    imageToView,
    handleDeleteClick,
    handleCancel,
    handleConfirmDelete,
    openImageView,
    closeImageView,
    fetchImages,
    page,
    hasMore
  } = useGallery();

  const loadMoreImages = () => {
    if (hasMore) {
      fetchImages(page + 1);
    }
  };

  return (
    <div className="flex justify-center">
      {imageToView && <ImageModal src={imageToView} alt="Zoomed Image" onClose={closeImageView} />}
      <Modal 
        isOpen={isModalOpen} 
        message="Are you sure you want to delete this image?" 
        onCancel={handleCancel} 
        onConfirm={handleConfirmDelete}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-6xl">
        {images.map((image, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
            <img
              src={`data:image/jpeg;base64,${image.url}`}
              alt={image.filename}
              className="w-full"
              onClick={() => openImageView(`data:image/jpeg;base64,${image.url}`)}
            />
            <div className="px-6 py-4 flex justify-between items-center">
              <p className="text-xl font-bold">{image.filename}</p>
              <button
                onClick={(e) => { e.stopPropagation(); handleDeleteClick(image.id); }}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {hasMore && (
          <button
            onClick={loadMoreImages}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
