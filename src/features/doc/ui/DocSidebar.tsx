import { Link, NavLink } from "react-router";
import discussionTopics from "../discussion/topics";

const DocSidebar = () => {
  return (
    <div className="w-64 flex-none bg-white/95 backdrop-blur-sm h-full rounded-xl shadow-lg border border-white/20 hidden md:block">
      <div className="flex flex-col h-full overflow-hidden">
        <h3 className="font-semibold text-lg text-slate-800 pb-2 border-b border-slate-200 p-4">
          Discussion
        </h3>
        <ul className="space-y-2 flex-auto overflow-auto">
          {discussionTopics.map((topic) => (
            <li key={topic.key}>
              <NavLink 
                to={topic.to}
                
                className={({ isActive}) => (
                  `block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium text-sm ${isActive ? "bg-blue-50 text-blue-600!" : ""}`
                )}
              >
                {topic.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DocSidebar;
