import "../Styles/Navbar.css";
import About from "./About";
import TimingsTable from "./TimingsTable";

const navbarContents = ["Opening Times", "Our Products", "Parcel Services"];

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo-contact">
          <div className="logo">Westmains</div>
          <div className="contact-buttons">
            <p>phone</p>
            <p>whatsapp</p>
            <p>email</p>
          </div>
        </div>
        <div className="navbar-banner">
          <ul className={"navbar-links"}>
            {navbarContents.map((item) => (
              <li key={item} className="navbar-link">
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="about-timings">
        <section className="timings">
          <TimingsTable />
        </section>

        <About />
      </div>
    </>
  );
}

export default Navbar;
