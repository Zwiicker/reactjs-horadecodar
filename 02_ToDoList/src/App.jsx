import { useState } from "react";

import Todo from "./components/Todo";

import Search from "./components/Search";

import Filter from "./components/Filter";

import "./App.css";
import TodoForm from "./components/TodoForm";

const App = () => { // Define um componente funcional chamado App.
  const [todos, setTodos] = useState([ //Define o estado todos utilizando useState, inicializando-o com um array de objetos que representam tarefas.
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    { id: 2,text: "Ir para a academia", category: "Pessoal", isCompleted: false },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);
  //Define os estados filter, sort e search utilizando useState, inicializando-os com valores padrão.
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");
  
  const [search, setSearch] = useState("");

  const addTodo = (text, category) => { //Função que adiciona uma nova tarefa ao estado todos.
    const newTodos = [...todos, 
      { id: Math.floor(Math.random() * 1000), text, category, isCompleted: false }
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => { //Função que remove uma tarefa com base no ID fornecido do estado todos.
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ?  todo : null)
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => { //Função que altera o estado de conclusão de uma tarefa no estado todos.
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ?  todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos);
  };

  return ( //Renderiza o componente Search passando as props search e setSearch.,Renderiza o componente Filter passando as props filter, setFilter e setSort., Renderiza o componente TodoForm passando a prop addTodo.
    <div className="app">      
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} /> 
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />

      <div className="todo-list"> {

      todos.filter((todo) => filter === "All" //Filtra as tarefas com base no estado filter. Se filter for "All", todas as tarefas são exibidas. Se for "Completed", apenas as tarefas completadas são exibidas. Caso contrário, são exibidas as tarefas não completadas.
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase()) //Filtra as tarefas com base no texto inserido na barra de pesquisa (search). Ele verifica se o texto da tarefa inclui o texto da pesquisa, independentemente de maiúsculas ou minúsculas.
          )
          .sort((a, b) => //Ordena as tarefas com base no estado sort. Se sort for "Asc" (ascendente), ordena alfabeticamente em ordem crescente. Caso contrário, ordena em ordem alfabética decrescente.
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo, index) => ( //Mapeia cada tarefa filtrada e ordenada para o componente Todo, passando as props necessárias para exibir cada tarefa individualmente na lista. Para cada tarefa, é criada uma instância do componente Todo com um índice único (key={index}), os detalhes da tarefa (todo), e funções para completar ou remover a tarefa.
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;