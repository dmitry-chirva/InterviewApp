import React from 'react';
import styled from "@emotion/styled";

const Detection = styled('div')({
    marginBottom: '15px'
});

const DetectionList = ({ detections }) => {
    /* TODO implementation List Instead of raw data */
    return (
        detections.map((detection, index) => (
            <Detection key={index}>
                <div>Detection {index + 1}</div>
                {/* TODO Add more information */}
                <div>Confidence: {detection.meanconf}</div>
                <div>Summary Confidence: {detection.sumconf}</div>
            </Detection>
        ))
    );
};

export default DetectionList;
