import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
  return (
    <Navbar container="md" color="dark" dark>
      <Link href="/" passHref>
        <div className="navbar-brand">
          Início
        </div>
      </Link>
      <Nav className="flex-row" navbar>
        <Link href="/products">
          <div className="nav-link me-2">
            Produtos
          </div>
        </Link>
        <Link href="/cart">
          <div className="nav-link">
            Carrinho
          </div>
        </Link>
      </Nav>
    </Navbar>
  )
}

export default Header