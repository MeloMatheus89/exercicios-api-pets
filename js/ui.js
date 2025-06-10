import api from "./api.js";
const containerListaDePets = document.getElementById("lista-pets");

const ui = {
  limparFormulario(event) {
    event.preventDefault();
    document.getElementById("formulario_pet").reset();
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

  async preencheFormulario(petId) {
    console.log(petId);
    const formulario = await api.buscarPetPorId(petId);
    document.getElementById("form_id").value = formulario.id;
    document.getElementById("form_especie").value = formulario.especie;
    document.getElementById("form_nome").value = formulario.nome;
    document.getElementById("form_raca").value = formulario.raca;
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

    const containerBotoes = document.createElement("div");
    containerBotoes.classList.add("container__botoes");

    const btnEditar = document.createElement("button");
    btnEditar.onclick = () => ui.preencheFormulario(lista.id);

    const iconeEditar = document.createElement("img");
    iconeEditar.src = "./assets/imagens/icone-editar.png";
    iconeEditar.alt = "Editar";
    btnEditar.appendChild(iconeEditar);

    const btnApagar = document.createElement("button");

    const iconeApagar = document.createElement("img");
    iconeApagar.src = "./assets/imagens/icone-excluir.png";
    iconeApagar.alt = "Apagar";

    btnApagar.appendChild(iconeApagar);

    containerBotoes.appendChild(btnEditar);
    containerBotoes.appendChild(btnApagar);

    li.appendChild(petEspecie);
    li.appendChild(petNome);
    li.appendChild(petRaca);
    li.appendChild(containerBotoes);

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
                <div class="container__botoes">
                <img src="" alt="editar" />
                <img src="" alt="apagar" />
                </div>
            </li>
*/
