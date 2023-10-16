const button = document.getElementById("button-add-task");
const input = document.getElementById("input-task");
const listaCompleta = document.getElementById("list-tasks")

let minhaListaDeItens = [];

function adicionarNovaTarefa(){
    minhaListaDeItens.push({
        tarefa:input.value,
        concluida: false
    })
    input.value = ""
    mostrarTarefas()
}

function mostrarTarefas(){
    
let novaLi = "";
    
    minhaListaDeItens.forEach((item, posicao) =>{
        novaLi = novaLi + 
        `
        <li class="task ${item.concluida && "done"}">
        <img src="img/checked.png" alt="OK" onclick= concluirTarefa(${posicao})>
        <p>${item.tarefa}</p>
        <img src="img/trash.png" alt="Apagar" onclick="deletarItem(${posicao})">
        </li>   
        `
    })

    listaCompleta.innerHTML = novaLi;

    localStorage.setItem("lista" , JSON.stringify(minhaListaDeItens))
}

function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida // Exclamação é a inversão

    mostrarTarefas();
}

function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1);

    mostrarTarefas();
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem("lista");
    
    if(minhaListaDeItens){
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage);
    }
    mostrarTarefas();
}

recarregarTarefas();

button.addEventListener("click" , adicionarNovaTarefa)