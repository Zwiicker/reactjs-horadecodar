const Filter = ({ filter, setFilter, setSort }) => { //Define um componente funcional Filter que recebe as props filter, setFilter, e setSort.
  return (
    //Renderiza um elemento select que permite ao usuário escolher um filtro de status para exibir tarefas completas, incompletas ou todas. O valor selecionado é controlado pelo estado filter, e sempre que o valor é alterado, a função setFilter é chamada com o novo valor selecionado.
    //Renderiza um botão "Asc" para ordenação ascendente. Quando clicado, chama a função setSort com o valor "Asc".
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>

        <div>
          <p>Ordem alfabética:</p>
          <button onClick={() => setSort("Asc")}>Asc</button> 
          <button onClick={() => setSort("Desc")}>Desc</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;