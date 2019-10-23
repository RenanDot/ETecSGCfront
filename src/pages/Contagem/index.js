import React, { useState, useEffect } from 'react';
import Styled from 'styled-components'
import api from '../../services/api';
import "./style.css"

import '../../../src/App.css';

export default function Contagem() {
    const [contagem1, setContagem1] = useState([]);
    const [contagem2, setContagem2] = useState([]);
    const [contagem3, setContagem3] = useState([]);
    const [contagem4, setContagem4] = useState([]);
    const [contagem5, setContagem5] = useState([]);

  useEffect(() => {
    async function Contagem1() {
      const response = await api.get('/contagem', {
        headers : { dia: "Segunda-Feira" }
      });

      setContagem1(response.data);
    }

    Contagem1();
  }, []);

  useEffect(() => {
    async function Contagem2() {
      const response = await api.get('/contagem', {
        headers : { dia: "Terça-Feira" }
      });

      setContagem2(response.data);
    }

    Contagem2();
  }, []);

  useEffect(() => {
    async function Contagem3() {
      const response = await api.get('/contagem', {
        headers : { dia: "Quarta-Feira" }
      });

      setContagem3(response.data);
    }

    Contagem3();
  }, []);

  useEffect(() => {
    async function Contagem4() {
      const response = await api.get('/contagem', {
        headers : { dia: "Quinta-Feira" }
      });

      setContagem4(response.data);
    }

    Contagem4();
  }, []);

  useEffect(() => {
    async function Contagem5() {
      const response = await api.get('/contagem', {
        headers : { dia: "Sexta-Feira" }
      });

      setContagem5(response.data);
    }

    Contagem5();
  }, []);

  return (
    <>
        <div className="containerContagem"> 
            {contagem1.map(count => (
                <div className="contentContagem" key={count._id}>
                    <h1>{count._id}</h1><br />
                    <strong>{count.total}</strong>
                </div>
            ))}

            {contagem2.map(count => (
                <div className="contentContagem" key={count._id}>
                    <h1>{count._id}</h1><br />
                    <strong>{count.total}</strong>
                </div>
            ))}

            {contagem3.map(count => (
                <div className="contentContagem" key={count._id}>
                    <h1>{count._id}</h1><br />
                    <strong>{count.total}</strong>
                </div>
            ))}

            {contagem4.map(count => (
                <div className="contentContagem" key={count._id}>
                    <h1>{count._id}</h1><br />
                    <strong>{count.total}</strong>
                </div>
            ))}

            {contagem5.map(count => (
                <div className="contentContagem" key={count._id}>
                    <h1>{count._id}</h1><br />
                    <strong>{count.total}</strong>
                </div>
            ))}
        </div>
    </>
  )
}