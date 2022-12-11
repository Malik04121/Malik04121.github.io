import { Box, Button, Flex, IconButton, Image, Img, Switch} from "@chakra-ui/react"
// import Skill from "../Skills"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
// import { Link as ReachLink } from "@reach/router"
import {Link} from "react-scroll"
import logo from "../../assets/Logo3_trans.png"
import { useState } from "react"

import resume from "../../assets/Shahzad_Malik_Resume.pdf"


function Navbar(){
    const [display,setDisplay]=useState("none")

return (

    <Flex h="100px" justifyContent="space-between"  position="sticky" top="0" bg="black"
    >

       <Link smooth={true} offset={-100} duration={300} to="home"> <Image h="100px" w="200px"  src={logo}/></Link>


        <Flex p="25px" display={{base:"none",md:"none",lg:"flex"}}>
            <Button color="white" bg="none" fontSize="3xl" border="none"  colorScheme='teal' variant='link'  mr="50px" ><Link  
           //   activeClass="active"
            //   spy={true}
           smooth={true} offset={-100} duration={300} to="home" >Home</Link></Button>
            <Button  mr="50px" color="white" bg="none" fontSize="3xl" border="none"  variant='link'>
            <Link  
           //   activeClass="active"
            //   spy={true}
            // fontSize="120px"
           smooth={true} offset={-100} duration={300} to="about" >About</Link></Button>
            <Button  mr="50px" color="white" bg="none" fontSize="3xl" border="none"  variant='link'><Link  
           //   activeClass="active"
            //   spy={true}
           smooth={true} offset={-100} duration={300} to="skills" >Skills</Link></Button>
            <Button  color="white" bg="none" fontSize="3xl" border="none"  variant='link' mr="50px"><Link  
           //   activeClass="active"
            //   spy={true}
           smooth={true} offset={-100} duration={300} to="project" >Projects</Link></Button>
            <Button  mr="50px" color="white" bg="none" fontSize="3xl" border="none"  variant='link'><Link  
           //   activeClass="active"
            //   spy={true}
           smooth={true} offset={-100} duration={300} to="contact" >Contact</Link></Button>
            {/* <Button w="80px" mr="50px">DARK THEME</Button> */}
        </Flex>

        <IconButton
          aria-label="Open Menu"
          size="xl"
          m="5%"
          fontSize="40px"
          w="50px"
          icon={
            <HamburgerIcon />
          }
          onClick={() => setDisplay('flex')}
          display={{base:"flex",md:"flex",lg:"none"}}
        />

       <Flex
        w='35vw'
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="50vh"
        pos="fixed"
        top="0"
        right="0"
        bg="#191919"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end" mb="15px">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            bg="red"
            size="sm"
            icon={
              <CloseIcon />
            }
            onClick={() => setDisplay('none')}
          />
        </Flex>
        <Flex
          flexDir="column"
          align="center"
          gap="20px"

        >
            
                <Link to="home"  >
                    <Button >Home</Button>
                </Link> 
                <Link to="about" >
                    <Button >About</Button>
                </Link> 
                <Link to="skill" >
                    <Button >Skills </Button>
                </Link> 
                <Link to="project" >
                    <Button >Project</Button>
                </Link> 
                <Link to="contact" >
                    <Button >Contact</Button>
                </Link> 
                <Link href={resume}   target="_blank" download >
                    <Button  bg="#ec5b53">Resume</Button>
                </Link>
            
        

       </Flex>
      </Flex>
        
     </Flex>
)
}
export {Navbar}