import {
  HStack, 
  VStack,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Button,
  Select
} from '@chakra-ui/react'
import { useFormik, Formik, Form, Field } from 'formik'
import PageWrapper from '@/components/PageWrapper'
import { useRouter } from 'next/router'
import { registrationFlow, PageName, getNextPageLink, getPreviousPageLink } from '@/config/flow'
import { states } from '@/config/states'
import FormSubmitButton from '@/components/FormNextButton'

export default function Page() {
  const router = useRouter()
  const pageDetails = registrationFlow[PageName.AddAddress]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  const previousPageLink = getPreviousPageLink(pageDetails.previousPage[0])
  
  return (
    <PageWrapper
      heading='Your current residential AddAddress'
      progressValue={pageDetails.progressValue}
      backRoute={previousPageLink}
      >
      <Formik
          initialValues={{
            unit: null,
            streetNumber: null,
            streetName: null,
            streetSuburb: null,
            state: null,
            postCode: null
          }}
          onSubmit={(values) => {
            router.push(nextPageLink)
          }}
        >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={6} align='flex-start'>
              <HStack>
              <FormControl w='40%' isInvalid={!!errors.unit && touched.unit}>
                <FormLabel htmlFor='unit'>Unit</FormLabel>
                <Field
                  as={Input}
                  id='unit'
                  name='unit'
                  type='text'
                />
                <FormErrorMessage>{errors.unit}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!!errors.streetNumber && touched.streetNumber}>
                <FormLabel htmlFor='streetNumber'>Street Number</FormLabel>
                <Field
                  as={Input}
                  id='streetNumber'
                  name='streetNumber'
                  type='text'
                />
                <FormErrorMessage>{errors.streetNumber}</FormErrorMessage>
              </FormControl>
              </HStack>

              <FormControl isRequired isInvalid={!!errors.streetName && touched.streetName}>
                <FormLabel htmlFor='streetName'>Street Name</FormLabel>
                <Field
                  as={Input}
                  id='streetName'
                  name='streetName'
                  type='text'
                />
                <FormErrorMessage>{errors.streetName}</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={!!errors.streetSuburb && touched.streetSuburb}>
                <FormLabel htmlFor='streetSuburb'>Suburb / Town</FormLabel>
                <Field
                  as={Input}
                  id='streetSuburb'
                  name='streetSuburb'
                  type='text'
                />
                <FormErrorMessage>{errors.streetSuburb}</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={!!errors.state && touched.state}>
                <FormLabel htmlFor='state'>State</FormLabel>
                <Select placeholder='Select state'>
                  {states.map(state => (
                    <option key={state.id} value={state.id}>{state.text}</option>
                  ))}
                </Select>
                <FormErrorMessage>{errors.state}</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={!!errors.postCode && touched.postCode}>
                <FormLabel htmlFor='postCode'>Post Code</FormLabel>
                <Field
                  as={Input}
                  id='postCode'
                  name='postCode'
                  type='number'
                />
                <FormErrorMessage>{errors.streetSuburb}</FormErrorMessage>
              </FormControl>

              <FormSubmitButton href={nextPageLink} />
            </VStack>
          </form>
        )}
      </Formik>
    </PageWrapper>
  )
}
