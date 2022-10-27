import Link from 'next/link';
import { Container, VStack, VisuallyHidden} from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Checkbox
} from '@chakra-ui/react'
import { useFormik, Formik, Form, Field } from 'formik';
import PageWrapper from '@/components/PageWrapper';
import { useRouter } from 'next/router';
import { getNextPageLink, PageName, registrationFlow } from "@/config/flow"

export default function Page() {
  const router = useRouter()
  const pageDetails = registrationFlow[PageName.Email]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  
  return (
    <PageWrapper
      heading='Lets start with your email'
      progressValue={10}
      >
      <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={(values) => {
            router.push(nextPageLink)
          }}
        >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align='flex-start'>
              <FormControl>
                <FormLabel htmlFor='email'>Email Address</FormLabel>
                <Field
                  as={Input}
                  id='email'
                  name='email'
                  type='email'
                />
              </FormControl>
              <Button type='submit'>
                Next
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
      <Link hidden href={nextPageLink}/> 
    </PageWrapper>
  )
}
