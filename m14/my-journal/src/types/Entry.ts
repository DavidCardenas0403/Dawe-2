import type { Emoji } from "./Emoji";

export default interface Entry {
  id: string;
  text: string;
  emoji: Emoji;
  date: Date;
}
