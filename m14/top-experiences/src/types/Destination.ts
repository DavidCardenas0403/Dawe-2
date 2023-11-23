import type Experience from "./Experience";

export default interface Destination {
  name: string;
  slug: string;
  image: string;
  id: number;
  description: string;
  experiences: Array<Experience>;
}
