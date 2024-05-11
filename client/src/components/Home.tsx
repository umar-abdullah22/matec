import Modal from './Modal';
import ImageModal from './ImageModal';
import EmptyGallery from '@assets/ghost.svg'
import useGallery from '@hooks/useGallery';

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
    <>
      <div className="flex justify-center">
        {imageToView && <ImageModal src={imageToView} alt="Zoomed Image" onClose={closeImageView} />}
        <Modal
          isOpen={isModalOpen}
          message="Are you sure you want to delete this image?"
          onCancel={handleCancel}
          onConfirm={handleConfirmDelete}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {images.length === 0 ? (
            <div className="flex flex-col items-center py-20">
              <img src={EmptyGallery} alt="empty" height={200} width={200}/>
              <h2 className="mb-2 text-2xl font-bold">Gallery is Empty!</h2>
              <p >No images to display. Upload some pictures.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 max-w-6xl">
              {images.map((image, index) => (
                <div key={index} className="max-w-sm bg-white cursor-pointer border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg w-96 h-96 object-contain" src={`data:image/jpeg;base64,${image.url}`} alt={image.filename} onClick={() => openImageView(`data:image/jpeg;base64,${image.url}`)} />
                <div className="p-5">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{image.filename}</h5>
                  <div className='flex justify-end'>
                    <button className="px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-700" onClick={(e) => { e.stopPropagation(); handleDeleteClick(image.id); }}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              ))}
            </div>
          )}
          {hasMore && (
            <div className="flex justify-center mt-8">
              <button
                onClick={loadMoreImages}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
