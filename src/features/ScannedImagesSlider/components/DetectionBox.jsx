import React from 'react';

const DetectionBox = ({ coordinates }) => {
    const [x1, y1, x2, y2, x3, y3, x4, y4] = coordinates;

    return (
        <rect
            x={Math.min(x1, x2, x3, x4)}
            y={Math.min(y1, y2, y3, y4)}
            width={Math.abs(x3 - x1)}
            height={Math.abs(y3 - y1)}
            stroke="red"
            strokeWidth="2"
            fill="transparent"
        />
    );
};

export default DetectionBox;
