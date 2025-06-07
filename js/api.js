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
};

export default api;
