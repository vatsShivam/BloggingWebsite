import React, { useState,useEffect} from "react";
import Layout from '../components/navigation'
import {Navbar,Nav,Link,Form,Button,FormControl,Card,ListGroup,Carousel} from "react-bootstrap";
import styles from "./Shivam.module.css";
export default function About() {
  return (
   <>
  <Navbar expand="lg" bg="light">
  <Navbar.Brand href="/" className={styles.nav_brand} >MEDIUM</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
  <Nav.Link href="/login" className={styles.nav_sign} > Sign In</Nav.Link>
   
  </Navbar.Collapse>
</Navbar>
<div  style={{backgroundColor:"#E6E6FA",height:"auto" , backgroundImage:  "url( homep.jpeg )",minHeight:"600px",  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}} className="col-sm-12">
<h1 className={styles.header_heading}> Dive deeper on topics that .</h1>
<h1 className={styles.header_heading1}>matter to you.</h1>
<p className={styles.header_subheading}>Select what you're into. We'll help you find great things to read.</p>


<div style={{display:"flex",justifyContent:"center",paddingTop:"30px"}}>
  <a href="/login"><Button style={{backgroundColor:"#03A87C",border:"2px solid #03A87C"}}>Get started</Button></a>
</div>
</div>

</>
  )
}