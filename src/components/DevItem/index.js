import React from 'react';
import './styles.css'

function DevItem ({dev, onClick}){
  function handleDev(e){
    e.preventDefault();
    onClick({username: dev.github_username});
  }
  return (
    //esse key precisa ser um dado unico entre os dados
    //pro react parar de dar warning
    <li key={dev._id} className="dev-item">
      <header>
        <img src={dev.avatar_url} alt='robson'/>
        <div className="user-info">
          <div className="name-trash">
            <strong>
             {dev.name}
            </strong>
            <button onClick={handleDev}><i className="glyphicon glyphicon-trash"></i></button>
          </div>
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