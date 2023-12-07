import axios from "axios";


const vagasApi = axios.create({baseURL: ""});

async function getVagas(){
    try {
        const response = await vagasApi.get('/');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados na API ", error);
    }
}

async function criarVaga(vaga) {
    try {
        const response = await vagasApi.post('/', vaga);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar vaga na API ", error);
    }
}

async function atualizarVaga(id, vaga) {
    try {
        const response = await vagasApi.put(`/${id}`, vaga);
        return response.data;
    } catch (error) {
        console.error(`Erro ao atualizar vaga com o ID ${id} na API `, error);
    }
}

async function excluirVaga(id) {
    try {
        const response = await vagasApi.delete(`/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao excluir vaga com o ID ${id} na API `, error);
    }
}

export {
    getVagas,
    criarVaga,
    atualizarVaga,
    excluirVaga
};