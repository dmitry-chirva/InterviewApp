import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "@emotion/styled";

import { Sidebar } from "../uikit";
import logoImage from "../shared/media/KuvaLogo.png";

const Logo = styled('img')({
    width: '95%',
    marginBottom: '30px'
});

const StyledNav = styled('nav')({
    '& > ul': {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
});

const StyledLink = styled(NavLink)({
    color: '#fff',
    textDecoration: "none",
    '&:hover, &.active': {
        color: '#ff5100'
    }
});

const NavigationBar = () => (
    <Sidebar>
        <Logo src={logoImage} alt="Kuva Logo" />
        <StyledNav>
            <ul>
                <li><StyledLink to="/">Home</StyledLink></li>
                <li><StyledLink to="/account">Account</StyledLink></li>
                <li><StyledLink to="/settings">Settings</StyledLink></li>
            </ul>
        </StyledNav>
    </Sidebar>
);

export default NavigationBar;
