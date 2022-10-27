import Link from 'next/link';
import { ChevronRightIcon} from '@chakra-ui/icons'
import { FaRegAddressCard, FaPassport } from 'react-icons/fa'
import { Text, Box, HStack, Spacer, VStack } from '@chakra-ui/react'

import PageWrapper from '@/components/PageWrapper'

export default function Page() {
  return (
    <PageWrapper
      heading='Choose your ID'
      subText='We need at least one of the following documents to verify your ID'
      progressValue={10}
      >
      <VStack spacing={4}>
        <IDButton
          text='Drivers License'
          onClickLink={'/register/drivers-license'}
          icon={<FaRegAddressCard size={28}/>} />
        <IDButton
          text='Passport'
          onClickLink={'/register/passport'}
          icon={<FaPassport size={28}/>} />
      </VStack>
    </PageWrapper>
  )
}

const IDButton = ({ 
  text, 
  icon, 
  onClickLink 
}: { 
  text:string, 
  icon: React.ReactNode,
  onClickLink: string
 }) => (
  <Box
    as='button'
    height='60px'
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
        <Box>
          {icon}
          </Box>
        <Text>{text}</Text>
        <Spacer />
        <Box><ChevronRightIcon w={6} h={6}/></Box>
      </HStack>
    </Link>
  </Box>
)
