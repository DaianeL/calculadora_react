import React from "react";
import styled from "styled-components";
import { useState } from "react";

//Estilização
const Dai = styled.h1`
  color: #fa05b5;
  text-align: center;
  font-size: 37px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: rgb(254, 154, 232);
  height: 40vh;
  width: 100vw;
`;
const Caixa = styled.input`
  background-color: #f00fb0;
  height: 4vh;
  width: 14vw;
  margin-top: 14vh;

  &:hover {
    filter: brightness(0.7);
  }
`;
const Botoes = styled.button`
  background-color: #a048f3;
  height: 4vh;
  width: 7vw;
  margin-top: 14vh;

  &:hover {
    filter: brightness(0.7);
  }
`;

// Criação do estado
function App() {
  const [primeiroValor, setPrimeroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [total, setTotal] = useState();

  // Criação da função (Arrow Function)
  const capturarPrimeiroValor = (e) => {
    setPrimeroValor(Number(e.target.value));
  };

  const capturarSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };
  // função de Adição =>
  const Soma = () => {
    setTotal(primeiroValor + segundoValor);
  };
  const Subtracao = () => {
    setTotal(primeiroValor - segundoValor);
  };
  const Multiplicacao = () => {
    setTotal(primeiroValor * segundoValor);
  };
  const Divisao = () => {
    setTotal(primeiroValor / segundoValor);
  };

  //Criação do evento
  return (
    <>
      <Dai>Calculadora: Dai</Dai>
      <Container>
        <Caixa onChange={capturarPrimeiroValor} />
        <Caixa onChange={capturarSegundoValor} />
        <Botoes onClick={Soma}>+</Botoes>
        <Botoes onClick={Subtracao}>-</Botoes>
        <Botoes onClick={Multiplicacao}>*</Botoes>
        <Botoes onClick={Divisao}>/</Botoes>
        <h2>{total}</h2>
      </Container>
    </>
  );
}
export default App;
