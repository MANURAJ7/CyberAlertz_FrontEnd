import Link from "next/link";
import { LineChart, Search, Home, Bookmark, Settings } from "lucide-react";

export default function FooterComponent() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center px-2">
      <div className="relative w-full max-w-screen-sm overflow-hidden rounded-t-2xl">
        <nav className="backdrop-blur-xl bg-cyan-900 bg-opacity-50 w-full border border-gray-800">
          <ul className="flex justify-around items-center h-16">
            <li>
              <Link
                href="/"
                className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <LineChart className="h-6 w-6 group-hover:text-cyan-400 opacity-150" />
                <span className="text-xs mt-1 group-hover:text-cyan-400">
                  Analytics
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/Search"
                className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <Search className="h-6 w-6 group-hover:text-cyan-400" />
                <span className="text-xs mt-1 group-hover:text-cyan-400">
                  Search
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <Home className="h-6 w-6 group-hover:text-cyan-400" />
                <span className="text-xs mt-1 group-hover:text-cyan-400">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <Bookmark className="h-6 w-6 group-hover:text-cyan-400" />
                <span className="text-xs mt-1 group-hover:text-cyan-400">
                  Bookmarks
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <Settings className="h-6 w-6 group-hover:text-cyan-400" />
                <span className="text-xs mt-1 group-hover:text-cyan-400">
                  Settings
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="absolute inset-x-0 -top-4 h-4 bg-gradient-to-t from-gray-900/30 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
