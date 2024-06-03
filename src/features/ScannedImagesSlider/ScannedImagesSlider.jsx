import React, {useEffect} from 'react';
import styled from "@emotion/styled";
import {useSnackbar} from "notistack";

import { Loader, SliderPaginationContainer } from "../../uikit";
import { useEffectOnce } from "../../shared/hooks";
import { ScannedImageMetadata, FilterToggle } from "./components";
import useImagesSlider from './hooks/useImagesSlider';
import ScannedImage from "./components/ScannedImage";

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const ScannedImagesSlider = () => {
    const { images, currentImageIndex, fetchImages, nextImage, prevImage, error, isLoading } = useImagesSlider();
    const { enqueueSnackbar } = useSnackbar()

    useEffectOnce(() => {
        fetchImages();
    })

    useEffect(() => {
        if(error) {
            enqueueSnackbar(error.message, {variant: 'error'})
        }
    }, [error]);

    if (images.length === 0) {
        return <Container>No images found.</Container>;
    }

    const currentImageData = images[currentImageIndex];
    const detectionsList = currentImageData?.detectionsList ?? [];

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
                    <ScannedImage imagePath={currentImageData.jpg} detections={detectionsList} />
                )}
            </SliderPaginationContainer>
            <ScannedImageMetadata metadata={currentImageData}/>
        </Container>
    );
};

export default ScannedImagesSlider;
