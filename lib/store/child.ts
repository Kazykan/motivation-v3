"use client";

import { create } from "zustand";

interface ChildProfileState {
  child_telegram_id: number | undefined;
  setChildTelegramId: (week_day: number | undefined) => void;
}

export const useChildProfile = create<ChildProfileState>((set) => ({
  child_telegram_id: undefined,
  setChildTelegramId: (child_telegram_id: number | undefined) => set({ child_telegram_id: child_telegram_id }),
}));
