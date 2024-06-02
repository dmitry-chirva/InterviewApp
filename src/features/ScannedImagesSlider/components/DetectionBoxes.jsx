import React from 'react';
import styled from "@emotion/styled";
import DetectionBox from "./DetectionBox";

const Box = styled('svg')({
    position: 'absolute'
});

const DetectionBoxes = ({ detections }) => {
    return (
        detections.map(({roicoordsList}, index) => (
            <Box width="100%" height="100%" key={index}>
                <DetectionBox coordinates={roicoordsList}/>
            </Box>
        ))
    );
};

export default DetectionBoxes;
