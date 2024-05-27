import React from 'react';
import styled from "@emotion/styled";

import DetectionList from "./DetectionList";

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
});

const ScannedImageInfo = ({ info }) => {
    const metadataEl = (
        <>
            <div>Overall Confidence levels: {info.overallConf}</div>
            <div>Noise Floor levels: {info.noiseFloorMetric}</div>
        </>
    );

    /* TODO implementation Table/List Instead of raw data */
    return (
        <Container>
            <p>Scan Timestamp: {info.createdOn}</p>
            <p>Image Metadata: {metadataEl}</p>
            <p>Number of Detections: {info.detectionsList.length}</p>
            {!!info.detectionsList.length && (
                <DetectionList detections={info.detectionsList}/>
            )}
        </Container>
    );
};

export default ScannedImageInfo;
