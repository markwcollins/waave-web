import { getNextPageLink, PageName, registrationFlow } from '@/config/flow'
import PageWrapper from '@/components/PageWrapper'
import Link from 'next/link'
import { Button } from '@chakra-ui/react'

export default function Page() {
  const pageDetails = registrationFlow[PageName.AddBank]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  
  return (
    <PageWrapper
      heading='Add Bank Account'
      progressValue={pageDetails.progressValue}>
      <Link href={nextPageLink} >
        <Button type='submit' width='100%'>
          Next
        </Button>
      </Link>
    </PageWrapper>
  )
}
