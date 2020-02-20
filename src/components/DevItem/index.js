import React from 'react';
import './styles.css'
import api from '../../service/api';

function DevItem ({dev}){
  function handleDev(e){
    e.preventDefault();
    async function deleteDev(){
      const response = await api.delete(`/devs/${dev.github_username}`);
      console.log("res", response)
    }

    deleteDev()
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
            <button onClick={handleDev}><i class="glyphicon glyphicon-trash"></i></button>
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