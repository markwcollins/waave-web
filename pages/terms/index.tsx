import { getNextPageLink, PageName, registrationFlow } from '@/config/flow'
import PageWrapper from '@/components/PageWrapper'
import Link from 'next/link'
import { Button, Box, Flex, Center, Divider } from '@chakra-ui/react'

export default function Page() {
  const pageDetails = registrationFlow[PageName.TermsAndConditions]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  
  return (
    <PageWrapper
      heading='Terms and Conditions'
      progressValue={pageDetails.progressValue}>
      <Box height='70vh' width='100%'>
        <iframe width='100%' height='100%' src='https://hello.waave.com/legal/user-agreement/?hide-navigation=true'></iframe>
      </Box>
      <Box position='fixed' bottom={7} right={5} left={5}>
        <Divider mb={3}/>
        <Center>
          <Link href={nextPageLink} >
            <Button type='submit'>
              By continuing I agree to the above
            </Button>
          </Link>
          </Center>
        </Box>

    </PageWrapper>
  )
}
