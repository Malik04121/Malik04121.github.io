import { Flex,Box,Text,Image, Button, Heading, Link } from "@chakra-ui/react"
import profile_pic from "../profile_pic.png"
import resume from "../assets/Shahzad_Malik_Resume.pdf"


function Home(){

return(
    <Flex bg="#CCD9D9" color="black"
    //   bgGradient='linear(to-t, #000000, #111E46)'
      id="home" alignItems="center" justifyContent="center"  gap="8%" p="10%"
      direction={{ base: 'column-reverse', md: 'row-reverse',lg:'row' }} > 
        <Box w={{base:"90%",md:"50%",lg:"50%"}} mt={["10%","0%","0%"]}
        color="#002d5b" 
        >
         <Heading as="h2" fontSize={["3em","2.5em","3em"]} color="#ec5b53" >Hello, I'm</Heading>
         <Heading as="h1" fontSize={["2em","4.5em"]} color="#ec5b53"  >Shahzad Malik</Heading>
         <Heading as="h2" mt="3%" fontSize={["1.5em","2.5em"]}  >Full Stack Web Developer</Heading>
         <Text color="black" mt="8%" fontSize={["md","md","xl"]}>I love to build website using the latest frond-end and backend technologies.</Text>
         {/* <Button w="300px" mt="5vh"> */}
            <Link href={resume}   target="_blank" download
            
            
            ><Button bg="#ec5b53" color="white" fontSize="2xl" w="40%" mt="2rem" h="50px" textAlign="center" alignItems="center"
            
            >Resume</Button></Link>
            {/* </Button> */}
         
        </Box>
        <Image  borderRadius='100%' boxSize={["200px","400px"]} src={profile_pic}></Image>
    </Flex>
)
}
export {Home}