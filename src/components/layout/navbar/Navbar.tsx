import NavBarLink from "@/components/layout/navbar/NavBarLink";

const thisLinks = [
  { title: "Home", href: "/" },
  { title: "Blogs", href: "/blogs" },
  { title: "About", href: "/about" },
];

const Navbar = () => {
  // temporary...
  const isAdmin = false;
  const isLogin = false;

  return (
    <nav className="px-6 py-4 bg-white shadow">
      <div className="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <div>
            <a href="#" className="text-xl font-bold text-gray-800 md:text-2xl">
              Blog
            </a>
          </div>
          <div>
            <button
              type="button"
              className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-col hidden md:flex md:flex-row md:-mx-4">
          {thisLinks.map((link, index) => (
            <NavBarLink item={link} key={index} />
          ))}
          {isLogin ? (
            <>
              {isAdmin && (
                <NavBarLink item={{ title: "Admin", href: "/admin" }} />
              )}
              <button className="px-2 py-1 bg-gray-400 rounded-md text-sm font-semibold">Logout</button>
            </>
          ) : (
            <NavBarLink item={{ title: "Login", href: "/login" }} />
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
