import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/mainpage";
import PageOne from "./components/pageone";
import { LiquidSwipe } from "./components/liquidswipe.js";
import dataJson from "./components/data.json";
function App() {
  var components = [];
  var components_data = [];
  for (let i = 0; i < dataJson.length; i++) {
    components.push(
      <MainPage
        title={dataJson[i]["title"]}
        sub_title={dataJson[i]["sub_title"]}
        description={dataJson[i]["description"]}
        backgroundColor={dataJson[i]["backgroundColor"]}
        primaryText={dataJson[i]["primaryText"]}
        backgroundColorBtn={dataJson[i]["backgroundColorBtn"]}
        secondaryBackground={dataJson[i]["secondaryBackground"]}
        textColorBtn={dataJson[i]["textColorBtn"]}
        png={dataJson[i]["png"]}
        star={dataJson[i]["star"]}
        link={dataJson[i]["link"]}
      />
    );
  }

  var components1 = [];
  // color button
  var colors = [];
  colors.push("#00203FFF");
  colors.push("#fff");
  colors.push("#FCF6F5FF");

  return (
    <div className="App">
      <LiquidSwipe components={components} colors={colors} />
    </div>
  );
}

export default App;
