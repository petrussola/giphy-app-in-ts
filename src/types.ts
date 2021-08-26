import { ChangeEvent, KeyboardEvent } from "react";

export type SearchEvent<T> = ChangeEvent<T> & KeyboardEvent<T>;

export type AppModeType = "trending" | "search";

export type Page = {
  [key in AppModeType]: number;
};
