import React, { useState, useMemo } from 'react';
import apj from '../../services/apj';

import camera from '../../assets/camera.svg';

import './styles.css';

export default function New({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [desc, setDesc] = useState('');
  const [dia_novo, setDia_novo] = useState('');
  const [dia_alterar, setDia_alterar] = useState('');
  const [ing, setIng] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])

  async function handleSubmit(event){
    event.preventDefault();

    const data = new FormData();
    const user_id = localStorage.getItem('User');
    data.append('thumbnail', thumbnail);
    data.append('desc', desc);
    data.append('dia_novo', dia_novo);
    data.append('dia_alterar', dia_alterar);
    data.append('ing', ing);

    await apj.post('/update', data, {
        headers: { user_id }
    })

    history.push('/cardapios');
}

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="dia_alterar">DIA QUE SERÁ ALTERADO *</label>
      <input 
      id="dia_alterar"
      placeholder="Qual o dia da semana será alterado?"
      value={dia_alterar}
      onChange={event => setDia_alterar(event.target.value)}
      />

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
      id="desc"
      placeholder="Descrição do prato"
      value={desc}
      onChange={event => setDesc(event.target.value)}
      />

      <label htmlFor="ingredientes">INGREDIENTES *</label>
      <input 
      id="ing"
      placeholder="Ingredientes do prato"
      value={ing}
      onChange={event => setIng(event.target.value)}
      />



      <button type="submit" className="btn">Editar</button>
    </form>
  )
}