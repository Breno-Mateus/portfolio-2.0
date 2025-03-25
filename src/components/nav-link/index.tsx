import { Link } from "react-scroll";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ to, children, onClick }: NavLinkProps) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    className="hover:text-colorStyle hover:cursor-pointer hover:underline transition duration-500"
    role="link"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        document
          .getElementById(`${to}`)
          ?.scrollIntoView({ behavior: "smooth" });
        if (onClick) onClick();
      }
    }}
  >
    {children}
  </Link>
);

export default NavLink;
