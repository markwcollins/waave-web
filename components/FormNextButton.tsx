import { Button } from '@chakra-ui/react'
import Link from 'next/link'

const FormSubmitButton = ({ 
  text = 'Next',
  prerenderLink 
}: { 
  text?: string, 
  prerenderLink?: string
}) => {
  return (
    <>
      <Button type='submit' width='100%'>
        {text}
      </Button>
      {prerenderLink ? <Link hidden href={prerenderLink}/> : null}
    </>
  )
};

export default FormSubmitButton