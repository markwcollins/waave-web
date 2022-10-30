import { ReactNode } from 'react';
import Link from 'next/link';

import { Highlight, Center, Button, Box,Text, Heading, Progress, Container, IconButton, HStack, Divider, Spacer } from '@chakra-ui/react'

import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router';

export default function PageWrapper({ 
  children, 
  heading,
  highlightText,
  subText,
  progressValue,
  backRoute,
  hideBackToMerchant = false,
  hideProduct = false
}: {
  children: ReactNode,
  heading?: string,
  highlightText?: string,
  subText?: string,
  progressValue?: number,
  backRoute?: string|null,
  hideBackToMerchant?: boolean,
  hideProduct?: boolean
}) {
  const router = useRouter()
  return (
    <Container maxW='450px' pt={3}>
      {!hideBackToMerchant 
        ? <HStack mb={3}>
            <Button variant='link' size='xs'>Back to Luxury Escapes</Button>
          </HStack>
        : null}

      <Divider mt={1} mb={4}/>

      {!hideProduct 
        ? <Center  mb={4}>
            <Text fontWeight='bold' fontSize='sm'>You&apos;re buying a trip to Bali for $5,300. Exciting!</Text>
          </Center>
        : null}
      
      {backRoute ||progressValue ? <HStack h={5}>
        {backRoute ? 
          <IconButton 
            ml={-3} 
            p={0}
            onClick={() => router.push(backRoute)}
            variant='link' aria-label='Search database' icon={<ChevronLeftIcon  w={6} h={6}/>} /> 
          : null}
        {progressValue ? <Box w='100%' ><Progress colorScheme='brand' size='sm' value={progressValue} /></Box> : null}
      </HStack> : null}
      

      {heading ?
        // ? <Heading fontSize='3xl' mt={4} mb={4}>
        //     {heading} 
        //     {highlightText ? <Text colorScheme='brand' as='span'>{` `}{highlightText}</Text> :null}
        //   </Heading>
          <Heading fontSize='3xl' mt={4} mb={4}>
            {highlightText
            ? <Highlight
                query={highlightText}
                styles={{ color: 'brand.800' }}
                >
                {heading} 
              </Highlight>
            : heading }
           </Heading> 
        : null }
      {subText ? <Text fontSize='md' mb={8}>{subText}</Text> : null}
      {children}
    </Container>
  )
}