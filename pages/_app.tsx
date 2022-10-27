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

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page)
  
  return (<>
    <QueryClientProvider client={queryClient}>
      {/* @ts-ignore */}
      <ChakraProvider>
       {getLayout(<Component {...pageProps} />)}
       </ChakraProvider>
    </QueryClientProvider>
  </>)
}

export default App
