import './App.css';
// componensek importalasa
import Header from './components/Header'
import IntroductionCard from './components/IntroductionCard';
import Footer from './components/Footer';



function App() {//az adatok
  const logoName = "Én Logóm"

  const name = "Dékány Mónika";
  const school = "CodeCool";
  const age = "46";
  const hobbyList = ["programozás", "tanítás"];
  const hairColor = "black";
  const height = "177";
  const sex = "female";

  const name_new = "Zahorcsek Péter";
  const school_new = "Univerzita Komenského";
  const age_new = "36";
  const hobbyList_new = ["programozás", "görkorcsolyázás"];

  const hairColor_new = "brown";
  const height_new = "195";
  const sex_new = "male";

  return (//az App felépítése - a componensek és props-ok megadása a fenti adatok szerint
    <div className="App">
      <>
        <Header logo={logoName} />
        <IntroductionCard name={name} school={school} age={age} hobbyList={hobbyList} hairColor={hairColor} height={height} sex={sex} />
        <IntroductionCard name={name_new} school={school_new} age={age_new} hobbyList={hobbyList_new} hairColor={hairColor_new} height={height_new} sex={sex_new} />
        <Footer />
      </>
    </div>
  );
}

export default App;
