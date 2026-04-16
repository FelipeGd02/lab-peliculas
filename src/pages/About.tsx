import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h1>About</h1>
      <p>El tema actual es: {theme}</p>
    </div>
  );
};