import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.mostrarPets();
});

const formulario = document.getElementById("formulario_pet");
formulario.addEventListener("submit", enviarFormulario);

async function enviarFormulario(event) {
  event.preventDefault();

  // const id = document.getElementById("id").value;
  const especie = document.getElementById("form_especie").value;
  const nome = document.getElementById("form_nome").value;
  const raca = document.getElementById("form_raca").value;
  console.log(especie);
  console.log(nome);
  console.log(raca);

  try {
    await api.cadastrarPet({ especie, nome, raca });
    ui.mostrarPets();
  } catch (error) {
    alert(`Um erro ocorreu ao cadastrar o pet: ${error}`);
  }
}
