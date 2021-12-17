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
          <Column mb={3}>
           <div>
            <FooterLink href="#">
             
                <span style={{ marginLeft: "10px" }}>
                  <Facebook/>
                </span>
             
            </FooterLink>
            <FooterLink href="#">
              
                <span style={{ marginLeft: "10px" }}>
                  <Instagram/>
                </span>
             
            </FooterLink>
            <FooterLink href="#">
              
                <span style={{ marginLeft: "10px" }}>
                  <Twitter/>
                </span>
             
            </FooterLink>
            <FooterLink href="#">
              
                <span style={{ marginLeft: "10px" }}>
                  <Youtube/>
                </span>
             
            </FooterLink>
            </div>
          </Column>
          
        </Row>
        <Row>
          <Column>
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

          <Column>
          <Button>Service Code</Button>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default StriveflixFooter;


