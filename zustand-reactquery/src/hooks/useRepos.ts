import { useQuery } from "@tanstack/react-query";
import api from "../api/github";
import { Repositories } from "../types/types";

async function fetchRepos() {
  const { data } = await api.get<Repositories>("/users/hugocruzlfc/repos");
  return data;
}

function useFetchRepos() {
  return useQuery(["repos"], fetchRepos);
}

export default useFetchRepos;
