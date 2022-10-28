import React from 'react'
import { useFormikContext, Formik, Form, Field } from 'formik'
import { Input } from '@chakra-ui/react'
import PageWrapper from '@/components/PageWrapper'
import { useRouter } from 'next/router'
import { getNextPageLink, PageName, registrationFlow } from '@/config/flow'

export default function Page() {
  const router = useRouter()
  const pageDetails = registrationFlow[PageName.EnterOTP]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  
  return (
    <PageWrapper heading='Enter your phone number'>
      <TwoFactorVerificationForm onSubmit={() => router.push(nextPageLink)}/>
    </PageWrapper>
  )
}

interface IToken {
  token: string
}

const initialValues: IToken = {
  token: ''
}

const AutoSubmitToken = () => {
  // Grab values and submitForm from context
  const { values, submitForm } = useFormikContext<IToken>()
  React.useEffect(() => {
    // Submit the form imperatively as an effect as soon as form values.token are 6 digits long
    if (values.token.length === 6) {
      submitForm()
    }
  }, [values, submitForm])
  return null
}

const TwoFactorVerificationForm = ({ 
  onSubmit
}: {
  onSubmit: () => any
}) => (
  <div>
    <p>Please enter the 6 digit code sent to your device</p>
    <Formik
      initialValues={initialValues}
      validate={values => {
        const errors = {} as any
        if (values.token.length < 5) {
          errors.token = 'Invalid code. Too short.'
        }
        return errors
      }}
      onSubmit={(values, actions) => {
        console.log(1)
        onSubmit()
      }}
    >
      <Form>
        <Field name='token' type='tel' as={Input}/>
        <AutoSubmitToken />
      </Form>
    </Formik>
    <p>Resend it</p>
    <p>Change number</p>
  </div>
)