import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  HStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  Input,
  Button
} from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
import PageWrapper from '@/components/PageWrapper'

import { getNextPageLink, getPreviousPageLink, PageName, registrationFlow } from "@/config/flow"
import FormSubmitButton from '@/components/FormSubmitButton'
import { useState } from 'react'
import FormikObserver from '@/components/FormikObserver'
import { useCallback } from 'react'
import { IDateOfBirthForm } from '@/types'

const initialValues: IDateOfBirthForm = {
  day: undefined,
  month: undefined,
  year: undefined
}

export default function Page() {
  const router = useRouter()
  const { customerId } = router.query
  const [ isLoading, setIsLoading ] = useState(false)
  const [ dateFormatted, setDateFormatted ] = useState<string>()

  // const { }

  const determineDateFormated = useCallback((values: IDateOfBirthForm) => {
    if (values.day && values.month && values.year) {
      const date = new Date(values.year, values.month, values.day)
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      {/* @ts-ignore */}
      const format = date.toLocaleDateString("en-AU", options)
      setDateFormatted(format)
    }
  }, [ setDateFormatted ])

  const pageDetails = registrationFlow[PageName.AddDateOfBirth]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  const previousPageLink = getPreviousPageLink(pageDetails.previousPage[0])

  return (
    <PageWrapper
      heading='Your date of birth'
      highlightText='date of birth'
      progressValue={pageDetails.progressValue}
      backRoute={previousPageLink}
      >
      <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            setIsLoading(true)
            setTimeout(() => {
              router.push(nextPageLink)
            }, 1000)
          }}
        >
        {({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <FormikObserver<IDateOfBirthForm> onChange={(values) =>  determineDateFormated(values)} />
            <HStack spacing={4} align='flex-start'  mb={4}>
            <FormControl isRequired isInvalid={!!errors.day && touched.day}>
              <FormLabel>Day</FormLabel>
              <Field
                as={Input}
                id='day'
                name='day'
                placeholder='DD'
                type='number'
                validate={(value: number) => {
                  let error
                  if (value > 31) {
                    error = 'Between 1 and 31'
                  }
                  return error
                }}
              />
              <FormErrorMessage>{errors.day}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.month && touched.month} >
              <FormLabel>Month</FormLabel>
              <Field
                as={Input}
                placeholder='MM'
                id='month'
                name='month'
                type='number'
                validate={(value: number) => {
                  let error
                  if (value < 0 || value > 12 ) {
                    error = 'Between 1 and 12'
                  }
                  return error
                }}
              />
              <FormErrorMessage>{errors.month}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.year && touched.year} >
              <FormLabel>Year</FormLabel>
              <Field
                as={Input}
                id='year'
                placeholder='YYYY'
                name='year'
                type='number'
                validate={(value: number) => {
                  let error
                  if (value < 1900 || value > 2020 ) {
                    error = 'Age seems a bit off'
                  }
                  return error
                }}
              />
              <FormErrorMessage>{errors.year}</FormErrorMessage>
            </FormControl>
            </HStack>

            {dateFormatted ? <Text mb={4}>You were born on {dateFormatted}</Text> : null}


            <FormSubmitButton href={nextPageLink} isLoading={isLoading}/>
          </Form>
        )}
      </Formik>
    </PageWrapper>
  )
}
