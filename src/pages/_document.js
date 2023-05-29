import { Html, Head, Main, NextScript } from 'next/document'

import {BrowserRouter as Router,Route } from 'react-router-dom'
import ContractContext from "../context/ContractContext.jsx"

export default function Document() {
  
  return (
    <Html lang="en">
      <Head />  
      <body>    
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
