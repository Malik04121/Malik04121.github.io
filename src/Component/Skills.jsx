import React from "react";

import { Image,Box,Text,Grid, SimpleGrid, Heading } from "@chakra-ui/react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import chakra from "../assets/chakra.png"
import mongo from "../assets/mongodb.png"
import node from "../assets/node.png"
import github from "../assets/github.png";
import postman from "../assets/postman.png";
import Git from "../assets/Git-Icon.png";
import Netlify from "../assets/netlify.png"
import heroku from "../assets/heroku.png"
import vscode from "../assets/vscode.png"
import { transform } from "framer-motion";



const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "#EA580C",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "#3b82f6",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "#eab308",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "#2563eb",
    },
   
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "#38bdf8",
    },
    
    {
      id: 12,
      src: redux,
      title: "Redux",
      style: "#a855f7",
    },
    {
      id: 13,
      src: chakra,
      title: "Chakra UI",
      style: "#38bdf8",
    },
    {
      id: 14,
      src: mongo,
      title: "MongoDB",
      style: "#4ade80",
    },
    {
      id: 15,
      src: node,
      title: "NodeJS",
      style: "#16a34a",
    },
  ];
  const tool = [
    {
      id: 1,
      src: postman,
      title: "Postman",
      style: "#f97316",
    },
    {
      id: 2,
      src: Git,
      title: "Git",
      style: "#ef4444",
    },
    {
      id: 3,
      src: Netlify,
      title: "Netlify",
      style: "#3b82f6",
    },
   
    {
      id: 8,
      src: github,
      title: "GitHub",
      style:"#9ca3af",
    },
    {
      id: 9,
      src: heroku,
      title: "heroku",
      style: "#c084fc",
    },
    
    {
      id: 12,
      src: vscode,
      title: "vscode",
      style: "#3b82f6",
    },
   
  ];

  return (
    <Box id="skills" p="2%" bg="#191919">
     {/* bgGradient='linear(to-t, #000000, #111E46)'> */}
        <Box textAlign="center">
            <Heading size="2xl" color="#ec5b53" >Skills</Heading>
        </Box>
         <SimpleGrid  w="80%" m="auto" mt="50px" columns={[2,2,3]} gap={12} >
            {/* className="w-full  gap-8 text-center mt-11 py-8 px-12 sm:px-0"> */}
          {techs.map(({ id, src, title, style }) => (
            <Box
            // bg="#1c1917"
            // 
              key={id}
              _hover={{transform:"translateY(-20px)"}}
              textAlign="center"
              justifyContent="center"
              p="1.3rem"
              color="black"
              borderRadius="20px"
              // bg="#111E46"
              bg="white"
              style={{boxShadow: `${style}  0px 15px 15px`}}>
              <Image src={src}  alt="" w="32%" m="auto"/>
            {/* //   className="w-20 mx-auto" /> */}
              <Text fontSize={{base:"md",md:"2xl",lg:"3xl"}} mt="2">{title}</Text>
            </Box>
          ))}
        </SimpleGrid>
        <Box mt="5%" textAlign="center">
            <Heading size="2xl" color="#ec5b53">Tools</Heading>
        </Box>
         <SimpleGrid  w="80%" m="auto" mt="50px" columns={[2,2,3]} gap={12} >
            {/* className="w-full  gap-8 text-center mt-11 py-8 px-12 sm:px-0"> */}
          {tool.map(({ id, src, title, style }) => (
            <Box
            key={id}
            textAlign="center"
            _hover={{transform:"translateY(-20px)"}}
            justifyContent="center"
            p="1.1rem"
            color="white"
            borderRadius="20px"
            bg="black"
            style={{boxShadow: `${style}  0px 15px 15px`}}>
          
          
            {/* //   className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} */}
            
              <Image src={src} alt="" w="32%" m="auto"/>
            {/* //   className="w-20 mx-auto" /> */}
              <Text fontSize={{base:"xl",md:"2xl",lg:"3xl"}} mt="2">{title}</Text>
            </Box>
          ))}
        </SimpleGrid>
      
    </Box>
  );
};

export default Skills;