



import { Button } from '@chakra-ui/react'
import Link from 'next/link'

const NextButton = ({ 
  text = 'Next',
  href 
}: { 
  text?: string, 
  href: string
}) => {
  return (
    <Link href={href} >
      <Button type='submit' colorScheme='linkedin' width='100%'>
        {text}
      </Button>
    </Link>
  )
};

export default NextButton