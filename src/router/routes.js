const ViewNotes = () => import("@/pages/ViewNotes.vue");
const ViewStats = () => import("@/pages/ViewStats.vue");
const EditNote = () => import("@/pages/EditNote.vue");

export const routes = [
  { path: "/", redirect: "view-stats" },
  { path: "/view-notes", name: "view-notes", component: ViewNotes },
  {
    path: "/edit-note/:id",
    name: "edit-note",
    component: EditNote,
    props: true,
  },
  { path: "/view-stats", name: "view-stats", component: ViewStats },
];
