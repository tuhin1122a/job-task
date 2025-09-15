"use client";
import { useEffect, useState } from "react";
import RepoFooter from "./components/RepoFooter";
import RepoHeader from "./components/RepoHeader";
import RepoList from "./components/RepoList";

export default function Home() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [seletedLanguage, setSeletedLanguage] = useState("All language");
  const [sortByName, satSortByName] = useState("none");
  const [sortByStars, satSortByStars] = useState("none");
  const [sortByFroks, satSortByFroks] = useState("none");

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/orgs/themefisher/repos?per_page=100&page=1"
        );
        if (!res.ok) throw new Error("Failed To Fetch Repo");
        const data = await res.json();
        const mapped = data.map((repo) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          language: repo.language,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          url: repo.html_url,
        }));
        setRepos(mapped);
      } catch (error) {
        setRrror(error.massage);
      }
    };
    fetchRepo();
  }, []);

  // extract language from repo

  const language = [
    "All Language",
    ...Array.from(new Set(repos.map((repo) => repo.language))),
  ];

  // filter
  const filteredRepos = repos.filter((repo) => {
    const matchSearch = repo.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchLanguage =
      seletedLanguage === "All language" || repo.lamguage === seletedLanguage;
  });
  // sort
  let sortedRepos = [...filteredRepos];
  if (sortByName !== "none") {
    sortedRepos.sort((a, b) =>
      sortByName === "acc"
        ? a.name.localCompare(b.name)
        : b.name.localCompare(a.name)
    );
  }
  if (sortByStars !== "none") {
    sortedRepos.sort((a, b) =>
      sortByStars === "acc" ? a.star - b.satr : b.star - a.star
    );
  }
  if (sortByFroks !== "none") {
    sortedRepos.sort((a, b) =>
      sortByFroks === "acc" ? a.froks - b.froks : b.froks - a.froks
    );
  }
  console.log(repos);
  return (
    <div className="max-w-5xl mx-auto p-4">
      <RepoHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSortByName={satSortByName}
        sortByName={sortByName}
        sortByStars={sortByStars}
        satSortByStars={satSortByStars}
        sortByFroks={sortByFroks}
        satSortByFroks={satSortByFroks}
        language={language}
        seletedLanguage={seletedLanguage}
        setSeletedLanguage={setSeletedLanguage}
      />
      <RepoList repos={repos} />
      <RepoFooter />
    </div>
  );
}
