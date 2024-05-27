import React from 'react';
import styled from "@emotion/styled";

import { Loader, SliderPaginationContainer } from "../../uikit";
import { useEffectOnce } from "../../shared/hooks";
import { ScannedImageInfo, FilterToggle } from "./components";
import useImagesSlider from './hooks/useImagesSlider';
import ScannedImage from "./components/ScannedImage";

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const ScannedImagesSlider = () => {
    const { images, currentImageIndex, fetchImages, nextImage, prevImage, error, isLoading } = useImagesSlider();

    useEffectOnce(() => {
        fetchImages();
    })

    if (error) {
        /*TODO implementation Snackbar instead of raw error info*/
        return <Container>Error loading images: {error.message}</Container>;
    }

    if (images.length === 0) {
        return <Container>No images found.</Container>;
    }

    const currentImage = images[currentImageIndex];

    return (
        <Container>
            <FilterToggle />
            <SliderPaginationContainer nextLabel="Next Image"
                                       prevLabel="Prev Image"
                                       onNext={nextImage}
                                       onPrev={prevImage}>
                {isLoading ? (
                    <Loader />
                ) : (
                    <ScannedImage image={currentImage} />
                )}
            </SliderPaginationContainer>
            <ScannedImageInfo info={currentImage}/>
        </Container>
    );
};

export default ScannedImagesSlider;
