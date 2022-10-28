import { getNextPageLink, PageName, registrationFlow } from '@/config/flow'
import PageWrapper from '@/components/PageWrapper'
import Link from 'next/link'
import { Text, Button } from '@chakra-ui/react'

export default function Page() {
  const pageDetails = registrationFlow[PageName.PaymentConfirmationPostSignUp]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  
  return (
    <PageWrapper heading='Welcome To Waave' highlightText='Waave'>
      <Text>Page bot done.. Show information about the product e.g., $$$, name, image</Text>
      <Text>Click below to complete your payment</Text>
      <Link href={nextPageLink} >
        <Button type='submit' width='100%'>
          Confirm
        </Button>
      </Link>
    </PageWrapper>
  )
}
