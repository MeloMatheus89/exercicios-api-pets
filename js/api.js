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
};

export default api;
