import api from "./api.js";
const containerListaDePets = document.getElementById("lista-pets");

const ui = {
  limparFormulario(event) {
    event.preventDefault();
    document.getElementById("pensamento-form").reset();
  },

  async mostrarPets() {
    const containerListaDePets = document.getElementById("lista-pets");
    try {
      const listagemDePets = await api.buscarInformacoesDePet();
      listagemDePets.forEach(ui.escreverPetsNaTela);
    } catch (error) {
      alert(`Um erro ao demonstrar a lista: ${error}`);
    }
  },

  escreverPetsNaTela(lista) {
    const containerListaDePets = document.getElementById("lista-pets");
    const li = document.createElement("li");
    li.classList.add("lista__pets__item");
    li.setAttribute("data-id", lista.id);

    const petEspecie = document.createElement("div");
    petEspecie.innerHTML = `<p>Espécie: <strong>${lista.especie}</strong></p>`;

    const petNome = document.createElement("div");
    petNome.innerHTML = `<p>Nome: <strong>${lista.nome}</strong></p>`;

    const petRaca = document.createElement("div");
    petRaca.innerHTML = `<p>Raça: <strong>${lista.raca}</strong></p>`;

    li.appendChild(petEspecie);
    li.appendChild(petNome);
    li.appendChild(petRaca);

    containerListaDePets.appendChild(li);
  },
};
export default ui;
// Elemento LI criado de maneira tosca e sem intenções imediatas de fazer a estilização. Arquivo de referência elemento-li.html

/* 
<li class="lista__pets__item" data-id="1a2b">
                <h2 class="lista__pets__item">Espécie: <strong>felina</strong></h2>
                <div class="lista__pets__item">
                <p>Nome: <strong>Mimi</strong></p>
                </div>
                <div class="lista__pets__item">
                <p>Raça: <strong>Siamês</strong></p>
                </div>
            </li>
*/
