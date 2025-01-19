"use client";

import { create } from "zustand";
import { WeekDay } from "../service/date";

interface WeekState {
  current_week: Date | undefined;
  start_of_date: Date | null;
  end_of_week: Date | null;
  setCurrentWeek: (week_day: Date | undefined) => void;
  setStartOfWeek: (current_week: Date | undefined) => void;
  setEndOfWeek: (current_week: Date | undefined) => void;
}

export const useWeek = create<WeekState>((set) => ({
  current_week: undefined,
  start_of_date: null,
  end_of_week: null,

  setCurrentWeek: (current_week: Date | undefined) => set({ current_week: current_week }),

  setStartOfWeek: (current_week: Date | undefined) => {
    if (current_week === undefined) {
      const thisWeek = WeekDay.get_this_week();
      set({ start_of_date: thisWeek });
    } else {
      const thisWeek = WeekDay.get_this_week(current_week);
      set({ start_of_date: thisWeek });
    }
  },

  setEndOfWeek: (current_week: Date | undefined) => {
    const thisWeek = WeekDay.get_this_week(current_week, false);
    set({ end_of_week: thisWeek });
  },
}));
