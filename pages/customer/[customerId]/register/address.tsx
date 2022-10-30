import {
  HStack, 
  VStack,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Button,
  Select
} from '@chakra-ui/react'
import { useFormik, Formik, Form, Field } from 'formik'
import PageWrapper from '@/components/PageWrapper'
import { useRouter } from 'next/router'
import { registrationFlow, PageName, getNextPageLink, getPreviousPageLink } from '@/config/flow'
import { states } from '@/config/states'
import FormSubmitButton from '@/components/FormSubmitButton'
import { ChangeEventHandler, useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce';

const getAddress = async ({ 
  text,
  countrycode = 'au' 
}: { 
  text: string,
  countrycode?: string 
}) => {
  
  const requestOptions = {
    method: 'GET',
  }
  try {
    const res = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&countrycode=${countrycode}&apiKey=ad56aeec273448d0a2e2d7d883940a77`, requestOptions)
    const data = await res.json()
    return data.features
  } catch (e) {
    console.log(e)
  }
}

import {
  Box,
} from '@chakra-ui/react'

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'

export default function Page() {
  const router = useRouter()
  const [ searchText, setSearchText ] = useState('')
  const [ addressOptions, setAddressOptions ] = useState<any[]>()
  const pageDetails = registrationFlow[PageName.AddAddress]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])
  const previousPageLink = getPreviousPageLink(pageDetails.previousPage[0])

  const getAddressCallback = useDebouncedCallback(
    async (searchText: string) => {
      const data = await getAddress({ text: searchText })
      setAddressOptions(data);
    },
    // delay in ms
    100
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value
    setSearchText(searchText)
    getAddressCallback(searchText)
  }
  
  return (
    <PageWrapper
      heading='Your current residential address'
      highlightText='address'
      progressValue={pageDetails.progressValue}
      backRoute={previousPageLink}
      >
        
      {/* <FormControl> */}
        {/* <FormLabel htmlFor='searchText'>Search</FormLabel>
        <Input
          value={searchText}
          onChange={handleSearchChange}
          id='searchText'
          name='searchText'
          type='text'
        />
      </FormControl>
      <Box>
        {addressOptions?.map(address => (
          <Button colorScheme='gray' variant='ghost' key={address.properties.address_line1}>{address.properties.formatted}</Button>
        ))}
      </Box> */}

      <Formik
          initialValues={{
            searchText: '',
            unit: undefined,
            streetNumber: undefined,
            streetName: undefined,
            streetSuburb: undefined,
            state: undefined,
            postCode: undefined
          }}
          onSubmit={(values) => {
            router.push(nextPageLink)
          }}
        >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={6} align='flex-start'>

            <Popover placement='bottom' isOpen={!!addressOptions} >
              <PopoverTrigger>
                  <FormControl isRequired isInvalid={!!errors.streetName && touched.streetName}>
                    <FormLabel htmlFor='streetName'>Address Line 1</FormLabel>

                    <Field
                      as={Input}
                      // onChange={handleSearchChange}
                      id='streetName'
                      name='streetName'
                      type='text'
                    />

                    <FormErrorMessage>{errors.streetName}</FormErrorMessage>
                  </FormControl>
                  </PopoverTrigger>
                <PopoverContent>
                  <PopoverBody>
                  {addressOptions?.map(address => (
                        <Button colorScheme='gray' variant='ghost' key={address.properties.address_line1}>{address.properties.formatted}</Button>
                      ))}
                  </PopoverBody>
                </PopoverContent>
              </Popover>

              <FormControl  isInvalid={!!errors.unit && touched.unit}>
                <FormLabel htmlFor='unit'>Address Line 2</FormLabel>
                <Field
                  as={Input}
                  id='unit'
                  name='unit'
                  type='text'
                />
                <FormErrorMessage>{errors.unit}</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={!!errors.streetSuburb && touched.streetSuburb}>
                <FormLabel htmlFor='streetSuburb'>Suburb / Town</FormLabel>
                <Field
                  as={Input}
                  id='streetSuburb'
                  name='streetSuburb'
                  type='text'
                />
                <FormErrorMessage>{errors.streetSuburb}</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={!!errors.postCode && touched.postCode}>
                <FormLabel htmlFor='postCode'>Post Code</FormLabel>
                <Field
                  as={Input}
                  id='postCode'
                  name='postCode'
                  type='number'
                />
                <FormErrorMessage>{errors.streetSuburb}</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={!!errors.state && touched.state}>
                <FormLabel htmlFor='state'>State</FormLabel>
                <Select placeholder='Select state'>
                  {states.map(state => (
                    <option key={state.id} value={state.id}>{state.text}</option>
                  ))}
                </Select>
                <FormErrorMessage>{errors.state}</FormErrorMessage>
              </FormControl>

              

              <FormSubmitButton href={nextPageLink} />
            </VStack>
          </form>
        )}
      </Formik>
    </PageWrapper>
  )
}