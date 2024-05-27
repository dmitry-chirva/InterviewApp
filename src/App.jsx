import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styled from "@emotion/styled";

import NavigationBar from "./layout/NavigationBar";

import Home from "./pages/Home";
import Account from "./pages/Account";
import Settings from "./pages/Settings"

import { ScannedImagesProvider } from "./shared/contexts/ScannedImagesContext";

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    minHeight: '100vh'
});

const Main = styled('main')({
    display: 'flex',
    flex: '1 0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px'
});

function App() {
  return (
      <ScannedImagesProvider>
          <Router>
              <Container>
                  <NavigationBar />
                  <Main>
                      <Routes>
                          <Route exact path="/" element={<Home />} />
                          <Route path="/account" element={<Account />} />
                          <Route path="/settings" element={<Settings />} />
                      </Routes>
                  </Main>
              </Container>
          </Router>
      </ScannedImagesProvider>
  );
}

export default App;
