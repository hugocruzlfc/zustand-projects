import { create } from "zustand";
import { combine } from "zustand/middleware";

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

// const useBearStore = create<BearState>()((set) => ({
//   bears: 0,
//   increase: (by) => set((state) => ({ bears: state.bears + by })),
// }));

const useBearStore = create(
  combine({ bears: 0 }, (set) => ({
    increasePopulation: () =>
      set((state) => ({
        bears: state.bears + 1,
      })),
    decreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
    removeAllBears: () => set({ bears: 0 }),
  }))
);

export default useBearStore;
