import RepoCard from "./Repocard";

export default function RepoList({ repos }) {
  return (
    <main className=" grid gap-4 sm:grit-cols-2">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </main>
  );
}
