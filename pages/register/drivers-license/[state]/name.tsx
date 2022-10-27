import Image from 'next/image'
import { useRouter } from 'next/router'


import {
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from '@chakra-ui/react'
import { Formik, Field } from 'formik'
import { registrationFlow, PageName, getNextPageLink } from '@/config/flow'

import PageWrapper from '@/components/PageWrapper'

export default function Page() {
  const router = useRouter()
  const pageDetails = registrationFlow[PageName.DriversLicenseName]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  console.log(nextPageLink)
  return (
    <PageWrapper
      heading='Your name'
      backRoute={pageDetails.previousPage[0]}
      progressValue={10}
      >
      <Formik
          initialValues={{
            firstName: '',
            middleName: '',
            lastName: '',
          }}
          onSubmit={(values) => {
            router.push(nextPageLink)
          }}
        >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit} >
            <VStack spacing={4} align='flex-start'>
              <FormControl isRequired isInvalid={!!errors.firstName && touched.firstName}>
                <FormLabel htmlFor='first-name'>First name </FormLabel>
                <FormHelperText mb={2}>As shown on ID</FormHelperText>
                <Field
                  as={Input}
                  id='firstName'
                  name='firstName'
                  type='text'
                  validate={(value: string) => {
                    let error;

                    // if (value.length < 5) {
                    //   error = 'Password must contain at least 6 characters';
                    // }

                    return error;
                  }}
                />
                <FormErrorMessage>{errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.middleName && touched.middleName}>
                <FormLabel htmlFor='middleName'>Middle name or Initial </FormLabel>
                <FormHelperText mb={2}>Only included of shown on ID</FormHelperText>
                <Field
                  as={Input}
                  id='middleName'
                  name='middleName'
                  type='text'
                  validate={(value: string) => {
                    let error;
                    console.log(value)

                    // if (value === 'hello') {
                      // error = 'Password must contain at least 6 characters';
                    // }

                    return error;
                  }}
                />
                <FormErrorMessage>{errors.middleName}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!!errors.lastName && touched.lastName}>
                <FormLabel htmlFor='last-name'>Last name</FormLabel>
                <FormHelperText mb={2}>As shown on ID.</FormHelperText>
                <Field
                  as={Input}
                  id='lastName'
                  name='lastName'
                  type='text'
                  validate={(value: string) => {
                    let error;

                    // if (value.length < 5) {
                    //   error = 'Password must contain at least 6 characters';
                    // }

                    return error;
                  }}
                />
                <FormErrorMessage>{errors.lastName}</FormErrorMessage>
              </FormControl>
              <Image height={100} width={450}  src='/drivers-license-images/nsw.png' alt='nsw drivers license'/>
              <Button type='submit'>
                Next
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </PageWrapper>
  )
}
