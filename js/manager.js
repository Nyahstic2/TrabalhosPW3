import {Task} from "./todo.js";

let tarefasArr = [];
const formNome = document.getElementById("nome");
const formDescricao = document.getElementById("descricao");
const formNivel = document.getElementById("nivel");

const form = document.getElementById("formTarefa");
const divTarefas = document.getElementById("tarefas");
form.addEventListener("submit", addTarefa);

function addTarefa(e){
    e.preventDefault();

    const nome = formNome.value;
    const descricao = formDescricao.value;
    const nivel = formNivel.value;
    
    if (nome !== ''){
        const tarefa = new Task(nome, descricao, nivel);
        tarefa.OnEdit = updateTarefas;
        tarefa.OnDelete = deletarTarefa;
        tarefa.OnDone = marcarConcluido;
        tarefasArr.push(tarefa);
        form.reset();
        console.table(tarefasArr);
        updateTarefas();
    }
    else{
        alert("Você precisa colocar pelo menos o nome da tarefa para poder ser adicionada!");
    }
}

function updateTarefas(){
    divTarefas.innerHTML = "";
    tarefasArr.forEach(x => {
        console.log(x);
        divTarefas.appendChild(x.Render());
        x.Log();
    });
}

function deletarTarefa(){
    tarefasArr = tarefasArr.filter(x => !x.MarkedToDelete);
    updateTarefas();
}

function marcarConcluido(){
    updateTarefas();
}

function showTarefas(){
    console.table(tarefasArr);
}