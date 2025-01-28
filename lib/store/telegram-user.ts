"use client";

import { create } from "zustand";

interface TelegramUserState {
  telegram_id: number | undefined;
  photo_url: string | undefined;
  name: string | undefined;
  setTelegramId: (telegram_id: number | undefined) => void;
  setPhotoUrl: (photo_url: string | undefined) => void;
  setName: (name: string | undefined) => void;
}

// Define the state and actions for the Telegram user
export const useTelegramUserState = create<TelegramUserState>((set) => ({
  telegram_id: undefined,
  photo_url: undefined,
  name: undefined,
  setTelegramId: (telegram_id: number | undefined) => set({ telegram_id: telegram_id }),
  setPhotoUrl: (photo_url: string | undefined) => set({ photo_url: photo_url }),
  setName: (name: string | undefined) => set({ name: name }),
}));
