import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Controller } from "./components/Controller";
import { Provider } from "./Provider";
import { HashRouter, Route } from "react-router-dom";
import { OverView } from "./components/OverView";
import { PersonalPage } from "./components/PersonalPage";
import { Pomodoro } from "./components/Pomodoro";
import { Badge } from "reactstrap";
import TruncatedText from "./components/TruncatedText";
export const App = () => (
  <div className="container">
    <ToastContainer className="toast-top" />
    <HashRouter>
      <Provider>
        <Pomodoro />
        <Controller />
        <Route exact path="/" component={OverView} />
        <Route exact path="/:uid" component={PersonalPage} />
      </Provider>
    </HashRouter>
    <TruncatedText maxWidth="20rem">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis ipsum
      eligendi earum beatae eaque. Impedit, harum earum totam, ducimus repellat
      ullam quia iure officiis, aliquam et nemo omnis facilis.
    </TruncatedText>
    <br />
    <TruncatedText maxWidth="10rem">Lorem </TruncatedText>
    <Badge>
      <TruncatedText maxWidth="10rem">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        explicabo repellendus consequuntur et excepturi nihil earum ad, magni,
        quidem, iure sed cumque mollitia quam nostrum odit dicta obcaecati.
        Modi, soluta.
      </TruncatedText>
    </Badge>
  </div>
);
export default App;
