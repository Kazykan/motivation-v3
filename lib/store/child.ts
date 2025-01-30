"use client";

import { create } from "zustand";

// Тут данные по текущему ребенку который выбран
interface ChildProfileState {
  child_telegram_id: string | undefined;
  setChildTelegramId: (child_telegram_id: string | undefined) => void;
}

export const useChildProfile = create<ChildProfileState>((set) => ({
  child_telegram_id: undefined,
  setChildTelegramId: (child_telegram_id: string | undefined) => set({ child_telegram_id: child_telegram_id }),
}));
