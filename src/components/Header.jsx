import React from 'react'
import {Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerContent,
    DrawerCloseButton,
    DrawerOverlay,
    Button,
    useDisclosure,
    VStack,
    HStack} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import {BiMenuAltLeft} from "react-icons/bi"

const Header = () => {

    const{isOpen,onOpen,onClose}=useDisclosure()

  return <>
  <Button
  pos={'fixed'}
  top={'4'}
  left={'4'}
  zIndex={'overlay'}
  colorScheme='purple'
  p={'0'}
  w={'10'}
  h={'10'}
  borderRadius={"50%"}
  onClick={onOpen}
  >

    <BiMenuAltLeft size={"20"}/>
  </Button>

  <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
    
    <DrawerOverlay>

        <DrawerContent>    
            <DrawerCloseButton/>
            <DrawerHeader>My Play Zone</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={"flex-start"}>
                    <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                        <Link to={'/'}>Home</Link>
                    </Button>

                    <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                        <Link to={'/videos'}>Videos</Link>
                    </Button>

                    <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                        <Link to={'/videos?categories=free'}>Free Videos</Link>
                    </Button>

                    <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                        <Link to={'/upload'}>Upload Videos</Link>
                    </Button>
                </VStack>

                <HStack pos={"absolute"} bottom={'10'} left={'0'} w={"full"} justifyContent={'space-evenly'}>

                    <Button onClick={onClose}  colorScheme='purple'>
                        <Link to={'/login'}>Log In</Link>
                    </Button>

                    <Button onClick={onClose} variant={"outline"}  colorScheme='purple'>
                        <Link to={'/signup'}>Sign Up</Link>
                    </Button>

                </HStack>
            </DrawerBody>
        </DrawerContent>

    </DrawerOverlay>

  </Drawer>
  </>
}

export default Header