import Link from "next/link";

function Layout({ children }) {
  return (
    <div>
      <header className="flex justify-between mt-5 container  xl:max-w-screen-xl">
        <a
          href="https://dairy-shop.ir"
          className="font-robik text-blue-400 text-sm md:text-2xl"
        >
          dariyshop
        </a>
        <dvi className="flex gap-3 font-light text-gray-600 text-sm md:text-lg">
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </dvi>
      </header>
      {children}

      <footer>
        <p className="bg-blue-400 p-2 text-center text-white tracking-wider text-xs md:text-md">
         Made with
          &#128151;
         by Mohammad Mazari
        </p>
      </footer>
    </div>
  );
}

export default Layout;
