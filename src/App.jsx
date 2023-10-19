import { useEffect } from "react";
import "./styles.css";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalstyles.js";

let Header = styled.div`
  width: 90vw;
  max-width: 300px;
  border-radius: 0.23rem;
  border: 1px solid black;
  img {
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }

  @media (width > 200px) {
    border: 3px solid black;
    /* 
    backgroundcolor: "red"; */
  }
  &:hover {
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
  }

  h4 {
    &::after {
      content: " : price";
    }
  }

  /* @media (width >); */
`;

function Card() {
  return (
    <Header>
      <img
        src={
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
        }
      />

      <footer>
        <p>Skull candy</p>
        <h4>$12</h4>
      </footer>
    </Header>
  );
}

const BaseTheme = {
  color: "#222",
  background: "#fff"
};

const container = styled.div`
  color: ${(props) => props.theme.color};
  padding: 2rem;
  background: ${(props) => props.theme.background};
`;

export default function App() {
  useEffect(() => {
    let log = console.log(window.innerWidth);

    () => console.clear(log());
  });
  return (
    <ThemeProvider theme={BaseTheme}>
      <div className="App">
        <Card></Card>
      </div>
    </ThemeProvider>
  );
}
