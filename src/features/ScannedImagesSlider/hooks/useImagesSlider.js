import { useContext } from 'react';
import ScannedImagesContext from '../../../shared/contexts/ScannedImagesContext';

const useImagesSlider = () => {
    const {
        images,
        currentImageIndex,
        filter,
        fetchImages,
        setCurrentIndex,
        error,
        isLoading
    } = useContext(ScannedImagesContext);

    const filteredImages = filter ? images.filter(image => image?.detectionsList.length > 0) : images;

    const nextImage = () => {
        setCurrentIndex((currentImageIndex + 1) % filteredImages.length);
    };

    const prevImage = () => {
        setCurrentIndex((currentImageIndex - 1 + filteredImages.length) % filteredImages.length);
    };

    return {
        images: filteredImages,
        currentImageIndex,
        fetchImages,
        nextImage,
        prevImage,
        error,
        isLoading
    };
};

export default useImagesSlider;
