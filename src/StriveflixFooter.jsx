import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink
} from "./StriveflixFooterStyles";
import { Facebook, Instagram, Twitter,Youtube } from 'react-bootstrap-icons';

import { Button } from "react-bootstrap";
  
const StriveflixFooter = () => {
  return (
    <Box>
      
      <Container>
        <Row>
          <Column>
           <div>
            <FooterLink href="https://www.facebook.com/netflix/">
             
                <span style={{ marginLeft: "10px" , marginRight: "10px",fontSize: "20px" }}>
                  <Facebook/>
                </span>
             
            </FooterLink>
            <FooterLink href="https://www.instagram.com/netflix/?hl=en">
              
                <span style={{ marginLeft: "10px" , marginRight: "10px",fontSize: "20px"  }}>
                  <Instagram/>
                </span>
             
            </FooterLink>
            <FooterLink href="https://twitter.com/netflix?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
              
                <span style={{ marginLeft: "10px" , marginRight: "10px",fontSize: "20px"   }}>
                  <Twitter/>
                </span>
             
            </FooterLink>
            <FooterLink href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw">
              
                <span style={{ marginLeft: "10px" , marginRight: "10px",fontSize: "20px"  }}>
                  <Youtube/>
                </span>
             
            </FooterLink>
            </div>
          </Column>
          
        </Row>
        <Row>
          <Column style={{marginBottom: "15px"}}>
            <FooterLink href="#">Audio and Subtitles</FooterLink>
            <FooterLink href="#">Media Center</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </Column>

          <Column>
            <FooterLink href="#">Audio Description</FooterLink>
            <FooterLink href="#">Investor Relations</FooterLink>
            <FooterLink href="#">Legal Notices</FooterLink>
        </Column>

          <Column>
            <FooterLink href="#">Help Center</FooterLink>
            <FooterLink href="#">Jobs</FooterLink>
            <FooterLink href="#">Cookie Preferences</FooterLink>
          </Column>

          <Column >
            <FooterLink href="#">Gift Cards</FooterLink>
            <FooterLink href="#">Terms of Use</FooterLink>
            <FooterLink href="#" >Corporate Information</FooterLink>
          </Column>

          
        </Row>
        <Row style = {{marginLeft: "60px", marginBottom: "15px"}}>
          <Button variant="black" 
          style =
           {{
             borderRadius: "0px",
             borderColor: "grey",
            color: "grey",
            fontSize: "13px",
            height: "28px",
            width:"100px",
            padding: ".3em"           
            }}
              >Service Code
              </Button>
        </Row>
        
        <div style={{marginLeft: "60px"}}>
          <span style={{fontSize: "11px", textAlign: "left", color: "grey"}}>
            <p>1997-2001 Netflix, Inc.            
             &copy; f9ab933f-f319-4d48-8cca-cce00e9c04b2</p>
         </span>
        </div>
        
         
      </Container>
    </Box>
  );
};
export default StriveflixFooter;


