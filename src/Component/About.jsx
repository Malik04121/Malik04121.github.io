import { Flex, Heading ,Image,Box,Text, Button, Link, textDecoration} from "@chakra-ui/react"
import {GrMail,GrLinkedin} from "react-icons/gr";
import { Fade } from "react-awesome-reveal";


function About(){

    return(
        <Box id="about"
        bg="#191919" 
        p="2%"
        >
        {/* // bgGradient='linear(to-t, #000000, #111E46)'> */}
        <Box textAlign="center">
        <Heading color="#ec5b53" size="xl" >About</Heading>
        </Box>
        <Fade direction="right" cascade damping={0.2}>
             
            <Box w={{base:"85%",md:"80%",lg:"60%"}} m="auto" border="0px solid white"  p="2%" mt="2rem">
            <Text color="white" textAlign="justify" fontSize={{ base: '16px', md: '19px', lg: '20px' }}>Hi everyone, I am Shahzad Malik from Mumbai, Maharashtra. Currently I am pursuing a Full-Stack Web Development Course from Masai School. I have completed my graduation in Bachelor of Engineering (Mechanical Engineering) from Dr.D.Y. patil college of Engineering,Pune.During B.E I found myself drawn towards the tech world so I started learning Full-Stack Web Development and after that I joined Masai School , Which is a 7-Month long Intensive course with 1200+ hours of coding, DSA and hands-on Industry Relevant Skills.</Text>
            </Box>
            </Fade>
        <Fade direction="left" cascade damping={0.2}>

            <Box w={{base:"85%",md:"45%",lg:"35%"}} m="auto" >
            <Link 
            href="https://www.linkedin.com/in/shehzad-malik/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
            _hover={{textDecoration:"none"}}
          >
            <Button w="100%" bg="#ec5b53" color="white" fontWeight="semibold" fontSize={{ base: '18px', md: '22px', lg: '20px' }}_hover={{color:"#ec5b53",bg:"white",textDecoration:"none"}}>
                Follow on Linkedin &nbsp;<GrLinkedin/>
            </Button>
            </Link>

            </Box>
            </Fade>
        </Box>
    )
}
export default About