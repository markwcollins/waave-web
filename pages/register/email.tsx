import { useRouter } from 'next/router'
import {
  FormControl,
  FormLabel,
  VStack,
  Input,
} from '@chakra-ui/react'
import { Formik, Field } from 'formik'
import PageWrapper from '@/components/PageWrapper'
import FormikObserver from '@/components/FormikObserver'
import FormSubmitButton from '@/components/FormNextButton'

import { getNextPageLink, PageName, registrationFlow } from "@/config/flow"

interface IEmailForm {
  email: string
}

const initialValues: IEmailForm = {
  email: '',
}

export default function Page() {
  const router = useRouter()
  const pageDetails = registrationFlow[PageName.Email]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  
  return (
    <PageWrapper
      heading='Lets start with your email'
      progressValue={pageDetails.progressValue}
      >
      <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            router.push(nextPageLink)
          }}
        >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align='flex-start'>
              <FormikObserver<IEmailForm> onChange={(values) => console.log(values)} />
              <FormControl>
                <FormLabel htmlFor='email'>Email Address</FormLabel>
                <Field
                  as={Input}
                  id='email'
                  name='email'
                  type='email'
                />
              </FormControl>
              <FormSubmitButton prerenderLink={nextPageLink} />
            </VStack>
          </form>
        )}
      </Formik>
    </PageWrapper>
  )
}
