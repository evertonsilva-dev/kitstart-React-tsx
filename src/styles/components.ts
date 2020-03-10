import styled from "styled-components";
import theme from "styled-theming";

const TextColor = theme("mode", {
  light: "#333",
  dark: "#DEE4E7"
});
const FuhthestBackground = theme("mode", {
  light: "#DEE4E7",
  dark: "#38434f"
});
const MiddleBackground = theme("mode", {
  light: "#eff0f2",
  dark: "#37474f"
});
const MiddleSecondBackground = theme("mode", {
  light: "#f9f9fa",
  dark: "#191f24"
});
const ClosestBackground = theme("mode", {
  light: "#fff",
  dark: "#111418"
});

export const Button = styled.button`
  background-color: ${MiddleBackground};
  color: ${TextColor};
  border: 1px solid ${MiddleBackground};
  padding: 15px 30px;
  border-radius: 30px;
`;