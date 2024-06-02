import React from 'react';
import styled from "@emotion/styled";

const Detection = styled('div')({
    marginBottom: '15px'
});

const DetectionList = ({ detections }) => {
    /* TODO implementation List Instead of raw data */
    return (
        detections.map(({meanconf: confidenceLevel, sumconf: summaryConfidenceLevel}, index) => (
            <Detection key={index}>
                <div>Detection {index + 1}</div>
                {/* TODO Add more information */}
                <div>Confidence: {confidenceLevel > 0 ? `${Math.floor(confidenceLevel)}%` : 'N/A'}</div>
                <div>Summary Confidence: {summaryConfidenceLevel > 0 ? `${Math.floor(summaryConfidenceLevel)}%` : 'N/A'}</div>
            </Detection>
        ))
    );
};

export default DetectionList;
