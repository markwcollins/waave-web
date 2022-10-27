import { getNextPageLink, PageName, registrationFlow } from '@/config/flow'
import PageWrapper from '@/components/PageWrapper'
import Link from 'next/link'
import { Heading, Button } from '@chakra-ui/react'

export default function Page() {
  const pageDetails = registrationFlow[PageName.PaymentConfirmationPostSignUp]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  
  return (
    <PageWrapper>
      <Heading>Welcome to Waave</Heading>
      <Heading>Click below to complete your payment</Heading>
      <Heading>Holiday ABC</Heading>
      <Link href={nextPageLink} >
        <Button type='submit' width='100%'>
          Confirm
        </Button>
      </Link>
    </PageWrapper>
  )
}
