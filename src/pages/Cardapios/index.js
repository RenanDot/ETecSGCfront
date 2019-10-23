import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function Cardapios() {
  const [cardapios, setCardapios] = useState([]);

  useEffect(() => {
    async function loadCardapios() {
      const user_id = localStorage.getItem('User');
      const response = await api.get('/profile', {
        headers: { user_id }
      });

      setCardapios(response.data);
    }

    loadCardapios();
  }, []);

  return (
    <>
        <ul className="cardapio-list"> 
            {cardapios.map(cardapios => (
                <li key={cardapios._id}>
                    <strong>{cardapios.dia}</strong>
                    <header style={{ backgroundImage: `url(${cardapios.thumbnail_url})` }} />
                    <h1>{cardapios.descricao}</h1>
                    <strong>{cardapios.ingredientes}</strong>
                    <hr></hr>
                </li>
            ))}
        </ul>
        <Link to="/editar">
          <button className='btn'>Editar</button>
        </Link>
        <Link to="/new">
          <button className='btn'>Cadastrar</button>
        </Link>
        <Link to="/contagem">
          <button className='btn'>Contagem</button>
        </Link>
    </>
);
}