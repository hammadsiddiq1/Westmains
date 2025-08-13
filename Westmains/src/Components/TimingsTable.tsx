import '../Styles/TimingsTable.css'

const openingTime = 7;

const closingTimes = new Map();
closingTimes.set("weekdays", 6);
closingTimes.set("saturday", 6);
closingTimes.set("sunday", 4);

function TimingsTable() {
    return (
        <table className="timings-table" border={0} cellPadding={6}>
            <thead>
                <tr>
                    <th colSpan={2}>Timings</th>
                </tr>
            </thead>
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
    )
}

export default TimingsTable