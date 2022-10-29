import { Button } from '@chakra-ui/react'
import Link from 'next/link'

const FormSubmitButton = ({ 
  text = 'Next',
  isLoading = false,
  href 
}: { 
  text?: string, 
  isLoading?: boolean
  href?: string
}) => {
  return (
    <>
      <Button type='submit' isLoading={isLoading} colorScheme='brand' width='100%'>
        {text}
      </Button>
      {href ? <Link href={href}/> : null}
      {/* for prefetch */}
    </>
  )
};

export default FormSubmitButton