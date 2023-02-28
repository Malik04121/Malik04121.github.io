// import { useContext } from "react";
// import { ThemeContext } from "../../ThemeContext/ThemeContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaPhoneAlt,FaGithub } from "react-icons/fa";
import {GrMail,GrLinkedin} from "react-icons/gr";

import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
// import styles from "./Contact.module.css";

const Contact = () => {
//   const { newTheme } = useContext(ThemeContext);
  return (
    <Box id="contact" color="black" bg="#CCD9D9" p="4%" > 
    {/* bgGradient='linear(to-t, #000000, #111E46)' */}
     
    {/* // className={styles.footer} id="contact"> */}
      <Box w={{base:"70",md:"50%",lg:"50%"}} m="auto" >
    {/* //   className={styles.container}> */}
        <Heading mt="2rem" textAlign="center">Get in Touch</Heading>
        <Text fontSize={{base:"lg",md:"2xl",lg:"3xl"}} mt="2rem" letterSpacing="wide">
          One of my favourite things about developing web applications is the
          variety in projects. So if you want to collaborate or have some work
          for me , Get in touch and tell me what you have in mind. — I can’t
          wait to hear all about it! 😇
          <br />
          <br/>
          {/* &nbsp; */}
          Gmail: shehzadmalik123.sm@gmail.com
          <br/>
          Contact: 9881239491
        </Text>
        <Flex gap={{base:"8%",md:"12%",lg:"15%"}} justifyContent="center" mt="2rem">
          <Link fontSize={{base:"30px",md:"35px",lg:"45px"}} href="tel:9881239491"
            rel="noreferrer"
            target="_blank"><FaPhoneAlt/></Link>
          <Link 
             fontSize={{base:"30px",md:"35px",lg:"40px"}} 
             href="mailto:shehzadmalik123.sm@gmail.com"><GrMail/>
          </Link>
          <Link 
          fontSize={{base:"30px",md:"35px",lg:"40px"}} 
            href="https://github.com/Malik04121" aria-label="Github"
            target="_blank"
            rel="noreferrer">
              <FaGithub/>
            
          </Link>

          <Link fontSize={{base:"30px",md:"35px",lg:"40px"}} 
            href="https://www.linkedin.com/in/shehzad-malik/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <GrLinkedin/>
            {/* <i className="fab fa-linkedin-in" /> */}
          </Link>
        </Flex>
      </Box>
      <Box  />
      <Box textAlign="center" mt="2rem">
        Designed and build by Shahzad, 2022 All rights reserved.
      </Box>
    </Box>
  );
};

export default Contact;