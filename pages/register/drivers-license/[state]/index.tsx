import Image from 'next/image'
import { useRouter } from 'next/router'

import {
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Select
} from '@chakra-ui/react'
import { Formik, Field } from 'formik'
import { AustralianStateID, states } from '@/config/states'
import PageWrapper from '@/components/PageWrapper'
import FormSubmitButton from '@/components/FormNextButton'

import { registrationFlow, PageName, getNextPageLink } from '@/config/flow'

interface IEmailDriverLicenseName {
  state: AustralianStateID|null,
  licenseNumber: string
}

const initialValues: IEmailDriverLicenseName = {
  state: null,
  licenseNumber: '',
}

export default function Page() {
  const router = useRouter()
  const { state } = router.query

  const pageDetails = registrationFlow[PageName.DriversLicenseName]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])

  return (
    <PageWrapper
      heading='Your drivers license details'
      backRoute='/register/drivers-license'
      progressValue={pageDetails.progressValue}
      >
      <Formik
          initialValues={{ ...initialValues, state }}
          onSubmit={(values) => {
            router.push(nextPageLink)
          }}
        >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align='flex-start'>
              <FormControl isRequired>
                <FormLabel htmlFor='state'>State</FormLabel>
                <Select placeholder='Select state' value={state}>
                  {states.map(state => (
                    <option key={state.id} value={state.id}>{state.text}</option>
                  ))}
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor='licenseNumber'>License Number</FormLabel>
                <Field
                  as={Input}
                  id='licenseNumber'
                  name='licenseNumber'
                  type='licenseNumber'
                  validate={(value: string) => {
                    let error;

                    // if (check per state) {
                    //   error = 'Password must contain at least 6 characters';
                    // }

                    return error;
                  }}
                />
                <FormErrorMessage>{errors.licenseNumber}</FormErrorMessage>
              </FormControl>
              <Image height={100} width={450}  src='/drivers-license-images/nsw.png' alt='nsw drivers license'/>
              <FormSubmitButton prerenderLink={nextPageLink} />
            </VStack>
          </form>
        )}
      </Formik>
    </PageWrapper>
  )
}
