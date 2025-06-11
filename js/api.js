const URL_BASE = "http://localhost:3001/";

const api = {
  async buscarInformacoesDePet() {
    try {
      const response = await axios.get(`${URL_BASE}pets`);
      return await response.data;
    } catch {
      alert("Ocorreu um erro ao buscar as informações dos PETS.");
      throw error;
    }
  },

  async cadastrarPet(pet) {
    try {
      const response = await axios.post(`${URL_BASE}pets`, pet);
      return response.data;
    } catch (error) {
      alert(`Erro ao cadastrar um novo pet: ${error}`);
    }
  },
  // Busca Pet Por ID (verificar se estou fazendo a coisa certa com base no metodo PUT do exercício)
  async buscarPetPorId(id) {
    try {
      const response = await axios.get(`${URL_BASE}pets/${id}`);
      return await response.data;
    } catch (error) {
      alert(`Não foi possível buscar por esse pet, ${error}`);
    }
  },
  // Altera as informações do PET baseadas no ID fornecido
  async alterarInformacoesPorId(pet) {
    try {
      const response = await axios.put(`${URL_BASE}pets/${pet.id}`, pet);
      return response.data;
    } catch (error) {
      alert(`Não foi possível alterar esse pet: ${error}`);
    }
  },

  //Apagar informações dos pets
  async excluirPet(id) {
    try {
      const response = await axios.delete(`${URL_BASE}pets/${id}`);
    } catch (error) {
      alert(`Erro ao apagar pet: ${error}`);
    }
  },
};
export default api;
