import { Box } from '@chakra-ui/react'

export default function Moon ({ toggleColorMode }) {
  return (
    <Box
      title='DarkMode'
      onClick={toggleColorMode} marginLeft={1} padding={1} alignItems='center' h={8} w={9}
    >
      <svg
        className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
      </svg>
    </Box>
  )
}
