import { initializeApp, type FirebaseApp } from "firebase/app";
import { Database, get, getDatabase, ref } from "firebase/database";
import { z } from "zod";

export type Item = z.infer<typeof Item>;
export const Item = z.object({
  id: z.number(),
  by: z.optional(z.string()),
  descendants: z.optional(z.number()),
  kids: z.optional(z.array(z.number())),
  score: z.optional(z.number()),
  time: z.optional(z.number()),
  title: z.optional(z.string()),
  type: z.optional(z.string()),
  url: z.optional(z.string()),
});

export type Story = Item & { type: "story" };

export class Client {
  app: FirebaseApp;
  db: Database;

  constructor() {
    this.app = initializeApp({
      databaseURL: "https://hacker-news.firebaseio.com",
    });
    this.db = getDatabase(this.app);
  }

  async get_item(itemId: number): Promise<Item> {
    const storyData = (await get(ref(this.db, `v0/item/${itemId}`))).val();
    if (storyData === null) throw new Error(`Failed to fetch item: ${itemId}`);
    return storyData;
  }

  async get_new_stories(limit: number = 100): Promise<Story[]> {
    const itemIds: number[] | null = (
      await get(ref(this.db, `v0/newstories`))
    ).val();
    if (itemIds === null) throw new Error("Failed to fetch new stories");
    return (
      await Promise.all(
        itemIds.slice(0, limit).map(async (itemId) => {
          try {
            return [(await this.get_item(itemId)) as Story];
          } catch {
            return [] as Story[];
          }
        }),
      )
    ).flat();
  }

  async get_top_stories(limit: number = 100): Promise<Story[]> {
    const itemIds: number[] | null = (
      await get(ref(this.db, `v0/topstories`))
    ).val();
    if (itemIds === null) throw new Error("Failed to fetch new stories");
    return (
      await Promise.all(
        itemIds.slice(0, limit).map(async (itemId) => {
          try {
            return [(await this.get_item(itemId)) as Story];
          } catch {
            return [] as Story[];
          }
        }),
      )
    ).flat();
  }
}
