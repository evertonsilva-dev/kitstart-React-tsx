import { createGlobalStyle } from "styled-components";
import { FuhthestBackground, TextColor } from "./components";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${FuhthestBackground};
    color:${TextColor};
  }
`;
export default GlobalStyle;
