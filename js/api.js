const api = {
  async buscarInformacoesDePet() {
    try {
      const resposta = await fetch("http://localhost:3001/pets");
      return await resposta.json();
    } catch {
      alert("Ocorreu um erro ao buscar as informações dos PETS.");
    }
  },
};

export default api;
