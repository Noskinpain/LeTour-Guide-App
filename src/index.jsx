import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material';
import { MainContextProvider } from "./context/MainContext"
import { ChakraProvider, theme } from '@chakra-ui/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <MainContextProvider>
  <React.StrictMode>
  <ChakraProvider theme={theme}>

    <App />
    </ChakraProvider>
    
  </React.StrictMode>
  </MainContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
