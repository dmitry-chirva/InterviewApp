import styled from '@emotion/styled';

const SidebarContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '15%',
    backgroundColor: '#222',
    padding: '15px'
});

const Sidebar = ({ children }) => (
    <SidebarContainer>
        {children}
    </SidebarContainer>
);

export default Sidebar;
