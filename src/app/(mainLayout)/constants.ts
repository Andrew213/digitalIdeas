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

export const mainLinks: NavLinkProps[] = [
  { title: "СТАТЬ ВОЛОНТЁРОМ", href: routes.volunteering.getRedirectPath() },
  { title: "СДЕЛАТЬ ПОЖЕРТВОВАНИЕ", href: routes.donat.getRedirectPath() },
  { title: "СТАТЬ ПАРТНЁРОМ", href: routes.partners.getRedirectPath() },
];
