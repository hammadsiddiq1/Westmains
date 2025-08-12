import "../Styles/Navbar.css";

const navbarContents = ["Opening Times", "Our Products", "Parcel Services"];

const openingTime = 7;

const closingTimes = new Map();
closingTimes.set("weekdays", 6);
closingTimes.set("saturday", 6);
closingTimes.set("sunday", 4);

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
        <section className="about">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <section className="timings">
          <table className="timings-table" border={1} cellPadding={6}>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>
                  {openingTime} AM - {closingTimes.get("weekdays")} PM
                </td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>
                  {openingTime} AM - {closingTimes.get("weekdays")} PM
                </td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>
                  {openingTime} AM - {closingTimes.get("weekdays")} PM
                </td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>
                  {openingTime} AM - {closingTimes.get("weekdays")} PM
                </td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>
                  {openingTime} AM - {closingTimes.get("weekdays")} PM
                </td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>
                  {openingTime} AM - {closingTimes.get("saturday")} PM
                </td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>
                  {openingTime} AM - {closingTimes.get("sunday")} PM
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}

export default Navbar;
