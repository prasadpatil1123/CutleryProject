import { Dropdown, Link } from 'react-bootstrap';

function DropdownButton() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownButton;
