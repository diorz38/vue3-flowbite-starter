import { createWebHistory, createRouter } from "vue-router";
import Events from "../views/Events.vue";
import Accordion from "../views/Accordion.vue";
import Carousel from "../views/Carousel.vue";
import Collapse from "../views/Collapse.vue";
import Dial from "../views/Dial.vue";
import Dismiss from "../views/Dismiss.vue";
import Drawer from "../views/Drawer.vue";
import Dropdown from "../views/Dropdown.vue";
import Popover from "../views/Popover.vue";
import Tabs from "../views/Tabs.vue";
import Tooltip from "../views/Tooltip.vue";
import Modal from "../views/Modal.vue";
import InputCounter from "../views/InputCounter.vue";
import Datepicker from "../views/Datepicker.vue";
import PublicLayout from "../layouts/PublicLayout.vue"
import AppLayout from "../layouts/AppLayout.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Dashboard2 from "../views/Dashboard2.vue";

const routes = [
    {
      path: "/",
      component: Home
    },
    {
      path: "/login",
      component: PublicLayout,
      children: [
        {
          path: "",
          component: Login
        }
      ]
    },
    {
      path: "/dashboard",
      component: AppLayout,
      children: [
        {
          path: "",
          component: Dashboard
        },
        {
          path: "2",
          component: Dashboard2
        },
        {
          path: "/events",
          name: "Events",
          component: Events,
        },
        {
          path: "/accordion",
          name: "Accordion",
          component: Accordion,
        },
        {
          path: "/carousel",
          name: "Carousel",
          component: Carousel,
        },
        {
          path: "/collapse",
          name: "Collapse",
          component: Collapse,
        },
        {
          path: "/dial",
          name: "Dial",
          component: Dial,
        },
        {
          path: "/dismiss",
          name: "Dismiss",
          component: Dismiss,
        },
        {
          path: "/drawer",
          name: "Drawer",
          component: Drawer,
        },
        {
          path: "/dropdown",
          name: "Dropdown",
          component: Dropdown,
        },
        {
          path: "/popover",
          name: "Popover",
          component: Popover,
        },
        {
          path: "/tabs",
          name: "Tabs",
          component: Tabs,
        },
        {
          path: "/tooltip",
          name: "Tooltip",
          component: Tooltip,
        },
        {
          path: "/modal",
          name: "Modal",
          component: Modal,
        },
        {
          path: "/input-counter",
          name: "InputCounter",
          component: InputCounter,
        },
        {
          path: "/datepicker",
          name: "Datepicker",
          component: Datepicker,
        },
      ]
    },
  ];

  const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;