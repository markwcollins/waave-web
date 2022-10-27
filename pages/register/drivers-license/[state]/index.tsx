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
import { states } from '@/config/states'
import PageWrapper from '@/components/PageWrapper'

export default function Page() {
  const router = useRouter()
  const { state } = router.query

  return (
    <PageWrapper
      heading='Your drivers license details'
      backRoute='/register/drivers-license'
      progressValue={10}
      >
      <Formik
          initialValues={{
            licenseNumber: '',
          }}
          onSubmit={(values) => {
            router.push('/register/drivers-license/nsw/details')
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
              <Button type='submit'>
                Next
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </PageWrapper>
  )
}
