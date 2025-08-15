import { useEffect } from "react";
import DocNavbar from "./DocNavbar";
import DocSidebar from "./DocSidebar";
import { Outlet, useNavigate, useParams } from "react-router";

const DocLayout = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!title) {
      navigate(`/discussion/introduction`);
    }
  }, [title, navigate]);

  return (
    <div className="bg-slate-200 h-screen w-screen overflow-hidden flex flex-col">
      <DocNavbar />
      <div className="flex p-2 gap-4 flex-auto overflow-hidden">
        <DocSidebar />
        <div className="overflow-hidden flex-auto rounded-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DocLayout;
