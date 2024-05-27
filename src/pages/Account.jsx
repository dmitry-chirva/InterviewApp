import React from 'react';
import styled from "@emotion/styled";

const Container = styled('div')({
    textAlign: 'center'
});

const Account = () => (
    <Container>
        <h1>Account Page</h1>
        <p>Account details go here.</p>
    </Container>
);

export default Account;
