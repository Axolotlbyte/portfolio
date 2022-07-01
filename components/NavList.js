const NavList = ({ label }) => {
  return (
    <a href={`#${label.toLowerCase()}`}>
      <li className="flex items-center hover:text-pink-600 hover:scale-105 transition-transform cursor-pointer select-none font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-dot w-6 h-6"
          viewBox="0 0 16 16"
        >
          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        </svg>
        {label}
      </li>
    </a>
  );
};

export default NavList;
