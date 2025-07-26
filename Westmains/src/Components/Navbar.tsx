import '../Styles/Navbar.css'

const navbarContents = ['Opening Times', 'Our Products','Parcel Services', 'Contact']

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Westmains</div>

        <ul className={"navbar-links"}>
          {navbarContents.map((item, index) => (
            <li key={item} className={index === 0 ? 'navbar-start-item' : 'navbar-item'}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;