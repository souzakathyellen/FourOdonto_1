import React, { useEffect, useState } from 'react';
import { getVagas, atualizarVaga, excluirVaga } from '../servicos/vagas';
import 'bootstrap/dist/css/bootstrap.min.css';

const GerenciamentoVagas = () => {
  const [vagas, setVagas] = useState([]);
  const [dentista, setDentista] = useState(null);
  const [paciente, setPaciente] = useState('');
  const [procedimento, setProcedimento] = useState('');
  

  useEffect(() => {
    carregarVagas();
  }, []);

  const carregarVagas = async () => {
    try {
      const listarVagas = await getVagas();
      setVagas(listarVagas);
    } catch (error) {
      console.error('Erro ao carregar Vagas', error);
    }
  };

  const handleEditar = (vaga) => {
    setDentista(vaga._id);
    setPaciente(vaga.paciente);
    setProcedimento(vaga.procedimento);
    
  };

  const handleAtualizar = async () => {
    try {
      await atualizarVaga(edicao, {
        paciente: paciente,
        dentista: dentista,
        procedimento: procedimento,
      });
      setEdicao(null);
      setPaciente('');
      setProcedimento('');
      setDentista('');
      carregarVagas();
    } catch (error) {
      console.error('Erro ao atualizar Vagas', error);
    }
  };

  const handleExcluir = async (id) => {
    try {
      await excluirVaga(id);
      carregarVagas();
    } catch (error) {
      console.error('Erro ao excluir a vaga', error);
    }
  };

  const adicionarVaga = () => {
    const novaVaga = {
      dentista: dentista,
      paciente: paciente,
      procedimento: procedimento,
    };

    setVagas([...vagas, novaVaga]);
    setDentista('');
    setPaciente('');
    setProcedimento('');
  };

  return (
    <div className="col-md-6">
      <h3>Dentistas</h3>
      <ul>
        {vagas.map((vaga) => (
          <li key={vaga._id}>
            <strong>{vaga.dentista}</strong> - {vaga.paciente}, procedimento: {vaga.procedimento}
            <button onClick={() => handleEditar(vaga)}> Editar </button>
            <button onClick={() => handleExcluir(vaga._id)}> Excluir </button>
          </li>
        ))}
      </ul>
      {edicao !== null && (
        <div>
          <h3>Editar Vaga</h3>
          <label>Pacientes</label>
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}></input>

          <label>Procedimentos</label>
          <input type="text" value={time} onChange={(e) => settime(e.target.value)}></input>
          
          <button onClick={handleAtualizar}>Atualizar</button>
          <button onClick={handleExcluir}>Excluir</button>

        </div>
      )}
    </div>
  );
};

export default GerenciamentoVagas;
