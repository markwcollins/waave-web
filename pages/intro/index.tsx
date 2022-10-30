import { getNextPageLink, PageName, registrationFlow } from '@/config/flow'
import { Center, Heading, Text, Button, Box, Container } from '@chakra-ui/react'
import { ArrowDownIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export default function Page() {
  const pageDetails = registrationFlow[PageName.Intro]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])

  return (
    <Box>
      <Button variant='ghost' size='md' leftIcon={<ChevronLeftIcon  />} colorScheme='brand'>Back to Luxury Escapes</Button>
      <Center bg='gray.900' h='12'>
        Logo
      </Center>
      <Center bg='brand.700' h='500px' textAlign='center'>
        <Container maxW='450px' py={3}>
          <Heading as='h1' color='brand.50' fontSize='4xl'>Waave</Heading>
          <Heading as='h2' mt={4} mb={16} color='brand.50' fontSize='3xl'>Personalising payments and making life easy</Heading>
          <Link href={nextPageLink} >
            <Button size='lg' colorScheme='blackAlpha'  bg='gray.900' minW={48}>Click to Pay</Button>
          </Link>
        </Container>
      </Center>
      <Container maxW='450px' py={6}>
        <Center mt={5}>
          <Heading fontSize='2xl'>New to Waave?</Heading>
        </Center>
        <Center textAlign='center' mt={5}>
          <Text  fontSize='2xl'>Waave is on a mission to help you take back control of your money.</Text>
        </Center>
        <Center textAlign='center' mt={5}>
          <Text  fontSize='2xl'>No need for a credit card number. With the highest security controls in place. Pay directly from your bank account. Just download, connect and Waave..</Text>
        </Center>

        <Center my={5}>
          <Heading fontSize='2xl'>How to pay?</Heading>
        </Center>
      

        <Step 
          heading='Sign up'
          text='Follow the prompts to create your account'
        />
         <Step 
          heading='Connect'
          text='Connect your bank account and set up your account'
        />
         <Step 
          heading='Pay'
          text='Just pay. It&apos;s scecure and simple'
          hideArrow
        />

        <Center my={20}>
          <Link href={nextPageLink} >
            <Button size='lg' bg='gray.900' minW={48}>Click to Pay</Button>
          </Link>
        </Center>
      </Container>
    </Box>
  )
}


const Step = ({
  heading,
  text,
  hideArrow = false
}:{
  heading: string,
  text: string,
  hideArrow?: boolean
}) => (
  <Box textAlign='center'>
    <Heading fontSize='5xl'>{heading}</Heading>
    <Text mt={2} fontSize='xl'>{text}</Text>
    {!hideArrow ? <ArrowDownIcon color='brand.800' w={20} h={20} /> : null}
  </Box>
)