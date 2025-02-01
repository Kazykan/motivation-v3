"use client";

import { create } from "zustand";

// Тут данные по текущему ребенку который выбран
interface ChildProfileState {
  child_telegram_id: string | undefined;
  setChildTelegramId: (child_telegram_id: string | undefined) => void;
  child_id: number | undefined;
  setChildId: (child_id: number | undefined) => void;
}

export const useChildProfile = create<ChildProfileState>((set) => ({
  child_telegram_id: undefined,
  setChildTelegramId: (child_telegram_id: string | undefined) => set({ child_telegram_id: child_telegram_id }),
  child_id: undefined,
  setChildId: (child_id: number | undefined) => set({ child_id: child_id }),
}));
