import { NavLink } from "react-router";
import discussionTopics from "../discussion/topics";
import { useMemo, useState } from "react";

const DocSidebarDropdown = () => {
  const activeTopic = useMemo(() => {
    return discussionTopics.find((topic) => topic.to === location.pathname);
  }, [location.pathname]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex-none bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 block md:hidden">
      <div className="flex h-full w-full overflow-hidden items-center">
        <h3 className="font-semibold text-lg text-slate-800 border- border-slate-200 px-4">
          Discussion
        </h3>
        <div className="flex-auto overflow-auto p-2">
          {activeTopic && (
            <div className="flex justify-end items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full cursor-pointer block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium text-sm bg-blue-50 text-blue-600!"
              >
                {activeTopic.title}
              </button>
            </div>
          )}
          {isOpen && (
            <ul className="space-y-2 flex-auto overflow-auto">
              {discussionTopics.filter((topic) => activeTopic ? activeTopic.to !== topic.to : true).map((topic) => (
                <li key={topic.key}>
                  <NavLink
                    to={topic.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium text-sm ${
                        isActive ? "bg-blue-50 text-blue-600!" : ""
                      }`
                    }
                  >
                    {topic.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocSidebarDropdown;
