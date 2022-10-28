import { useRouter } from 'next/router'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  FormHelperText,
  Input,
  HStack,
  Text,
  Flex,Box
} from '@chakra-ui/react'
import { Formik, Field } from 'formik'
import PageWrapper from '@/components/PageWrapper'
import FormikObserver from '@/components/FormikObserver'
import FormSubmitButton from '@/components/FormNextButton'

interface IDirectDebitForm {
  bsb: number|null
  accountNumber: number|null
}

const initialValues: IDirectDebitForm = {
  bsb: null,
  accountNumber: null
}

import { getNextPageLink, getPreviousPageLink, PageName, registrationFlow } from '@/config/flow'

export default function Page() {
  const router = useRouter()
  const pageDetails = registrationFlow[PageName.AddDirectDebit]
  const previousPageLink = getPreviousPageLink(pageDetails.previousPage[0])
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  
  return (
    <PageWrapper
      heading='Confirm Direct Debit'
      backRoute={previousPageLink}
      progressValue={pageDetails.progressValue}>
        <Box mb={4}>
          <Text>We like to be secure!</Text>
          <Text>Please re-enter your BSB and Account number to confirm the account</Text>
        </Box>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            router.push(nextPageLink)
          }}
        >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align='flex-start'>
              <FormikObserver<IDirectDebitForm> onChange={(values) => console.log(values)} />
              <FormControl  isRequired isInvalid={!!errors.bsb && touched.bsb}>
                <FormLabel htmlFor='bsb'>BSB</FormLabel>
                <FormHelperText mb={2}>Type `302194` below to confirm</FormHelperText>
                <Field
                  as={Input}
                  id='bsb'
                  name='bsb'
                  type='number'
                  validate={(value: number) => {
                    let error;
                    if (value !== 302194) {
                      error = 'does not match'
                    }
                    return error;
                  }}
                />
                <FormErrorMessage>{errors.bsb}</FormErrorMessage>
              </FormControl>
              <FormControl  isRequired isInvalid={!!errors.accountNumber && touched.accountNumber}>
                <FormLabel htmlFor='bsb'>Account Number</FormLabel>
                <FormHelperText  mb={2}>Type `1245758` below to confirm</FormHelperText>
                <Field
                  as={Input}
                  id='accountNumber'
                  name='accountNumber'
                  type='number'
                  validate={(value: number) => {
                    let error;
                    if (value !== 1245758) {
                      error = 'does not match'
                    }
                    return error;
                  }}
                />
                <FormErrorMessage>{errors.accountNumber}</FormErrorMessage>
              </FormControl>
              <FormSubmitButton href={nextPageLink} />
            </VStack>
          </form>
        )}
      </Formik>
    </PageWrapper>
  )
}
