import { Box, Button, Flex, IconButton, Image, Img, Switch, Text} from "@chakra-ui/react"
// import Skill from "../Skills"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
// import { Link as ReachLink } from "@reach/router"
import {Link} from "react-scroll"
import logo from "../../assets/portLogo2-removebg2.png"
import { useEffect, useState } from "react"

import resume from "../../assets/Shahzad_Malik_Resume.pdf"


function Navbar(){
    const [display,setDisplay]=useState("none")


return (

    <Flex h="80px" justifyContent="space-between" alignItems="center" position="sticky" top="0" bg="black" zIndex="1000"
    >


        <Box   alignItems="center"
         w={{base:"100px",md:"150px",lg:"200px"}} 
         ml="10%"
         h="60%"
        //  bg="red"
        >
       <Link smooth={true}  duration={300}  to="home"> 
       
          <Flex  alignItems="center" gap="5px" h="90%" _hover={{ cursor: "pointer" }} >
            <Box bg="#CCD9D9" display="flex"  alignItems="center" borderRadius="5px"
  justifyContent="center" w="70px" h="100%" p="5%"><Text fontSize="xl" color="#ec5b53" as="b">SM</Text> </Box>
            <Text color="white" fontSize="xl" fontFamily="Playfair Display" as="b" fontStyle="italic">Portfolio</Text>
          </Flex>
          </Link>

         {/* <Image ml="20px" w="100%" h="100%" src={logo}/> */}
        </Box>


        <Flex p="25px" display={{base:"none",md:"none",lg:"flex"}}>
            <Button color="white" bg="none" fontSize="2xl" border="none"  colorScheme='teal' variant='link'  mr="50px" ><Link  
           //   activeClass="active"
            //   spy={true}
           smooth={true} offset={-100} duration={300} to="home" >Home</Link></Button>
            <Button  mr="50px" color="white" bg="none" fontSize="2xl" border="none"  variant='link'>
            <Link  
           //   activeClass="active"
            //   spy={true}
            // fontSize="120px"
           smooth={true} offset={-100} duration={300} to="about" >About</Link></Button>
            <Button  mr="50px" color="white" bg="none" fontSize="2xl" border="none"  variant='link'><Link  
           //   activeClass="active"
            //   spy={true}
           smooth={true} offset={-100} duration={300} to="skills" >Skills</Link></Button>
            <Button  color="white" bg="none" fontSize="2xl" border="none"  variant='link' mr="50px"><Link  
           //   activeClass="active"
            //   spy={true}
           smooth={true} offset={-100} duration={300} to="project" >Projects</Link></Button>
            <Button  mr="50px" color="white" bg="none" fontSize="2xl" border="none"  variant='link'><Link  
           //   activeClass="active"
            //   spy={true}
           smooth={true} offset={-100} duration={300} to="contact" >Contact</Link></Button>
           <Button  mr="50px" color="white" bg="none" fontSize="2xl" border="none"  variant='link' onClick={()=>window.open("https://drive.google.com/file/d/1e2QT4Cq4lxy0TopvVhVvWopNOtmIvQ1J/view?usp=sharing","_blank") }><a 
           //   activeClass="active"
             href={resume} target="_blank" download="fw20_1215-Shahzad-Malik-Resume" >Resume</a></Button>
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
        w='45vw'
        
        display={display}
        bgColor="gray.50"
        zIndex={20}
        // h="65vh"
        pb="40px"
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
            
                <Link to="home" >
                    <Button  >Home</Button>
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
                {/* <Link href={resume}  target="_blank"> */}
                    <Button onClick={()=>window.open("https://drive.google.com/file/d/1e2QT4Cq4lxy0TopvVhVvWopNOtmIvQ1J/view?usp=sharing","_blank") }  bg="#ec5b53"><a href={resume}  target="_blank" download="fw20_1215-Shahzad-Malik-Resume">Resume</a></Button>
                {/* </Link> */}
            
        

       </Flex>
      </Flex>
        
     </Flex>
)
}
export {Navbar}