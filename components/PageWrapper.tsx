import { ReactNode } from 'react';
import Link from 'next/link';

import { Button, Box,Text, Heading, Progress, Container, IconButton, HStack, Divider, Spacer } from '@chakra-ui/react'

import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router';

export default function PageWrapper({ 
  children, 
  heading,
  subText,
  progressValue,
  backRoute,
  showBackToMerchant = false
}: {
  children: ReactNode,
  heading?: string,
  subText?: string,
  progressValue?: number,
  backRoute?: string|null,
  showBackToMerchant?: boolean
}) {
  const router = useRouter()
  return (
    <Container maxW='450px'>
      {showBackToMerchant 
        ? <HStack mt={3} mb={3}>
            <Button variant='link' size='xs'>Back to Luxury Escapes</Button>
            <Spacer/>
            {/* <Text>Luxury Escapes Holiday:</Text> */}
          </HStack>
        : null}
      
      <Divider mb={8}/>
      <HStack h={5}>
        {backRoute ? 
          <IconButton 
            ml={-3} 
            p={0}
            onClick={() => router.push(backRoute)}
            variant='link' aria-label='Search database' icon={<ChevronLeftIcon  w={6} h={6}/>} /> 
          : null}
        {progressValue ? <Box w='100%' ><Progress size='sm' value={progressValue} /></Box> : null}
      </HStack>
      
      {heading ? <Heading fontSize='3xl' mt={4} mb={4}>{heading}</Heading> : null }
      {subText ? <Text fontSize='md' mb={8}>{subText}</Text> : null}
      {children}
    </Container>
  )
}