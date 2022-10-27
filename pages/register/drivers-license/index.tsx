import Link from 'next/link'
import { ChevronRightIcon} from '@chakra-ui/icons'
import { Text, Box, HStack, Spacer, VStack } from '@chakra-ui/react'
import PageWrapper from '@/components/PageWrapper'

import { states } from '@/config/states'

export default function Page() {
  return (
    <PageWrapper
      heading="What state was you driver's license issued"
      progressValue={20}
      backRoute='/register/choose-id'
      >
      <VStack spacing={4}>
        {states.map(state => (
          <StateButton 
            key={state.id}
            text={state.text}
            onClickLink={state.href}
          />
        ))}
      </VStack>
      </PageWrapper>
  )
}

const StateButton = ({ 
  text, 
  onClickLink 
}: { 
  text:string, 
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
        <Text>{text}</Text>
        <Spacer />
        <Box><ChevronRightIcon w={6} h={6}/></Box>
      </HStack>
    </Link>
  </Box>
)
