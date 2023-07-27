import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string | null;
  profile: unknown;
  isAuth: boolean;
};

type Actions = {
  setToken: (token: string) => void;
  setProfile: (profile: unknown) => void;
  logout: () => void;
};

const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: null,
      profile: null,
      isAuth: false,
      setToken: (token: string) => set({ token, isAuth: true }),
      setProfile: (profile: unknown) => set({ profile }),
      logout: () => set({ token: null, profile: null, isAuth: false }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
