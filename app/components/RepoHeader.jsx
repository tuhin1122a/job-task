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
        placeholder="Search Repo..."
        className=" bordar rounded px-3 py 2 w-full sm:w-64"
      />
      {/* languge sort */}
      <select className="border rounded px-3 py-2 ">
        <option>Language</option>
      </select>
      {/* Name sort */}
      <select className="border rounded px-3 py-2 ">
        <option>none</option>
        <option>A-Z</option>
        <option>Z-A</option>
      </select>
      <select className="border rounded px-3 py-2 ">
        <option>none</option>
        <option>low-High</option>
        <option>High-Low</option>
      </select>
      <select value="Forks " className="border rounded px-3 py-2 ">
        <option>none</option>
        <option>Low-High</option>
        <option>High-Low</option>
      </select>
    </header>
  );
}
