import Link from 'next/link'
import { useState } from "react"
import { useFormikContext, Formik, Form, Field } from 'formik'
import { FormErrorMessage, FormControl } from '@chakra-ui/react'
import PhoneInput from 'react-phone-number-input/input'
import {
  Input,
  VStack,
} from '@chakra-ui/react'
import PageWrapper from '@/components/PageWrapper'
import FormSubmitButton from '@/components/FormSubmitButton'


import { getNextPageLink, PageName, registrationFlow } from "@/config/flow"
import { Router, useRouter } from 'next/router'
import { useInsertApplication } from '../../utils/state'
import { IPhoneForm } from '../../types'


const initialValues: IPhoneForm = {
  phone: undefined,
}

export default function Page() {
  const router = useRouter()
  const [ isLoading, setIsLoading ] = useState(false)
  const pageDetails = registrationFlow[PageName.EnterPhone]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  const { insert } = useInsertApplication()
  
  return (
    <PageWrapper
      heading='Enter your mobile number'
      highlightText='mobile number'
      hideProduct
      subText='We will send you an code to confirm the number'
      >
        
        {/* <Input 
          country="AU"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(value ) => setPhoneNumber(value)}
          as={PhoneInput}
        /> */}

        <Formik
          initialValues={initialValues}
          validate={values => {
            const errors = {} as any
            
            if (values.phone !== '0423590966') {
              errors.phone = 'Must use Australian Phone'
            } 
            return errors
          }}
          onSubmit={ async (values, actions) => {
            setIsLoading(true)
            try {
              await insert()
              router.push(nextPageLink)
            } catch {
              alert('Error!')
              setIsLoading(false)
            }
          }}
          >
          {({ handleSubmit, errors, touched, values, handleChange }) => (
          <Form>
            <VStack spacing={4} align='flex-start'>
              <FormControl isInvalid={!!errors.phone && touched.phone}>
                <Field
                  as={Input}
                  id='phone'
                  name='phone'
                  type='tel'
                />
                {/* <NumberInput 
                  onChange={handleChange}
                  value={values.phone}>
                  <NumberInputField />
                </NumberInput> */}
                <FormErrorMessage>{errors.phone}</FormErrorMessage>
              </FormControl>
              <FormSubmitButton href={nextPageLink} isLoading={isLoading} />
            </VStack>
          </Form>
          )}    
        </Formik>
    </PageWrapper>
  )
}


