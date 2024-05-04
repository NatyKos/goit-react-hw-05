import css from './SearchForm.module.css';

export default function SearchForm({ onSubmit }) {
  const handleFormSearch = event => {
    event.preventDefault();
    const form = event.target;
    const query = form.search.value.trim();
    if (query === '') {
      return alert('The search field is empty. Please enter a search value');
    } else {
      onSubmit(query);
    }
    form.reset();
  };
  return (
    <form className={css.searchForm} onSubmit={handleFormSearch}>
      <input
        className={css.searchInput}
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <button className={css.btnSearh} type="submit">
        Search
      </button>
    </form>
  );
}
