import styled from '@emotion/styled';

const LoaderContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
});

const Spinner = styled('div')`
    border: 5px solid #f3f3f3;
    border-top: 5px solid #ff5100;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

const Loader = () => (
    <LoaderContainer>
        <Spinner />
    </LoaderContainer>
);

export default Loader;
