import React from 'react';
import styled from "@emotion/styled";

import ScannedImagesSlider from "../features/ScannedImagesSlider/ScannedImagesSlider";
import CameraSelector from "../features/CameraSelector/CameraSelector";

const Container = styled('div')({
    maxWidth: '800px',
    width: '100%'
});

const Home = () => {
    /*TODO Add Snapshot tests for Pages*/
    return (
        <Container>
            <CameraSelector/>
            <ScannedImagesSlider/>
        </Container>
    );
};

export default Home;
