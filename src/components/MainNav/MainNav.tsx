import { usePathname } from "next/navigation";

import NavLink, { NavLinkProps } from "@/lib/components/NavLink/NavLink";

interface Props {
  links: NavLinkProps[];
}

const MainNav: React.FC<Props> = (props) => {
  const { links } = props;
  const path = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map(({ href, ...rest }) => (
        <NavLink key={href} isActive={path === href} href={href} {...rest} />
      ))}
    </nav>
  );
};

export default MainNav;
