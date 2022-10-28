import { getNextPageLink, PageName, registrationFlow } from '@/config/flow'
import PageWrapper from '@/components/PageWrapper'
import NextButton from '@/components/NextButton'

export default function Page() {
  const pageDetails = registrationFlow[PageName.AddBank]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  
  return (
    <PageWrapper
      heading='Link your bank'
      highlightText='bank'
      progressValue={pageDetails.progressValue}>
      <p>TBC.. contains info about adatree</p>
      <NextButton href={nextPageLink} />
    </PageWrapper>
  )
}
