import { Box, Flex, Heading, Img,Text,Link, Image } from "@chakra-ui/react"
import { FaPhoneAlt,FaGithub } from "react-icons/fa";
import { FiExternalLink} from "react-icons/fi";


import zara from "../assets/project/zaraclone.jpg"
import clockify from "../assets/project/clockify.jpg"
import Hubspot from "../assets/project/hubspot.jpg"
import rentomojo from "../assets/project/RentomojoClone.jpg"
// import {Githubcalendar} from "react-github-calendar"

function Project(){

    const projdata=[
        {
            id:1,
            name:"Zara",
            image:zara,
            detail:"ZARA is an e-commerce clothing website.Zara specializes in fast fashion, and products include clothing, accessories, shoes, beauty products and many more things.",
            tech:[" React | "," NodeJs | "," JavaScript | "," HTML | "," Chakra_UI "],
            github:"https://github.com/Malik04121/high-fruit-9045",
            netlify:"https://shiny-jelly-6c543a.netlify.app/"
        },
        {
            id:2,
            name:"Clockify",
            image:clockify,
            detail:"Clockify is a time tracker and timesheet website that lets you track work hours across projects.",
            tech:["JavaScript | ","HTML | ","CSS"],
            github:"https://github.com/Dhanush-Saji/auspicious-sea-8816",
            netlify:"https://rad-paprenjak-2fb3dc.netlify.app/"
        },
        {
            id:3,
            name:"Hubspot",
            image:Hubspot,
            detail:"HubSpot is a website for developers and marketers of software products for inbound marketing, sales, and customer service",
            tech:["JavaScript | ","HTML | ","CSS"],
            github:"https://github.com/Malik04121/average-cat-1068",
            netlify:"https://enchanting-stroopwafel-f01706.netlify.app/"
        },
        {
            id:4,
            name:"Rentomojo",
            image:rentomojo,
            detail:"Rentomojo is a website where user/customer can take appliances,electronics,furniture etc on monthly/yearly rental basis",
            tech:[" React | "," NodeJs | "," JavaScript | "," HTML | "," Chakra_UI "],
            github:"https://github.com/Ravi-047/likeable-wrench-2860",
            netlify:"https://brilliant-zabaione-7cd572.netlify.app"
        }
    ]

return(
    <Box id="project" bg="#191919">
     
     <Box textAlign="center">
            <Heading pt={{base:"5px",md:"15px",lg:"35px"}} size="2xl" color="#ec5b53">Projects</Heading>
     </Box>

        {projdata.map(({id,name,image,detail,tech,github,netlify})=>(
        //  <Box key={id} w="80%" m="auto" bg="silver" mt="40px" p="1%">
            <Flex borderRadius={["15","30","30"]} key={id} w="77%" m="auto" color="black" bg="white" mt="40px" p="3%" gap="5%"
            direction={{ base: 'column', md: 'column',lg:'row' }}>
                <Image  border="1px solid black"
                borderRadius={["15px","30px","30px"]}
                w={{base:"100%",md:"100%",lg:"50%"}}
                //  boxSize={{base:"100%",md:"100%",lg:"50%"}} 
                // boxSize="300px"
                // h="500px"
                src={image} />
                <Box alignItems="end" mt={{base:"5%",md:"10%",lg:"10%"}}>
                    <Heading fontSize={{base:"xl",md:"4xl",lg:"4xl"}}  mb="20px" >{name}</Heading>
                    <Text fontSize={{base:"sm",md:"lg",lg:"lg"}}>{detail}</Text>
                    <Flex mt="10px" mb="20px">
                        {tech.map((stack)=>(
                            <Text fontSize={{base:"small",md:"large",lg:"large"}} fontWeight="bold">{stack}</Text>
                        ))}
                    </Flex>
                    <Flex bg="black" gap="20px" color="white"
                    w="40%"
                    ml="60%"
                    borderRadius={["12px"]}
                    p={["2%"]}
                    justifyContent="center" 
                    fontSize={{base:"30px",md:"40px",lg:"50px"}}>
                    <Link  href={github} ><FaGithub/></Link>
                    <Link href={netlify}><FiExternalLink/></Link>
                    </Flex>
                   
                </Box>
            </Flex>
        //  </Box>     
        ))}
    
    </Box>
)

}
export default Project