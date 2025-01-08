import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <>
  {/* if it didn't had any content or children, go for self closing tag <Heading />
    {/* <Heading>Lallu Yadan</Heading> */}
    {/* <Heading />
    <MyList /> */}

    <App />
  </>
)