
const Search = ({ search, setSearch }) => (//Define um componente funcional Search que recebe as props search e setSearch.
  <div className="search">
    <h2>Pesquisar:</h2>
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)} //Define uma função de onChange que atualiza o estado search com o valor digitado no input. Sempre que o valor do input é alterado, a função setSearch é chamada com o novo valor.
      placeholder="Digite para pesquisar..."
    />
  </div>
);

export default Search;