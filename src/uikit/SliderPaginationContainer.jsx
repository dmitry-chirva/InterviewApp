import styled from '@emotion/styled';

import Button from './Button';

const Container = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    margin: '15px 0'
});

const StyledButton = styled(Button)({
    margin: '0 15px',
});

const SliderPaginationContainer = ({
    nextLabel = "Next",
    prevLabel = "Previous",
    onNext,
    onPrev,
    children
}) => (
    <Container>
        <StyledButton onClick={onPrev}>{prevLabel}</StyledButton>
        {children}
        <StyledButton onClick={onNext}>{nextLabel}</StyledButton>
    </Container>
);

export default SliderPaginationContainer;
