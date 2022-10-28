import Link from 'next/link'
import { useState } from "react"
import PhoneInput from 'react-phone-number-input/input'
import {
  Input,
  Button,
} from '@chakra-ui/react'
import PageWrapper from '@/components/PageWrapper'

import { getNextPageLink, PageName, registrationFlow } from "@/config/flow"

interface IPhoneForm {
  phone: string
}

const initialValues: IPhoneForm = {
  phone: '',
}

export default function Page() {
  const pageDetails = registrationFlow[PageName.EnterPhone]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  const [phoneNumber, setPhoneNumber] = useState<any>()
  
  return (
    <PageWrapper
      heading='Enter your mobile number'
      subText='We will send you an code to confirm the number'
      >
        <Input 
          country="AU"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(value ) => setPhoneNumber(value)}
          as={PhoneInput}
        />
        <Link href={nextPageLink} >
          <Button type='submit' width='100%' mt={5}>
            Get code
          </Button>
        </Link>
      
    </PageWrapper>
  )
}

