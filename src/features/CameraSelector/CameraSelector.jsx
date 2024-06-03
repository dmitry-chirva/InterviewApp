import React, { useContext, useEffect } from 'react';
import { useSnackbar } from "notistack";
import styled from '@emotion/styled';

import CamerasContext from '../../shared/contexts/CamerasContext';
import {Loader, Tabs} from '../../uikit';
import {useEffectOnce} from "../../shared/hooks";

const SelectorContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px 0',
});

const CameraSelector = () => {
    const { cameras, selectedCamera, fetchCameras, selectCamera, isLoading, error } = useContext(CamerasContext);
    const { enqueueSnackbar } = useSnackbar();

    useEffectOnce(() => {
        fetchCameras();
    })

    useEffect(() => {
        if(error) {
            enqueueSnackbar(error.message, {variant: 'error'})
        }
    }, [error]);

    if (cameras.length === 0) {
        return (
            <SelectorContainer>
                No cameras found.
            </SelectorContainer>
        );
    }

    const handleChange = (event, newValue) => {
        const camera = cameras.find(cam => cam.deviceId === newValue);
        selectCamera(camera);
    };

    const tabs = cameras.map(camera => ({
        label: camera.tags.name,
        value: camera.deviceId,
        content: `Camera ${camera.tags.name} content`,
    }));

    return (
        <SelectorContainer>
            {isLoading ? (
                <Loader />
            ) : (
                <Tabs tabs={tabs} selectedTab={selectedCamera?.deviceId || ''} onChange={handleChange} />
            )}
        </SelectorContainer>
    );
};

export default CameraSelector;
