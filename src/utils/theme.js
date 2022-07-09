import { extendTheme, theme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
// 2. Call `extendTheme` and pass your custom values
export default extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  colors: {
    primary: theme.colors.twitter
  },
  styles: {
    global: (props) => ({
      'html, body, #root': {
        color: mode(undefined, 'whiteAlpha.900')(props),
        height: '100%'
      }
    })
  },
  components: {
    Button: {
      baseStyle: {
        borderLeftRadius: 9999,
        borderRightRadius: 9999,
        padding: 3
      },
      sizes: {
        lg: {
          paddingY: 3,
          fontSize: 'md'
        }
      },
      variants: {
        solid: (props) => ({
          backgroundColor: `${props.colorScheme}.500`,
          color: mode(undefined, 'white')(props),
          padding: mode(3, 3)(props),
          _hover: {
            backgroundColor: `${props.colorScheme}.600`
          }
        })
      }
    }
  }
})
