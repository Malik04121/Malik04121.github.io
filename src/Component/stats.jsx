import {Box,Flex,Heading, Image,Text} from "@chakra-ui/react"
import GitHubCalendar from "react-github-calendar"


function Stats(){

return(
    <Box bg="#191919" p="2.5rem"  >
      <Box textAlign="center">
            <Heading size="xl" color="#ec5b53">Statistics</Heading>
        </Box>
      <Box color="white">
      <Flex  gap="5%" justifyContent="center"  p="4%" 
      direction={{ base: 'column', md: 'row',lg:'row' }}>
         
        <Text   mt={{base:"20px",md:"0",lg:"0"}} w={{base:"100%",md:"350px",lg:"30%"}} >
          <Image w="100%" src="https://github-readme-stats.vercel.app/api/top-langs?username=malik04121&show_icons=true&locale=en&layout=compact&theme=great-gatsby" alt="malik04121" /></Text>
        <Text
          mt={{base:"20px",md:"0",lg:"0"}} w={{base:"100%",md:"350px",lg:"35%"}} >
          <Image w="100%"  src="https://github-readme-stats.vercel.app/api?username=malik04121&show_icons=true&locale=en&theme=great-gatsby" alt="malik04121" /></Text>
        </Flex>


        
        <Flex width={{ base: '95%', md: '80%', lg: '70%' }} justifyContent='center' alignItems='center' m='auto' mt={{ base: '10px', md: '20px' }} >
        <GitHubCalendar username="malik04121" year='last' > 
        {/* <ReactToolTip delayShow={20} html />  */}
        </GitHubCalendar>
      </Flex>
        
         {/* <Box m="auto" mb="20px" w="80%"  bg="red">
         <GitHubCalendar
          username="malik04121"
          blockSize={15}
          blockMargin={5}
          width="100%"
          // h="600px"
          responsive={true}
          // theme={themename}
          // fontSize={{base:5,md:15,lg:20}}          
          fontSize={15}
        />
        </Box> */}
    </Box>
    </Box>
)


}
export default Stats