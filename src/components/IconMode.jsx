import { Stack, useColorMode } from '@chakra-ui/react'
import Moon from './Moon'
import Sun from './Sun'
export default function IconMode () {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <Stack mt={5} h={5}>
      {
        colorMode === 'light'
          ? <Moon toggleColorMode={toggleColorMode} />
          : <Sun toggleColorMode={toggleColorMode} />
      }
      {/* <Switch colorScheme='primary' size='md' onChange={toggleColorMode} /> */}
    </Stack>
  )
}
