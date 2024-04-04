import "./css/main.css";
import "./js/main.js";

import Navbar from "./components/navbar";
import SignUpBanner from "./components/signupbanner";
import Statistics from "./components/statistics";
import Classes from "./components/classes";
import Bmi from "./components/bmi";
import Trainers from "./components/trainers";
import Purchase from "./components/purchase";
import Client from "./components/client";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Powerfull Trainer</title>
        <link rel="stylesheet" href="./css/main.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <Navbar />
        <SignUpBanner />
        <Statistics />
        <Classes />
        <Bmi />
        <Trainers />
        <Purchase />
        <Client />
        <Contact />
      </div>
    </div>
  );
}

export default App;
