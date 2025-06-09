const api = {
  async buscarInformacoesDePet() {
    try {
      const response = await fetch("http://localhost:3001/pets");
      return await response.json();
    } catch {
      alert("Ocorreu um erro ao buscar as informações dos PETS.");
      throw error;
    }
  },

  async cadastrarPet(pet) {
    try {
      const response = await fetch("http://localhost:3001/pets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pet),
      });
      return response.json;
    } catch (error) {
      alert(`Erro ao cadastrar um novo pet: ${error}`);
    }
  },
  // Busca Pet Por ID (verificar se estou fazendo a coisa certa com base no metodo PUT do exercício)
  async buscarPetPorId(id) {
    try {
      const response = await fetch(`http://localhost:3001/pets/${id}`);
      return await response.json;
    } catch (error) {
      alert(`Não foi possível buscar por esse pet, ${error}`);
    }
  },
  // Altera as informações do PET baseadas no ID fornecido
  async alterarInformacoesPorId(pet) {
    try {
      const response = await fetch(`http://localhost:3001/${pet.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pet),
      });
      return response.json();
    } catch (error) {
      alert(`Não foi possível alterar esse pet: ${error}`);
    }
  },
};
export default api;
