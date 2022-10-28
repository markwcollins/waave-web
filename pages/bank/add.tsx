import { getNextPageLink, PageName, registrationFlow } from '@/config/flow'
import PageWrapper from '@/components/PageWrapper'
import NextButton from '@/components/NextButton'

export default function Page() {
  const pageDetails = registrationFlow[PageName.AddBank]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  
  return (
    <PageWrapper
      heading='Add Bank Account'
      progressValue={pageDetails.progressValue}>
        <p>Info about banking</p>
        <p>Hand off to adatree</p>
      <NextButton href={nextPageLink} />
    </PageWrapper>
  )
}
