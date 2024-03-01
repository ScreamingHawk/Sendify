import { AppShell } from '@mantine/core';
import { Web3Provider } from './providers/Web3Provider';
import { Topbar } from './components/Topbar';
import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';
import { HashRouter as Router, Route, Routes } from "react-router-dom"

import "@mantine/core/styles.css"
import "./App.css"

import { Send } from './components/Send';

const myColor: MantineColorsTuple = [
  '#fff0e4',
  '#ffe0cf',
  '#fac0a1',
  '#f69e6e',
  '#f28043',
  '#f06d27',
  '#f06418',
  '#d6530c',
  '#bf4906',
  '#a73c00'
];

const theme = createTheme({
  colors: {
    myColor,
  }
});

export function App() {
  return (
    <Web3Provider>
      <MantineProvider theme={theme}>
        <Router>
          <AppShell
            header={{ height: 60 }}
          >
            <AppShell.Header >
              <div style={{ margin: "0 2rem 0 2rem" }}>
                <Topbar />
              </div>
            </AppShell.Header>
            <AppShell.Main style={{
              textAlign: "left",
              width: "100%",
              padding: "5rem",
            }}>
              <Routes>
                <Route path="/" element={<Send />} />
              </Routes>
            </AppShell.Main>
          </AppShell>
        </Router>
      </MantineProvider>
    </Web3Provider> 
  );
}