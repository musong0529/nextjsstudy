import {Nav, Navbar, NavDropdown, Container, Tooltip, OverlayTrigger, TooltipProps} from 'react-bootstrap';
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {RefAttributes, useState, useEffect} from 'react';


const Header = () => {
  const {data: session} = useSession();
  const router = useRouter();
  const [active, setActive] = useState({
    home: false,
    about: false,
    signin: false,
  })

  const renderTooltip = (props: JSX.IntrinsicAttributes & TooltipProps & RefAttributes<HTMLDivElement>) => (
    // eslint-disable-next-line react/jsx-no-undef
    <Tooltip id="button-tooltip" {...props}>
      Super Admin!
    </Tooltip>
  );

  useEffect(() => {
    if (router.pathname === '/') {
      setActive({
        ...active,
        home: true,
        about: false,
        signin: false,
      })
    } else if (router.pathname === '/View/about') {
      setActive({
        ...active,
        home: false,
        about: true,
        signin: false,
      })
    } else {
      setActive({
        ...active,
        home: false,
        about: false,
        signin: true,
      })
    }
  }, [])

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>CJ바이오사이언스</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {session ? (<Nav.Link onClick={() => signOut()}>Sign out</Nav.Link>) : (
              <Nav.Link href="/api/auth/signin">Sign in</Nav.Link>)}
          </Nav>
          <div className="d-flex">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <span>{session?.user?.name}</span>
            </OverlayTrigger>
            {/*<Nav.Link className="link-success">{session?.user?.name}</Nav.Link>*/}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
