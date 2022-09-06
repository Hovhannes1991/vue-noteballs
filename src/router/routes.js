import ViewNotes from "@/views/ViewNotes.vue";
import ViewEditNote from "@/views/ViewEditNote.vue";
import ViewStats from "@/views/ViewStats.vue";
import ViewAuth from "@/views/ViewAuth.vue";

export const routes = [
  {
    path: "/",
    name: "notes",
    component: ViewNotes,
    meta: {
      middlewares: "auth",
    },
  },
  {
    path: "/editNote/:id",
    name: "edit-note",
    component: ViewEditNote,
    meta: {
      middlewares: "auth",
    },
  },
  {
    path: "/stats",
    name: "stats",
    component: ViewStats,
    meta: {
      middlewares: "auth",
    },
  },
  {
    path: "/auth",
    name: "auth",
    component: ViewAuth,
    meta: {
      middlewares: "guest",
    },
  },
];
