import React, { useState } from 'react'
import "./calculadora.css"
const Calculadora = () => {
  const [valorAtual,setValorAtual] = useState("0");
  const [operacaoAtual,setOperacaoAtual] = useState(null);
  const [valorPendente,setValorPendente] = useState(null);
  const [operacaoCompleta,setOperacaoCompleta] = useState("");


  const numeros =["0","1","2","3","4","5","6","7","8","9"];
  const operadores = ["+","-","*","/"];

  const escolhendoNumero = (numero) => {
    setValorAtual(valorAntigo => {
      if(valorAntigo ==="0") {
        return numero
      }else {
        return valorAntigo + numero
      }
    });
    setOperacaoCompleta(operacaoAnterior => operacaoAnterior + numero)
  }

  const limpar = () => {
    setValorAtual("0");
    setOperacaoAtual(null);
    setValorPendente(null);
    setOperacaoCompleta("");
  }

  const escolhendoOperacao = (operacao) => {
    setOperacaoCompleta(operacaoCompleta+" "+operacao);
    setOperacaoAtual(operacao);
    setValorPendente(valorAtual);
    setValorAtual("0")
  }

  const calculando = () => {
    if (!operacaoAtual || !valorPendente) {
      return;
    }
      const numero1 = parseFloat(valorPendente);
      const numero2 = parseFloat(valorAtual);
      let resultado;

      switch (operacaoAtual) {
        case "+":
          resultado = numero1 + numero2;
          break;
          case "-":
          resultado = numero1 - numero2;
          break;
          case "*":
          resultado = numero1 * numero2;
          break;
          case "/":
            if (numero2 !=  "0"){
              resultado = numero1 / numero2;
            }else {
             setValorAtual("Erro")
             setOperacaoCompleta("Erro")
             setValorPendente(null)
             setValorPendente(null)
             return;
            }
          break;
          default:
            break;
      }
    
    setOperacaoCompleta(valorPendente+" "+ operacaoAtual +" "+ valorAtual + "= " + resultado)
    setValorAtual(resultado.toString());
  }
  return (
    <div className='calculadora'>
      <div className='complete-operator'>{operacaoCompleta}</div>
      <div className='display'>{valorAtual}</div>
      <div className='buttons'>
      <button onClick={limpar}>AC</button>
        {numeros.map((numero) => (
          <button key={numero} onClick={() => {escolhendoNumero(numero)}}>{numero}</button>
        ))}
        {operadores.map((operacao) => (
          <button key={operacao} onClick={() => {escolhendoOperacao(operacao)}}>{operacao}</button>
        ))}
        <button onClick={calculando}>=</button>
      </div>
      
    </div>
  )
}

export default Calculadora