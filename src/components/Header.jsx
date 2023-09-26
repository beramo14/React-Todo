import { Container, Nav, Navbar } from 'react-bootstrap';
function Header() {
    return (
        <header className="App-header">
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React Todo!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="https://beramo.kr/" target='_blank'>Beramo</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;