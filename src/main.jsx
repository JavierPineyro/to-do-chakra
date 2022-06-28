import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './utils/theme'
import './index.css'

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <>
    <ColorModeScript initialColorMode={{
      config: {
        initialColorMode: 'dark',
        useSystemColorMode: false
      }
    }}
    />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </>
)

// git subtree push --prefix dist origin gh-pages
