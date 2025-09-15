import { GitFork, Star } from "lucide-react";

export default function RepoCard({ repo }) {
  return (
    <div className="border rounded shadow p-4 flex flex-col gap-2">
      <a href={repo?.url} target="blank" rel=" noopener noreferrer">
        {repo?.name}
      </a>
      <p className=" text-gray-700 text-sm">{repo?.description}</p>
      <div className="flex item-center justify-between">
        <span className=" inline-block bg-gray-100 px-2 py-1 text-sm rounded">
          {repo?.language}
        </span>
        <div className="flex item-center gap-4 text-sm text-gray-600">
          <div className="flex item-center gap-1">
            <Star className="w-4 h-4" /> {repo.stars}
          </div>
          <div className="flex item-center gap-1">
            <GitFork className="w-4 h-4" />
            {repo?.forks}
          </div>
        </div>
      </div>
    </div>
  );
}
