export enum SuccessMessageEnums {
    IMAGE_DELETED = 'Image deleted successfully',
    IMAGE_UPLOADED = 'Image Uploaded successfully'
}

export enum ErrorMessageEnums {
    NOT_FOUND = 'Image not found',
    CONFLICT = 'Image with this ID already exists',
    FILE_TYPE = 'Only image files are allowed',
    PROCESS_ERROR = 'Failed to process image',
    EMPTY_FILE = 'File must be provided'
}