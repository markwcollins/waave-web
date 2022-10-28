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
import FormSubmitButton from '@/components/FormNextButton'

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

import { getNextPageLink, PageName, registrationFlow } from "@/config/flow"
import { Router, useRouter } from 'next/router'

interface IPhoneForm {
  phone: string
}

const initialValues: IPhoneForm = {
  phone: '',
}

export default function Page() {
  const router = useRouter()
  const pageDetails = registrationFlow[PageName.EnterPhone]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  const [phoneNumber, setPhoneNumber] = useState<any>()
  
  return (
    <PageWrapper
      heading='Enter your mobile number'
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
          onSubmit={(values, actions) => {
            router.push(nextPageLink)
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
              <FormSubmitButton href={nextPageLink} />
            </VStack>
          </Form>
          )}    
        </Formik>

    </PageWrapper>
  )
}


