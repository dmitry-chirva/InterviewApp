import React from 'react';
import styled from "@emotion/styled";

import DetectionList from "./DetectionList";
import {Tag} from "../../../uikit";

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
});

const ScannedImageMetadata = ({ metadata }) => {
    const { createdOn, noiseFloorMetric, detectionsList, overallConf } = metadata;

    const scanDate = new Date(createdOn).toLocaleString();
    const overallConfidenceLevels = overallConf > 0 ? `${Math.floor(overallConf)}%` : 'N/A';
    const noiseFloorLevels = noiseFloorMetric > 0 ? `${Math.floor(noiseFloorMetric)}%` : 'N/A';
    const numberOfDetections = detectionsList.length;

    const imageMetadataEl = (
        <>
            <div>Overall Confidence levels: {overallConfidenceLevels}</div>
            <div>Noise Floor levels: {noiseFloorLevels}</div>
        </>
    );

    /* TODO implementation Table/List Instead of raw data */
    return (
        <Container>
            <p>Scan Timestamp: {scanDate}</p>
            <p>Image Metadata: {imageMetadataEl}</p>
            <p>Number of Detections: <Tag>{numberOfDetections}</Tag></p>
            {!!numberOfDetections && (
                <DetectionList detections={detectionsList}/>
            )}
        </Container>
    );
};

export default ScannedImageMetadata;
