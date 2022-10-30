import { useRouter } from 'next/router'
import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  FormErrorMessage,
  Text
} from '@chakra-ui/react'
import { Formik, Field } from 'formik'
import PageWrapper from '@/components/PageWrapper'
import FormikObserver from '@/components/FormikObserver'
import FormSubmitButton from '@/components/FormSubmitButton'

import { getNextPageLink, PageName, registrationFlow } from '@/config/flow'
import { useState } from 'react'
import { IEmailForm } from '@/types'
import { getCustomerIdFromRouter, useUpdateApplication } from '@/utils/state'
// 
const initialValues: IEmailForm = {
  email: undefined,
}

export default function Page() {
  const router = useRouter()
  const customerId = getCustomerIdFromRouter(router)
  
  const [ isLoading, setIsLoading ] = useState(false)
  const pageDetails = registrationFlow[PageName.Email]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  const { update } = useUpdateApplication()
  
  return (
    <PageWrapper
      heading='Let&apos;s start with your email'
      highlightText='email'
      progressValue={pageDetails.progressValue}
      >
      <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            setIsLoading(true)
            try {
              await update(customerId, {  email: values.email })
              router.push(nextPageLink)
            } catch {
              alert('Error!')
            }
          }}
        >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align='flex-start'>
              <FormikObserver<IEmailForm> onChange={(values) => console.log(values)} />
              <FormControl  isRequired isInvalid={!!errors.email && touched.email}>
                <FormLabel htmlFor='email'>Email Address</FormLabel>
                <Field
                  as={Input}
                  id='email'
                  name='email'
                  type='email'
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormSubmitButton href={nextPageLink} isLoading={isLoading}/>
            </VStack>
          </form>
        )}
      </Formik>
    </PageWrapper>
  )
}

