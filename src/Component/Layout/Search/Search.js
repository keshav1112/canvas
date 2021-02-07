const Search = ({ searchHandler, param }) => {
  return (
    <form>
      <input
        className="search__post"
        type="text"
        id="search"
        placeholder="Search"
        name="query"
        onKeyDown={searchHandler}
      />
      <p className="show__text">{param}</p>
    </form>
  );
};

export default Search;
