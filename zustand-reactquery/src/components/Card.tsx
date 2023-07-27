import React from "react";
import { Repository } from "../types/types";
import useFavoriteReposStore from "../store/favoriteRepos";

interface CardProps {
  repository: Repository;
  isFavorite: boolean;
}

const Card: React.FC<CardProps> = ({ repository, isFavorite }) => {
  const { addFavoriteRepo, removeFavoriteRepo } = useFavoriteReposStore(
    (state) => state
  );

  const toggleFavorite = () => {
    if (!isFavorite) {
      addFavoriteRepo(repository.id);
      return;
    }

    removeFavoriteRepo(repository.id);
  };

  return (
    <div>
      <h2>{repository.name}</h2>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
};

export default Card;
