import React from 'react';

import ScannedImagesSlider from "../features/ScannedImagesSlider/ScannedImagesSlider";
import styled from "@emotion/styled";

const Container = styled('div')({
    maxWidth: '800px',
    width: '100%'
});

const Home = () => {
    /*TODO Add Snapshot tests for Pages*/
    return (
        <Container>
            <ScannedImagesSlider/>
        </Container>
    );
};

export default Home;
