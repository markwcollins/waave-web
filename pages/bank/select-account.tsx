import { getPreviousPageLink, PageName, registrationFlow } from '@/config/flow'
import PageWrapper from '@/components/PageWrapper'
import Link from 'next/link'
import { ChevronRightIcon} from '@chakra-ui/icons'
import { Text, Box, HStack, Spacer, VStack } from '@chakra-ui/react'

export default function Page() {
  const pageDetails = registrationFlow[PageName.SelectBankAccount]
  const previousPageLink = getPreviousPageLink(pageDetails.previousPage[0])
  
  return (
    <PageWrapper
      heading='Select the bank account to make this payment'
      backRoute={previousPageLink}
      progressValue={pageDetails.progressValue}>
      <VStack spacing={4}>
        <BankAccountButton
          text='ACME Account'
          balance='$5000'
          onClickLink={'/register/drivers-license'}/>
        <BankAccountButton
          text='ABC Account'
          balance='$5000'
          onClickLink={'/register/passport'} />
      </VStack>
    </PageWrapper>
  )
}


const BankAccountButton = ({ 
  text, 
  balance,
  onClickLink 
}: { 
  text:string, 
  balance:string, 
  onClickLink: string
 }) => (
  <Box
    as='button'
    height='75px'
    width='100%'
    lineHeight='1.2'
    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
    border='none'
    px='10px'
    borderRadius='4px'
    bg='#f5f6f7'
    color='#4b4f56'
    _hover={{ bg: '#ebedf0' }}
    _active={{
      bg: '#dddfe2',
      transform: 'scale(0.98)',
      borderColor: '#bec3c9',
    }}
    textAlign='left'
    _focus={{
      boxShadow:
        '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
    }}
  >
    <Link href={onClickLink}>
      <HStack>
        <VStack align='flex-start'>
          <Text fontWeight='bold'>{text}</Text>
          <Text>{balance} available</Text>
        </VStack>
        <Spacer />
        <Box><ChevronRightIcon w={6} h={6}/></Box>
      </HStack>
    </Link>
  </Box>
)
