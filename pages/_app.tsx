import { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()

import { defineStyleConfig } from '@chakra-ui/react'

import { withDefaultVariant } from '@chakra-ui/react'

// const customTheme = extendTheme(
//   withDefaultVariant({
//     variant: 'brand',
//     components: ['Input', 'NumberInput', 'PinInput'],
//   }),
// )
import { withDefaultColorScheme } from '@chakra-ui/react'

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    // fontWeight: 'bold',
    // textTransform: 'uppercase',
    // borderRadius: 'base', // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    // sm: {
    //   fontSize: 'sm',
    //   px: 4, // <-- px is short for paddingLeft and paddingRight
    //   py: 3, // <-- py is short for paddingTop and paddingBottom
    // },
    // md: {
    //   fontSize: 'md',
    //   px: 6, // <-- these values are tokens from the design system
    //   py: 4, // <-- these values are tokens from the design system
    // },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      // border: '2px solid',
      // borderColor: 'purple.500',
      // color: 'purple.500',
    },
    solid: {
      // bg: 'purple.500',
      // color: 'white',
    },
  },
  // The default size and variant values
  defaultProps: {
    // size: 'md',
    colorScheme: 'brand',
  },
})

// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react'

// 2. Call `extendTheme` and pass your custom values
const customTheme = extendTheme(withDefaultColorScheme({ colorScheme: 'brand' }))
const theme = extendTheme({
  components: {
    Button,
  },
  colors: {
    brand: {
      50: '#F8F8FE',
      100: '#F2F1FD',
      200: '#D7D4FA',
      300: '#C9C6F8',
      400: '#BCB8F6',
      500: '#AFAAF4',
      600: '#A19CF2',
      700: '#948DF1',
      800: '#7971ED',
      900: '#615ABE',
    },
  },
}, withDefaultColorScheme({ colorScheme: 'brand' }))

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page)
  
  return (<>
    <QueryClientProvider client={queryClient}>
      {/* @ts-ignore */}
      <ChakraProvider theme={theme}>
       {getLayout(<Component {...pageProps} />)}
       </ChakraProvider>
    </QueryClientProvider>
  </>)
}

export default App
