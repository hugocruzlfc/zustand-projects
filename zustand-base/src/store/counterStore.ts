import { create } from "zustand";

interface Post {
  id: number;
  title: string;
  body: string;
}
interface CounterState {
  title: string;
  count: number;
  increment: (value: number) => void;
  posts: Post[];
  getPosts: () => Promise<void>;
  clearStore: () => void;
  multiply: (value: number) => void;
}

const useCounterStore = create<CounterState>((set, get) => ({
  title: "Counter",
  count: 0,
  posts: [],
  increment: (value: number) =>
    set((state) => ({ count: state.count + value })),

  getPosts: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    set((state) => ({ ...state, posts }));
  },
  clearStore: () => set(() => ({ count: 0, posts: [] })),
  multiply: (value: number) => {
    const { count } = get();
    set(() => ({ count: count * value }));
  },
}));

export default useCounterStore;
