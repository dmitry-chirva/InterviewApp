import React from 'react';
import styled from "@emotion/styled";
import DetectionBoxes from "./DetectionBoxes";

const ImageContainer = styled('div')({
    width: '313px',
    height: '410px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden'
});

const ScannedImage = ({ imagePath, detections }) => {
    return (
        <ImageContainer>
            {!!imagePath && (
                <DetectionBoxes detections={detections}/>
            )}
            <img src={imagePath} alt="Scanned" />
        </ImageContainer>
    );
};

export default ScannedImage;
