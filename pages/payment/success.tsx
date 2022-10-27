import { getNextPageLink, PageName, registrationFlow } from '@/config/flow'
import PageWrapper from '@/components/PageWrapper'
import Link from 'next/link'
import { Heading } from '@chakra-ui/react'

export default function Page() {
  const pageDetails = registrationFlow[PageName.AddBank]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  
  return (
    <PageWrapper>
      <Heading>Payment done</Heading>
      <Heading>Got back to mercant</Heading>
    </PageWrapper>
  )
}
