import Modal from './Modal';
import ImageModal from './ImageModal';
import EmptyGallery from '@assets/ghost.svg'
import useGallery from '@hooks/useGallery';
import ImageCard from './ImageCard';

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
                    {images && images.length === 0 ? (
                        <div className="flex flex-col items-center py-20">
                            <img src={EmptyGallery} alt="empty" height={200} width={200}/>
                            <h2 className="mb-2 text-2xl font-bold">Gallery is Empty!</h2>
                            <p>No images to display. Upload some pictures.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 max-w-6xl">
                            {images && images.map((image) => (
                                <ImageCard
                                    key={image.id}
                                    image={image}
                                    onImageClick={openImageView}
                                    onDeleteClick={handleDeleteClick}
                                />
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
