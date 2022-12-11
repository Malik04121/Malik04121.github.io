import {Box,Flex,Heading, Image,Text} from "@chakra-ui/react"
import GitHubCalendar from "react-github-calendar"


function Stats(){

return(
    <Box bg="#191919" p="2rem" >
      <Heading color="#ec5b53">Statistics</Heading>
      <Box color="white">
      <Flex mt="5%" gap="5%" justifyContent="center" mb="5%" 
      direction={{ base: 'column', md: 'row',lg:'row' }}>
        <Text  ><Image w="350px" src="https://github-readme-stats.vercel.app/api/top-langs?username=malik04121&show_icons=true&locale=en&layout=compact&theme=great-gatsby" alt="malik04121" /></Text>
        <Text mt={{base:"20px",md:"0",lg:"0"}}><Image src="https://github-readme-stats.vercel.app/api?username=malik04121&show_icons=true&locale=en&theme=great-gatsby" alt="malik04121" /></Text>
        </Flex>
         <Box m="auto" w="60%">
         <GitHubCalendar
          username="malik04121"
          blockSize={15}
          blockMargin={5}
          // theme={themename}
          fontSize={16}          
        />
        </Box>
    </Box>
    </Box>
)


}
export default Stats