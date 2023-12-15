import { useState, useEffect } from 'react';//ha hook-ot hasznalok

function Footer() {

  let today = new Date().toLocaleDateString();//kiírja a dátumot
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayName = days[new Date().getDay()];//kiírja a nap nevét

  const [show, setShow] = useState(true);//true vagy false

  const toggleVisibility = () => {//clikkre meghívjuk
    setShow(!show);
  };

  const changedClassName = `footer ${show ? '' : 'footer__hidden'}`;//változik a Class
  //(show ? "footer" : "footer__hidden");

  useEffect(() => {//figyeli a show állapot változását
    if (!show) {
      // Ha elrejtjük a láblécet, várunk 2 másodpercet, majd újra megjelenítjük
      const timeoutClass = setTimeout(() => {//újra megjelenítjük a footert
        setShow(true);
      }, 2000);

      // Cleanup a komponens unmountolásakor vagy az állapot gyors változása esetén
      // hogy az időzítés ne maradjon aktív, ha a komponens gyorsan unmountolódik vagy az állapot gyorsan változik.
      //lehetőséged van a szükséges takarítási műveleteket elvégezni, például leiratkozni az eseményfigyelőkről, vagy felszabadítani erőforrásokat.
      return () => clearTimeout(timeoutClass);
    }
  }, [show]);


  let content =
    <div className={changedClassName} onClick={toggleVisibility}>
      <div className="date">
        <h5>{today}</h5>
      </div>
      <div className="day">
        <h5>{dayName}</h5>
      </div>
    </div>;
  return content;

}
export default Footer;