import styles from '@src/styles/Home.module.css';
import Image from 'next/image';
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar bg="light" fixed="bottom">
      <Container>
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;
