<Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
    <Navbar.Brand href="/">Shopping</Navbar.Brand>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="m-auto">
        {/* <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Form> */}
      </Nav>
      <Nav>
        <>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <NavDropdown title="" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/profile">
              {/* <img
                      alt=""
                      src={`${userInfo.pic}`}
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                    /> */}
              My Profile
            </NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={() => {
                localStorage.removeItem("userInfo");
                history.push("/");
              }}
            >
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>;
