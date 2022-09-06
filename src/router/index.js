import { createRouter, createWebHistory } from "vue-router";

import { routes } from "./routes";
import * as middlewares from "@/middlewares/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// navigation guards
router.beforeEach(async (to, from) => {
  if (from.meta?.middlewares) {
    const guards = Array.isArray(from.meta.middlewares)
      ? from.meta.middlewares
      : [from.meta.middlewares];
    console.log(guards);
    guards.forEach((guard) => {
      middlewares[guard]();
    });
  }
  // const storeAuth = useStoreAuth();
  // if (!storeAuth.user.id && to.name !== "auth") {
  //   return { name: "auth" };
  // }
  // if (storeAuth.user.id && to.name === "auth") {
  //   return false;
  // }
});

export default router;
