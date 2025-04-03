import { NavLinkProps } from "@/lib/components/NavLink/NavLink";
import { routes } from "@/routes/routes";

export const navLinks: NavLinkProps[] = [
  { title: "О нас", href: routes.about.getRedirectPath() },
  { title: "Волонтёрство", href: routes.volunteering.getRedirectPath() },
  { title: "Проекты", href: routes.projects.getRedirectPath() },
  { title: "Документы", href: routes.documents.getRedirectPath() },
  { title: "Партнёры", href: routes.partners.getRedirectPath() },
  { title: "Контакты", href: routes.contacts.getRedirectPath() },
  { title: "Блог", href: routes.blog.getRedirectPath() },
];
