class List {
    constructor() {
        this.data = []
    }
    add(data){
        this.data.push(data)
        console.log(this.data)
    }
}
class TodoList{
    constructor() {
        this.todos = []
    }

    addTodo(){
        this.todos.push("Novo todo")
        console.log(this.todos)
    }
}

class TodoListWithExtends extends List{
    constructor (){
        super()

        this.usuario = 'Rychell'
    }
    mostraUsuario(){
        console.log(this.usuario)
    }
}

class ClasseComMetodoEstatico {
    static soma(a,b){
        console.log("O resultado da soma é:");
        console.log(a+b)
    }
}
const MinhaLista = new TodoList()
const MinhaListaExtends = new TodoListWithExtends()

document.querySelector('button').onclick = ()=>{
    MinhaLista.addTodo()
}
document.querySelector('button.extends').onclick = ()=>{
    MinhaListaExtends.add("Novo extend")
}
MinhaListaExtends.mostraUsuario()

ClasseComMetodoEstatico.soma(1,1)