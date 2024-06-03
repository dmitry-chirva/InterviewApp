import React from 'react';

const DetectionBox = ({ coordinates }) => {
    const [x1, y1, x2, y2, x3, y3, x4, y4] = coordinates;

    const minXCoord = Math.min(x1, x2, x3, x4);
    const minYCoord = Math.min(y1, y2, y3, y4);
    const maxXCoord = Math.max(x1, x2, x3, x4);
    const maxYCoord = Math.max(y1, y2, y3, y4);
    const boxWidth = Math.abs(maxXCoord - x1);
    const boxHeight = Math.abs(maxYCoord - y1);

    return (
        <rect
            x={minXCoord}
            y={minYCoord}
            width={boxWidth}
            height={boxHeight}
            stroke="red"
            strokeWidth="2"
            fill="transparent"
        />
    );
};

export default DetectionBox;
