import { Button } from '@chakra-ui/react'
import Link from 'next/link'

const FormSubmitButton = ({ 
  text = 'Next',
  href 
}: { 
  text?: string, 
  href?: string
}) => {
  return (
    <>
      <Button type='submit' colorScheme='brand' width='100%'>
        {text}
      </Button>
      {href ? <Link hidden href={href}/> : null}
    </>
  )
};

export default FormSubmitButton