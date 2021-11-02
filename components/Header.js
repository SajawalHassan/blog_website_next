function Header() {
  return (
    <div id="blog" className="p-5 font-bold text-lg border-b-2 border-gray-400">
      <div className="flex text-center justify-between">
        <h1 className="hover:underline">
          <a href="#blog">Blog App</a>
        </h1>

        <h3 className="hover:underline" title="About me">
          <a href="https://sajawal-portfolio.vercel.app/#about" target="_blank">
            By Sajawal
          </a>
        </h3>
      </div>
    </div>
  );
}

export default Header;
