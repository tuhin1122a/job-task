export default function RepoHeader({
  language,
  searchTerm,
  setSearchTerm,
  setSortByName,
  sortByName,
  sortByStars,
  satSortByStars,
  sortByFroks,
  satSortByFroks,
  seletedLanguage,
  setSeletedLanguage,
}) {
  return (
    <header className=" flex flex-wrap item-center gap-4 mb-6">
      <h1 className="text-2xl font-bold w-full"> ThemeFisher Repo Explorer</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Repo..."
        className=" bordar rounded px-3 py 2 w-full sm:w-64"
      />
      {/* languge sort */}
      <select
        value={seletedLanguage}
        onChange={(e) => setSeletedLanguage(e.target.value)}
        className="border rounded px-3 py-2 "
      >
        {language.map((lan) => (
          <option key={lan} value={lan}>
            {lan}
          </option>
        ))}
      </select>
      {/* Name sort */}
      <select
        value={sortByName}
        onChange={(e) => setSortByName(e.target.value)}
        className="border rounded px-3 py-2 "
      >
        <option value="none">none</option>
        <option value="acc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <select
        value={sortByStars}
        onChange={(e) => satSortByStars(e.target.value)}
        className="border rounded px-3 py-2 "
      >
        <option value="none">none</option>
        <option value="acc">Low-High</option>
        <option value="desc">High-Low</option>
      </select>
      <select
        value={sortByFroks}
        onChange={(e) => satSortByFroks(e.target.value)}
        className="border rounded px-3 py-2 "
      >
        <option value="none">none</option>
        <option value="acc">Low-High</option>
        <option value="desc">High-Low</option>
      </select>
    </header>
  );
}
