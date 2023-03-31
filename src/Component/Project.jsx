import { Box, Flex, Heading, Img,Text,Link, Image, Grid } from "@chakra-ui/react"
import { FaPhoneAlt,FaGithub } from "react-icons/fa";
import { FiExternalLink} from "react-icons/fi";
import { Fade } from "react-awesome-reveal";

import zara from "../assets/project/zaraclone.jpg"
import clockify from "../assets/project/clockify.jpg"
import Hubspot from "../assets/project/hubspot.jpg"
import rentomojo from "../assets/project/RentomojoClone.jpg"
import techhunt from "../assets/project/techhunt.png"
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
            netlify:"https://zara-clone-ten.vercel.app/"
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
            name:"TechHunt",
            image:techhunt,
            detail:"Techhunt is an affordable online electronics store that offers the latest gadgets with exceptional customer service. Shop for smartphones, laptops, and more from top brands. Experience the future of electronics shopping today!",
            tech:["React |","MongoDB |","NodeJS |","Express |","ChakraUI "],
            github:"https://github.com/Malik04121/Tech-Hunt",
            netlify:"https://prd-ecommerce-18no.vercel.app/"
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
    <Box id="project" bg="#191919" p="2%">
     
     <Box textAlign="center">
            <Heading pt={{base:"5px",md:"15px",lg:"35px"}} size="xl" color="#ec5b53">Projects</Heading>
     </Box>
     
        {projdata.map(({id,name,image,detail,tech,github,netlify})=>(
        //  <Box key={id} w="80%" m="auto" bg="silver" mt="40px" p="1%">
        

            <Flex borderRadius={["15","30","30"]} key={id} w="77%" m="auto" color="black" bg="white" mt="40px" p="3%" gap={{base:"5%",md:"10%",lg:"2%"}}
            direction={{ base: 'column', md: 'column',lg:'row' }} transition="transform 0.2s ease-in-out"
             _hover={{ transform: "scale(1.05)" }} >
                <Box  w={{base:"100%",md:"100%",lg:"60%"}}  >
                <Box  w={{base:"100%",md:"100%",lg:"100%"}} h="100%" >
                <Image  border="1px solid black"
                borderRadius={["15px","20px","20px"]}
                
                objectFit="fill"
                h="100%"
                w={{base:"100%",md:"100%",lg:"100%"}}
                src={image} />
                </Box>
                

                </Box>

                <Box alignItems="end" 
                pt={{base:"3%",md:"3%",lg:"5%"}}
                  w={{base:"100%",md:"100%",lg:"40%"}}
                  >
                <Fade direction="right" cascade damping={0.2}>

                    <Heading fontSize={{base:"lg",md:"2xl",lg:"3xl"}}  mb="20px" >{name}</Heading>
                    <Text fontSize={{base:"sm",md:"lg",lg:"lg"}}>{detail}</Text>
                    {/* <Grid templateColumns='repeat(4,1fr)' mt="10px" mb="20px" gap="0px"> */}
                       <Flex mt="10px" mb="20px">
                        {tech.map((stack)=>(

                            <Text fontSize={{base:"small",md:"large",lg:"medium"}} fontWeight="semibold">{stack}</Text>
                        ))}
                    {/* </Grid> */}
                     </Flex>
                    <Flex bg="black" gap="20px" color="white"
                    w="40%"
                    ml="60%"
                    borderRadius={["12px"]}
                    p={["1%"]}
                    justifyContent="center" 
                    fontSize={{base:"30px",md:"40px",lg:"30px"}}>
                    <Link  href={github} target="_blank" ><FaGithub/></Link>
                    <Link href={netlify} target="_blank"><FiExternalLink/></Link>
                    </Flex>
                </Fade>
                   
                </Box>
            </Flex>
            // </Fade>
        //  </Box>     
        ))}
    
    </Box>
)

}
export default Project