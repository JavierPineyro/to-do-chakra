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
    <ColorModeScript initialColorMode={theme} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </>
)

/*
npm run build
git add dist -f
git commit -m "asfdsf"
git subtree push --prefix dist origin gh-pages
*/
