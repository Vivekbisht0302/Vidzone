import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  Text
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={["center",'left']}>
            Get connected to me via this WebApp
          </Heading>
          <HStack borderBottom={'1px dotted white'} py={'2'}>
            <Input
              placeholder="Enter Email Here..."
              border={'node'}
              borderRadius={'node'}
              outline={'node'}
            ></Input>
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px dashed white']}
          borderRight={['none', '1px dashed white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO ZONE
          </Heading>
          <Text>By @vivek.bisht </Text>
        </VStack>

        <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>
                Social Media
            </Heading>
            <Button variant={'link'} colorScheme='red'>
                <a href="http://youtude.com" target='blank'>YouTube</a>
            </Button>
            <Button variant={'link'} colorScheme={'blue'}>
            <a target={'black'} href="https://instagram.com">
              Instagram
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://github.com">
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
