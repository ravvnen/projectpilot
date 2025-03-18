import { useColorModeValue } from '@/components/ui/color-mode'
import {
  Box,
  Input,
  Button,
  Heading,
  Text,
  Stack,
  Checkbox, VStack
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import {FormControl, FormLabel} from "@chakra-ui/form-control";
import Demo from "@/components/HoverCard";
export default function SimpleCard() {
  const navigate = useNavigate();
  return (
    <VStack
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        gap={8}
        mx={'auto'}
        maxW={'lg'}
        py={12}
        px={6}>
        <Stack gap={2} align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to start your <Text as="span" color={'blue.400'}>healthy journey</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack gap={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email"/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password"/>
              <Checkbox.Root>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Remember me?</Checkbox.Label>
              </Checkbox.Root>
            </FormControl>
            <Stack gap={4}>
              <Stack
                direction={{base: 'column', sm: 'row'}}
                align={'start'}
                justify={'space-between'}>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={() => navigate('/dashboard')}
                >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Box mt={4} mb={8}>
        <Text textAlign="center" mb={2}>Powered by</Text>
        <Demo />
      </Box>

    </VStack>
  )
}