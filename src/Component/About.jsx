import { Flex, Heading ,Image,Box,Text} from "@chakra-ui/react"


function About(){

    return(
        <Box id="about"
        bg="#191919" 
        p="2%">
        {/* // bgGradient='linear(to-t, #000000, #111E46)'> */}
            
        <Heading color="#ec5b53"  >About</Heading>

        <Flex p="2%" direction={{ base: 'column', md: 'column',lg:'row' }}>
            <Box w={{base:"100%",md:"100%",lg:"50%"}}>
            <Image 
          src="https://www.ravishukla.me/static/media/home-main.359935c39288e92d4dba5c9f2445b91d.svg"
        //    h="50%"
           h={{base:"300",md:"300",lg:"500"}}
           w="100%"
          alt="img"
        />
            
            </Box>
            <Box boxShadow="2xl" border="3px solid white" bg="black" w={{base:"100%",md:"100%",lg:"40%"}} h="60%" p="3%" >
                <Text color="white" fontSize={{ base: '14px', md: '17px', lg: '22px' }}>Hi everyone, I am Shahzad Malik from Mumbai, Maharashtra. Currently I am pursuing a Full-Stack Web Development Course from Masai School. I have completed my graduation in Bachelor of Engineering (Mechanical Engineering) from Dr.D.Y. patil college of Engineering,Pune.During B.E I found myself drawn towards the tech world so I started learning Full-Stack Web Development and after that I joined Masai School , Which is a 7-Month long Intensive course with 1200+ hours of coding, DSA and hands-on Industry Relevant Skills.</Text>
            </Box>
        </Flex>
        </Box>
    )
}
export default About