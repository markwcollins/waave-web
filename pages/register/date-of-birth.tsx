import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  HStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  Input,
  Button
} from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik';
import PageWrapper from '@/components/PageWrapper';

import { getNextPageLink, PageName, registrationFlow } from "@/config/flow"
import FormSubmitButton from '../../components/FormNextButton';

export default function Page() {
  const router = useRouter()
  const pageDetails = registrationFlow[PageName.DateOfBirth]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  console.log(nextPageLink)
  return (
    <PageWrapper
      heading='Your Date of Birth'
      progressValue={pageDetails.progressValue}
      backRoute={pageDetails.previousPage[0]}
      >
      <Formik
          initialValues={{
            day: null,
            week: null,
            month: null,
          }}
          onSubmit={(values) => {
            router.push(nextPageLink)
          }}
        >
        {({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <HStack spacing={4} align='flex-start'>
            <FormControl isRequired isInvalid={!!errors.day && touched.day}>
              <FormLabel>Day</FormLabel>
              
              <Field
                as={Input}
                id='day'
                name='day'
                placeholder='DD'
                type='number'
                validate={(value: number) => {
                  let error;

                  if (value > 31) {
                    error = 'Between 1 and 31';
                  }

                  return error;
                }}
              />
              <FormErrorMessage>{errors.day}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired >
              <FormLabel>Month</FormLabel>
              <Field
                as={Input}
                onChange={() => console.log(1)}
                placeholder='MM'
                id='month'
                name='month'
                type='number'
              />
              <FormErrorMessage>{errors.day}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired >
              <FormLabel>Year</FormLabel>
        
              <Field
                as={Input}
                id='year'
                placeholder='YYYY'
                name='year'
                type='number'
              />
              <FormErrorMessage>{errors.day }</FormErrorMessage>
            </FormControl>
            </HStack>

            <Text my={4}>Your birthday is 22nd November 1984</Text>

            <FormSubmitButton prerenderLink={nextPageLink} />
          </Form>
        )}
      </Formik>
    </PageWrapper>
  )
}
