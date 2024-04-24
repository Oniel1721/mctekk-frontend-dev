import KanvasCore, { genericAuthMiddleware } from "@kanvas/core";
import { env } from "./env";

const getKey = async (): Promise<string | null> => {
  return localStorage.getItem("token") || null;
};

export const apiClient = new KanvasCore({
  url: env.KANVAS_GRAPH_URL,
  key: env.KANVAS_API_KEY,
  middlewares: [genericAuthMiddleware(getKey)],
});
