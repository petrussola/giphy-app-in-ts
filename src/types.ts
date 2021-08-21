import { ChangeEvent, KeyboardEvent } from "react";

export interface Page {
  [key: string]: number;
}

export type SearchEvent<T> = ChangeEvent<T> & KeyboardEvent<T>;
