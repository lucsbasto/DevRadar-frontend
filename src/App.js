import React, { useEffect, useState } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css'
import './Main.css'
import api from './service/api';
import Dev from './components/DevItem/index'
import DevForm from './components/DevForm/index'

function App() {
  const [devs, setDevs] = useState([]);
  //recebe os dados da função handleSubmit do componente DevForm
  async function handleAddDev(data){
    const response = await api.post('/devs', data)
    setDevs([...devs, response.data]);
  }
  async function loadDevs(){
    const response = await api.get('/devs');
    setDevs(response.data.devs);
  }
  async function handleRemoveDev({username}){
    await api.delete(`/devs/${username}`)
    loadDevs();
  }
 
  //buscar usuários cadastrados no banco de dados
  useEffect(()=>{
    loadDevs();
  }, []);

  return (
    <div id="app">
      {/* aside é o side bar */}
      <aside>
      <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      {/* principal, onde fica a maior parte dos dados */}
      <main>
        <ul>
          {devs.map(dev =>(
            <Dev key={dev._id} dev={dev} onClick={handleRemoveDev}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;