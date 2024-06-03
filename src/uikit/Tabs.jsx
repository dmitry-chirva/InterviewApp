import React from 'react';
import { Tabs as MuiTabs, Tab, TabPanel, TabsList } from '@mui/base';
import styled from '@emotion/styled';

const StyledTabsList = styled(TabsList)({
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid #fff',
});

const StyledTab = styled(Tab)({
    padding: '10px 20px',
    marginLeft: '5px',
    borderRadius: '5px 5px 0 0',
    background: '#ff7b00',
    color: '#fff',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    '&:first-child': {
      marginLeft: 0,
    },
    '&.base--selected': {
        background: '#ff5100',
    },
});

const StyledTabPanel = styled(TabPanel)({
    padding: '20px 0',
});

const Tabs = ({ tabs, selectedTab, onChange }) => (
    <MuiTabs value={selectedTab} onChange={onChange}>
        <StyledTabsList>
            {tabs.map(tab => (
                <StyledTab key={tab.value} value={tab.value}>
                    {tab.label}
                </StyledTab>
            ))}
        </StyledTabsList>
        {tabs.map(tab => (
            <StyledTabPanel key={tab.value} value={tab.value}>
                {tab.content}
            </StyledTabPanel>
        ))}
    </MuiTabs>
);

export default Tabs;
