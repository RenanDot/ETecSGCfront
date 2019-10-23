import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import camera from '../../assets/camera.svg';

import './styles.css';

export default function New({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [descricao, setDescricao] = useState('');
  const [dia, setDia] = useState('');
  const [ingredientes, setIngredientes] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])

  async function handleSubmit(event){
    event.preventDefault();

    const data = new FormData();
    const user_id = localStorage.getItem('User');
    data.append('thumbnail', thumbnail);
    data.append('descricao', descricao);
    data.append('dia', dia);
    data.append('ingredientes', ingredientes);

    await api.post('/cardapios', data, {
        headers: { user_id }
    })

    history.push('/cardapios');
}

  return (
    <form onSubmit={handleSubmit}>
      <label 
        id="thumbnail" 
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? 'has-thumbnail' : ''}
        >
        <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
        <img src={camera} alt="Select img" />
      </label>

      <label htmlFor="descricao">DESCRIÇÃO *</label>
      <input 
      id="descricao"
      placeholder="Descrição do prato"
      value={descricao}
      onChange={event => setDescricao(event.target.value)}
      />

      <label htmlFor="ingredientes">INGREDIENTES *</label>
      <input 
      id="ingredientes"
      placeholder="Ingredientes do prato"
      value={ingredientes}
      onChange={event => setIngredientes(event.target.value)}
      />

      <label htmlFor="dia">DIA DA SEMANA *</label>
      <input 
      id="dia"
      placeholder="Qual o dia da semana"
      value={dia}
      onChange={event => setDia(event.target.value)}
      />

      <button type="submit" className="btn">Cadastrar</button>
    </form>
  )
}