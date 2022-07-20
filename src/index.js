import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createContext,useState } from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const AppContext = createContext();

const AppContextProvider = ({children}) =>{

  const [ap,setAp] = useState(false)

  const handleap = () => { setAp(!ap)}

  return(
    <AppContext.Provider value={{ap,handleap}}>
    {children}
    </AppContext.Provider>
  )

}

root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
