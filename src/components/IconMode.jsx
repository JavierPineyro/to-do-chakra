import { useColorMode, Switch } from '@chakra-ui/react'
export default function IconMode () {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <span>
      {
        colorMode === 'light'
          ? 'Dark Mode'
          : 'Light Mode'
      }
      <Switch colorScheme='primary' size='md' onChange={toggleColorMode} />
    </span>
  )
}
