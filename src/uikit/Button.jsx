import styled from '@emotion/styled';

const Button = styled('button')({
    backgroundColor: '#ff7b00',
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    transition: 'background-color .3s ease',
    '&:hover': {
        backgroundColor: '#ff5100',
    },
});

export default Button;
