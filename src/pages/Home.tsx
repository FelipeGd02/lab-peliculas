import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Home = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Home</h1>
      <p>Tema actual: {theme}</p>
      <button onClick={toggleTheme}>Cambiar tema</button>
    </div>
  );
};