import { Button, Navbar } from "flowbite-react";
import React from "react";

const Header = () => {
  return (
    <div className="container py-5 mx-auto">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Bloggie Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Bloggie
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Login</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="">About</Navbar.Link>
          <Navbar.Link href="">Services</Navbar.Link>
          <Navbar.Link href="">Pricing</Navbar.Link>
          <Navbar.Link href="">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
