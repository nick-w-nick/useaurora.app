import NextLink from "next/link";
import { useRouter } from "next/router";
import { Navbar } from "./Navbar";

const SidebarItem = (props) => {
  return (
    <li>
      <NextLink href={props.link}>
        <a className="px-0 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-gray-200">
          {/* <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span> */}
          <span class="relative">{props.text}</span>
        </a>
      </NextLink>
    </li>
  );
};

const SidebarHeader = (props) => {
  return (
    <h5 class="px-0 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900 dark:text-gray-100">
      {props.text}
    </h5>
  );
};

const Sidebar = () => {
  return (
    <nav class="overflow-y-auto font-medium text-base lg:text-sm">
      <ul>
        <li class="mt-0">
          <SidebarHeader text="Getting Started" />
          <ul>
            <SidebarItem link="/docs/installation" text="Installation" />
            <SidebarItem link="/docs/installation" text="Release Notes" />
            <SidebarItem link="/docs/installation" text="Upgrade Guide" />
          </ul>
        </li>

        <li class="mt-8">
          <SidebarHeader text="Official Plugins" />
          <ul>
            <SidebarItem link="/docs/installation" text="Installation" />
            <SidebarItem link="/docs/installation" text="Release Notes" />
            <SidebarItem link="/docs/installation" text="Upgrade Guide" />
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export const BaseLayout = ({ frontMatter, children, ...rest }) => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="flex justify-center p-8 sm:p-16">
        <div className="h-10 bg-red-600"></div>

        <div className="flex justify-between w-full max-w-4xl sm:px-4 lg:px-8">
          <Sidebar />
          <main className="prose dark:prose-dark max-w-prose w-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};