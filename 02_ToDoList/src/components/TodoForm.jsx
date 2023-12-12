import { useState } from "react";

const TodoForm = ({ addTodo }) => { //Define um componente funcional TodoForm que recebe a prop addTodo.
  const [value, setValue] = useState(""); //Define o estado value e a função setValue para controlar o valor do input do título da tarefa.
  const [category, setCategory] = useState(""); //Define o estado category e a função setCategory para controlar a categoria selecionada para a tarefa.

//Define a função handleSubmit que é chamada quando o formulário é submetido. Ela previne o comportamento padrão do formulário, verifica se o valor (value) não está vazio e, em seguida, chama a função addTodo (passada como prop) com o título da tarefa (value) e a categoria (category). Após adicionar a tarefa, redefine os estados value e category para vazio.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };
  //Cria um campo de entrada de texto para o título da tarefa. Ele recebe o valor do estado value e chama a função setValue quando o texto é alterado. 
 //Cria um elemento select para selecionar a categoria da tarefa. Ele recebe o valor do estado category e chama a função setCategory quando a categoria é alterada.
  return (
    <div className="todo-form">
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Digite o título"
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Seleciona uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;