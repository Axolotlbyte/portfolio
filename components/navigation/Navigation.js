import { navlinks } from "../../constants";
import NavList from "./NavList";

const Navigation = () => {
    return (
        <nav className="fixed top-6 right-6 h-auto z-50 text-teal-500">
        <ul className="grid gap-4 text-2xl lg:text-4xl">
          {navlinks.map((link) => (
            <NavList key={link.label} label={link.label} />
          ))}
        </ul>
      </nav>
    )
}

export default Navigation;