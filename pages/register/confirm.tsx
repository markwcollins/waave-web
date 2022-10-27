import Link from 'next/link';
import { Container, Divider, HStack, VStack } from '@chakra-ui/react'
import {
  Text,
  Flex,
  Box,
  Spacer,
  Button,
  ButtonGroup
} from '@chakra-ui/react'
import { useFormik, Formik, Form, Field } from 'formik';
import PageWrapper from '@/components/PageWrapper';
import { useRouter } from 'next/router';
import { registrationFlow, PageName, getNextPageLink } from '@/config/flow';
import { states } from '../../config/states';

export default function Page() {
  const router = useRouter()
  const pageDetails = registrationFlow[PageName.Confirm]
  // const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  
  return (
    <PageWrapper
      heading='Are these details correct?'
      progressValue={pageDetails.progressValue}
      >
      <ConfirmBox 
        name='Name'
        value='Mark Collins'
        onClick={() => console.log('clicked')}
      />
      <Divider my={3}/>
      <ConfirmBox 
        name='Date of Birth'
        value='22nd of November 1984'
        onClick={() => console.log('clicked')}
      />
      <Divider my={3}/>
      <ConfirmBox 
        name='Current Address'
        value='123 Smith Street, Collingwood, Victoria, 2015, Australia'
        onClick={() => console.log('clicked')}
      />
      <Divider my={3}/>
      <ConfirmBox 
        name='Drivers License'
        value='NSW: 12344555'
        onClick={() => console.log('clicked')}
      />
      <Divider my={3}/>
       <Button>
          Next
        </Button>
    </PageWrapper>
  )
}

const ConfirmBox = ({
  name,
  value,
  onClick
}: {
  name: string
  value: string
  onClick: () => any
}) => (
  <Box>
  <Flex minWidth='max-content' alignItems='center' gap='2'>
    <Text fontSize='sm' color='gray.400'>{name}</Text>
      <Spacer />
      <ButtonGroup gap='2'>
        <Button onClick={onClick} size='sm' colorScheme='blue' variant='link'>Edit</Button>
      </ButtonGroup>
    </Flex>
  <Text mt={1} maxW='90%' fontSize='md'>{value}</Text>
</Box>
)