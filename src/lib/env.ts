import { z } from "zod";

export const env = z
  .object({
    KANVAS_API_KEY: z.string(),
    KANVAS_GRAPH_URL: z.string().url(),
  })
  .parse(process.env);
