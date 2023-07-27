import Card from "./components/Card";
import useFetchRepos from "./hooks/useRepos";
import useFavoriteReposStore from "./store/favoriteRepos";

function App() {
  const { data, isLoading, isError } = useFetchRepos();
  const { favoriteReposIds } = useFavoriteReposStore();

  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error</>;

  return (
    <div>
      {data?.map((repo) => (
        <div key={repo.id}>
          <Card
            key={repo.id}
            repository={repo}
            isFavorite={favoriteReposIds.includes(repo.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
