import Link from "../Link";

function SideBar() {
  const links = [
    { label: "Dropdown", path: "/dropdown" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
    { label: "Modal", path: "/modal" },
  ];

  const renderdLinks = links.map((link) => {
    return (
      <Link
        key={link.path}
        to={link.path}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 flex flex-col overflow-y-auto items-start">
      {renderdLinks}
    </div>
  );
}

export default SideBar;
