import { useRouter } from 'next/router'

import {
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Image,
  Select
} from '@chakra-ui/react'
import { Formik, Field } from 'formik'
import { AustralianStateID, states } from '@/config/states'
import PageWrapper from '@/components/PageWrapper'
import FormSubmitButton from '@/components/FormSubmitButton'

import { registrationFlow, PageName, getNextPageLink, getPreviousPageLink } from '@/config/flow'
import { useState } from 'react'
import { IEmailDriverLicenseName } from '@/types'

const initialValues: IEmailDriverLicenseName = {
  state: undefined,
  licenseNumber: undefined,
  cardNumber: undefined
}

export default function Page() {
  const router = useRouter()
  const { state } = router.query
  const [ isLoading, setIsLoading ] = useState(false)
  const pageDetails = registrationFlow[PageName.AddDriversLicenseNumber]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0]).replace('[state]', 'nsw')
  const previousPageLink = getPreviousPageLink(pageDetails.previousPage[0])

  return (
    <PageWrapper
      heading='Your drivers license details'
      highlightText='details'
      backRoute={previousPageLink}
      progressValue={pageDetails.progressValue}
      >
      <Formik
          initialValues={{ ...initialValues, state }}
          onSubmit={(values) => {
            setTimeout(()=>{
              setIsLoading(true)
              router.push(nextPageLink)
            }, 1000)
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
                <FormHelperText mb={2}>Middle left of your license</FormHelperText>
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
              <Image width='100%'  src='/drivers-license-images/nsw.png' alt='nsw drivers license'/>
              
              {state === AustralianStateID.NSW 
              ? <FormControl isRequired>
                <FormLabel htmlFor='cardNumber'>Card Number</FormLabel>
                <FormHelperText mb={2}>Top right of your license</FormHelperText>
                <Field
                  as={Input}
                  id='cardNumber'
                  name='cardNumber'
                  type='cardNumber'
                  validate={(value: string) => {
                    let error;

                    // if (check per state) {
                    //   error = 'Password must contain at least 6 characters';
                    // }

                    return error;
                  }}
                />
                
                <FormErrorMessage>{errors.cardNumber}</FormErrorMessage>
              </FormControl> : null}
              
              <FormSubmitButton href={nextPageLink} isLoading={isLoading}/>
            </VStack>
          </form>
        )}
      </Formik>
    </PageWrapper>
  )
}
