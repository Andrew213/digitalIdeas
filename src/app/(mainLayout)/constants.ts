import { NavLinkProps } from "@/lib/components/NavLink/NavLink";
import { routes } from "@/routes/routes";

export const data = {
  mainTitle: "Центр цифровизации социальных инициатив",
  links: [
    { title: "Стать волонтером", link: "/volunteer" },
    { title: "Сделать пожертвование", link: "/donat" },
    { title: "Стать партнером", link: "/partner" },
  ],
};

// export const navLinks: NavLinkProps[] = [
//   { title: "О нас", href: routes.about.getRedirectPath() },
//   { title: "Проекты", href: routes.projects.getRedirectPath() },
//   { title: "Партнёры", href: routes.partners.getRedirectPath() },
//   { title: "Блог", href: routes.blog.getRedirectPath() },
//   { title: "Волонтёрство", href: routes.volunteering.getRedirectPath() },
//   { title: "Документы", href: routes.documents.getRedirectPath() },
//   { title: "Контакты", href: routes.contacts.getRedirectPath() },
// ];

export const mainLinks: NavLinkProps[] = [
  { title: "СТАТЬ ВОЛОНТЁРОМ", href: routes.volunteering.getRedirectPath() },
  { title: "СДЕЛАТЬ ПОЖЕРТВОВАНИЕ", href: routes.donat.getRedirectPath() },
  { title: "СТАТЬ ПАРТНЁРОМ", href: routes.partners.getRedirectPath() },
];
