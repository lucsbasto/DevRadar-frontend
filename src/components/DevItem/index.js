import React from 'react';
import './styles.css'

function DevItem ({dev}){
  return (
    //esse key precisa ser um addo unico entre os dados
    //pro react parar de dar warning
    <li key={dev._id} className="dev-item">
      <header>
        <img src={dev.avatar_url} alt='robson'/>
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>
      {dev.bio}
      </p>
      <a href= {`https://github.com/${dev.github_username}`}>Acessar Perfil no Github</a>
    </li>   
  );
}

export default DevItem;