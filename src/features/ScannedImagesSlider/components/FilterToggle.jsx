import React, { useContext } from 'react';

import ScannedImagesContext from '../../../shared/contexts/ScannedImagesContext';
import { Button } from "../../../uikit";

const FilterToggle = () => {
    const { filter, toggleFilter } = useContext(ScannedImagesContext);

    return (
        <Button onClick={toggleFilter}>
            {filter ? 'Show All Images' : 'Show Images with Detections'}
        </Button>
    );
};

export default FilterToggle;
