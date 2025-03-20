interface NavbarProps {
  name: string;
  navItems: { label: string; targetId: string }[]; // Update navItems to include both label and targetId
}

function Navbar({ name, navItems }: NavbarProps) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          {name}
        </a>
        <div className="d-flex flex-nowrap">
          <ul className="navbar-nav d-flex flex-row gap-4">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={`#${item.targetId}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
