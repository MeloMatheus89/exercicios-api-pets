import api from "./api.js";

const ui = {
  async escreveItensNaTela() {
    const containerListaDePets = document.getElementById("lista-pets");

    try {
      const listagemDePets = await api.buscarInformacoesDePet();
      listagemDePets.forEach((pet) => {
        containerListaDePets.innerHTML += `
            <li class="lista__pets__item" data-id="${pet.id}">
                <h2 class="lista__pets__item">Espécie: <strong>${pet.especie}</strong></h2>
                <div class="lista__pets__item">
                <p>Nome: <strong>${pet.nome}</strong></p>
                </div>
                <div class="lista__pets__item">
                <p>Raça: <strong>${pet.raca}</strong></p>
                </div>
            </li>
            `;
      });
    } catch (error) {
      alert(`Um erro ao demonstrar a lista: ${error}`);
    }
  },
};

export default ui;
// Elemento LI criado de maneira tosca e sem intenções imediatas de fazer a estilização. Arquivo de referência elemento-li.html
