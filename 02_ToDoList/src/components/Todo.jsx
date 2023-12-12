const Todo = ({ todo, completeTodo, removeTodo }) => { //Define um componente funcional Todo que recebe as props todo, completeTodo e removeTodo.
  //Contém o conteúdo da tarefa, mostrando o texto da tarefa (todo.text) e a categoria da tarefa (todo.category) entre parênteses.
  //Renderiza um botão com a classe CSS complete que, quando clicado, chama a função completeTodo passando o id da tarefa como argumento.
  //Renderiza um botão com a classe CSS remove que, quando clicado, chama a função removeTodo passando o id da tarefa como argumento.
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }} // Cria um contêiner com a classe CSS todo, representando um item na lista de tarefas. O estilo do texto é definido condicionalmente com textDecoration para aplicar uma linha riscada (line-through) caso a tarefa esteja concluída (isCompleted seja verdadeiro).
      >
        <div className="content"> 
          <p>{todo.text}</p>
          <p className="category">({todo.category})</p>
        </div>
        <div>
          <button className="complete" onClick={() => completeTodo(todo.id)}>
            Completar
          </button>
          <button className="remove" onClick={() => removeTodo(todo.id)}>
            x
          </button>
        </div>
      </div>
    );
  };
  
  export default Todo;