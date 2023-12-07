import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { criarVaga } from '../servicos/vagas';

const CadastroVagas = () => {
  const [dentista, setDentista] = useState('');
  const [paciente, setPaciente] = useState('');
  const [procedimento, setProcedimento] = useState('');

  const handleCadastro = async () => {
    try {
      await criarVaga({
        dentista: dentista,
        paciente: paciente,
        procedimento: procedimento,
      });

      setDentista('');
      setPaciente('');
      setProcedimento('');

      // Adicionando um alerta ao cadastrar com sucesso
      alert('Informações cadastradas com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar vaga:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-primary text-white text-center">
              <h3>Cadastro de Vaga</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="dentista" className="form-label">
                    Dentista:
                  </label>
                  <input
                    type="text"
                    value={dentista}
                    onChange={(e) => setDentista(e.target.value)}
                    className="form-control"
                    id="dentista"
                    placeholder="Digite o Dentista"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="Paciente" className="form-label">
                    Paciente:
                  </label>
                  <input
                    type="text"
                    value={paciente}
                    onChange={(e) => setPaciente(e.target.value)}
                    className="form-control"
                    id="paciente"
                    placeholder="Digite o nome do paciente"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="Procedimento" className="form-label">
                    Procedimento:
                  </label>
                  <input
                    type="string"
                    value={procedimento}
                    onChange={(e) => setProcedimento(e.target.value)}
                    className="form-control"
                    id="procedimento"
                    placeholder="Digite o procedimento"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleCadastro}
                  className="btn btn-primary w-100"
                >
                  Cadastrar Vaga
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroVagas;
