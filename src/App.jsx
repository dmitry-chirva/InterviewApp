import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {SnackbarProvider} from "notistack";
import styled from "@emotion/styled";

import NavigationBar from "./layout/NavigationBar";

import Home from "./pages/Home";
import Account from "./pages/Account";
import Settings from "./pages/Settings"

import { CamerasProvider } from "./shared/contexts/CamerasContext";
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
      <CamerasProvider>
          <ScannedImagesProvider>
              <SnackbarProvider maxSnack={3}>
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
              </SnackbarProvider>
          </ScannedImagesProvider>
      </CamerasProvider>
  );
}

export default App;
