import React, { useContext, useEffect } from 'react';
import { useSnackbar } from "notistack";
import styled from '@emotion/styled';

import CamerasContext from '../../shared/contexts/CamerasContext';
import {Loader, Tabs, Tag} from '../../uikit';
import {useEffectOnce} from "../../shared/hooks";

const SelectorContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px 0',
});

const OnlineTag = styled(Tag)({
    marginTop: '15px',
    backgroundColor: '#97d700'
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

    const handleChange = (event, id) => {
        const camera = cameras.find(cam => cam.deviceId === id);
        selectCamera(camera);
    };

    const tabs = cameras.map(camera => ({
        label: camera.tags.name,
        value: camera.deviceId,
        content: (
            <>
                <div>Camera name: {camera.tags.name}</div>
                {!!camera.connectionState && (
                    <OnlineTag>online</OnlineTag>
                )}
            </>
        ),
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
