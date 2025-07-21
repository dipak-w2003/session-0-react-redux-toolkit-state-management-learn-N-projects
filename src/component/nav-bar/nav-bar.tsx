import { useState } from "react";
interface IToggles {
  usagesContainerLinks: boolean;
  notesContainerLinks: boolean;
}

const NavBar = () => {
  const [toggle, setToggle] = useState<IToggles>({
    notesContainerLinks: false,
    usagesContainerLinks: false,
  });

  class HandleToggle {
    static usageHandleMouseEnter() {
      setToggle({ notesContainerLinks: false, usagesContainerLinks: true });
    }
    static usageHandleMouseLeave() {
      setToggle({ ...toggle, usagesContainerLinks: false });
    }
    static noteHandleMouseEnter() {
      setToggle({ usagesContainerLinks: false, notesContainerLinks: true });
    }
    static noteHandleMouseLeave() {
      setToggle({ ...toggle, notesContainerLinks: false });
    }
  }

  return (
    <nav className="w-full  mb-2 mt-2 relative *:transition-[1s all linear] flex items-center justify-center ">
      <ul className="w-[70%] flex *:px-8 *:py-2 text-lg justify-around  *:bg-black  text-white *:cursor-pointer gap-6 *:rounded-full *:hover:text-black *:transition-colors *:hover:bg-transparent *:border-black *:border">
        <li title="Notes" className="relative">
          <span
            className="hover:font-bold h-full w-full"
            onClick={
              !toggle.notesContainerLinks
                ? HandleToggle.noteHandleMouseEnter
                : HandleToggle.noteHandleMouseLeave
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>
          </span>
          {toggle.notesContainerLinks && <ListContainerLinksNotes />}
        </li>
        <li title="Back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </li>
        <li title="Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </li>
        <li title="Usages" className="relative">
          <span
            className="hover:font-bold h-full w-full"
            onClick={
              !toggle.usagesContainerLinks
                ? HandleToggle.usageHandleMouseEnter
                : HandleToggle.usageHandleMouseLeave
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
          </span>
          {toggle.usagesContainerLinks && <ListContainerLinksUsages />}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

function ListContainerLinksUsages() {
  const [links, setLinks] = useState<
    { link: string; name: string; active: boolean }[]
  >([
    {
      active: true,
      link: "/",
      name: "home",
    },
  ]);

  const handleActiveLink = (link: string, name: string, active: boolean) => {};
  return (
    <div className=" top-[50px] h-[500px] right-0 list-cotainer-links-usages absolute  text-white p-3 w-[500px] bg-black">
      Usage Container
    </div>
  );
}
function ListContainerLinksNotes() {
  return (
    <div className=" top-[50px] h-[500px] left-0 list-cotainer-links-usages absolute  text-white p-3 w-[500px] bg-black">
      Notes Container
    </div>
  );
}
