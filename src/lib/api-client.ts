import KanvasCore, { genericAuthMiddleware } from "@kanvas/core";
import { env } from "./env";
import { getToken } from "./cookies";

export const apiClient = new KanvasCore({
  url: env.KANVAS_GRAPH_URL,
  key: env.KANVAS_API_KEY,
  middlewares: [genericAuthMiddleware(getToken)],
});
