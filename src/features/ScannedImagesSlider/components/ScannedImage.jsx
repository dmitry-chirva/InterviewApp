import React from 'react';
import styled from "@emotion/styled";

const ImageContainer = styled('div')({
    width: '100%',
    maxWidth: '400px',
    maxHeight: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden'
});

const ScannedImage = ({ image }) => {
    return (
        <ImageContainer>
            <img src={image.jpg} alt="Scanned" />
        </ImageContainer>
    );
};

export default ScannedImage;
