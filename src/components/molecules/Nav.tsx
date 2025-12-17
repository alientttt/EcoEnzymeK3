interface NavLink {
  label: string;
  path: string;
}

const navLinks: NavLink[] = [
  { label: "About", path: "#about" },
  { label: "Tutorial", path: "#step" },
  { label: "Team", path: "#member" },
  { label: "Contact", path: "#contact" },
];

const Nav: React.FC = () => {
  return (
    <ul className="hidden lg:flex items-center gap-1">
      {navLinks.map((link) => (
        <li key={link.label}>
          <a href={link.path} className="nav-link group">
            <span className="text-[#F8F7F6] text-xl">{link.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
