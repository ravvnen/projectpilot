'use client'
import { FC, useState } from 'react'
import {
  Button,
  Heading,
  Flex,
  Input,
  Container,
  Box,
} from '@chakra-ui/react'

import { FormHelperText } from "@chakra-ui/form-control";
import {InputRightElement, InputGroup} from "@chakra-ui/input";
import {FormControl, FormLabel} from "@chakra-ui/form-control";
const Form1: FC = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Container maxW="md" centerContent>
      <Box
        p={8}
        mt={10}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        w="100%"
      >
        <Heading textAlign="center" fontWeight="normal" mb="6">
          User Registration
        </Heading>
        <Flex mb="4">
          <FormControl mr="2">
            <FormLabel htmlFor="first-name" fontWeight="normal">
              First name
            </FormLabel>
            <Input id="first-name" placeholder="First name" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="last-name" fontWeight="normal">
              Last name
            </FormLabel>
            <Input id="last-name" placeholder="Last name" />
          </FormControl>
        </Flex>
        <FormControl mb="4">
          <FormLabel htmlFor="email" fontWeight="normal">
            Email address
          </FormLabel>
          <Input id="email" type="email" />
          <FormHelperText>We&apos;ll never share your email.</FormHelperText>
        </FormControl>
        <FormControl mb="4">
          <FormLabel htmlFor="password" fontWeight="normal">
            Password
          </FormLabel>
          <InputGroup>
            <Input
              pr="8.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
            />
           <Button h="2.5rem" size="md" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
          </InputGroup>
        </FormControl>
      </Box>
    </Container>
  )
}

export default Form1
