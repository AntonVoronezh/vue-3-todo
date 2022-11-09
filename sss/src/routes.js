import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from "vue-router";
const routerHistory = createWebHashHistory();

import HomePage from "./pages/homePage";
import TagsPage from "./pages/tagsPage";
import FormPage from "./pages/formPage";
import NotFoundPage from "./pages/notFound";
import EditPage from "@/pages/editPage";

const routes = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/tags",
      name: "tags",
      component: TagsPage,
    },
    {
      path: "/form",
      name: "form",
      component: FormPage,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: EditPage,
    },
    {
      path: "/:CatchAll(.*)",
      name: "404",
      component: NotFoundPage,
    },
  ],
});

export default routes;
