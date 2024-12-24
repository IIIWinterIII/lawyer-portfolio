import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Главная",
    icon: "",
  },
  {
    path: "/services",
    component: Services,
    name: "Услуги",
    icon: "",
    subItems: [
      { path: "/services/web-development", name: "Суды" },
      { path: "/services/seo", name: "Состовление документов" },
    ],
  },
  {
    path: "/about",
    component: About,
    name: "Обо мне",
    icon: "",
  },
  {
    path: "/FAQ",
    component: FAQ,
    name: "Часто задаваемые вопросы",
    icon: "",
  },
  {
    path: "/contact",
    component: Contact,
    name: "Контакты",
    icon: "",
  },
];

export default routes;
