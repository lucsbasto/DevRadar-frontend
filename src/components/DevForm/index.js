import React, { useEffect, useState } from 'react';

function DevForm({onSubmit}){
  //useState pra mudar o valor das variaveis
  //o react preza pela imutabilidade 
  //então só atualiza o valor na tela se for definido no setState
  const [ latitude, setLatitude ] = useState('');
  const [ longitude, setLongitude ] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

    //busca a geolocalização do usuário pelo navegador
    useEffect(()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      }, erro =>{
      })
    }, []);
    //quando o usuário clica no botão de cadastrar
    //o submit do botão chama essa função
    function handleSubmit(e){
      e.preventDefault();
      onSubmit({
        github_username, 
        techs, 
        latitude, 
        longitude
      });
      setGithubUsername('');
      setTechs('');
    };
  return(
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username" >Usuário do Github</label>
        <input name="github_username" id="github_username" required value={github_username} onChange = { e => setGithubUsername(e.target.value) }/>
      </div>
      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input htmlFor="techs" required value={techs} onChange = { e => setTechs(e.target.value) } />
      </div>
      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input type="number" name="latitude" id="latitude" required value={latitude} onChange = { e => setLatitude(e.target.value) }/>
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input type="number" name="longitude" id="longitude" required value={longitude} onChange = { e => setLongitude(e.target.value) }/>
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}

export default DevForm;