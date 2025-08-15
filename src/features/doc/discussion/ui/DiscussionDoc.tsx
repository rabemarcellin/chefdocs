import { useMemo } from "react";
import { useLocation } from "react-router"
import discussionTopics from "../topics"
import DocNavigationButton from "../../ui/DocNavigationButton";

const DiscussionDoc = () => {
  const location = useLocation();

  const topic = useMemo(() => {
    const ref = discussionTopics.find(topic => location.pathname.startsWith(topic.to))
    if(ref) return ref
    
    const introductionTopic = discussionTopics.find(topic => topic.title === "Introduction");
    return introductionTopic;
  }, [location])

  
  return topic ? (
    <div className="flex flex-col gap-4 h-full">
      <div className="mdx-content flex-auto overflow-hidden flex p-0! relative">
        <div className="overflow-auto m-['10px auto'] p-[10px 20px] w-full"
          style={{
            margin: "10px",
            padding: "10px 20px"
          }}
        >
          <div
            className="pointer-events-none absolute left-0 top-0 w-full h-8 z-10"
            style={{
              background: "linear-gradient(to bottom, white 80%, transparent 100%)"
            }}
          />
          {topic.element}
        </div>
      </div>
      <div className="flex gap-2 mb-4 justify-between">
        <DocNavigationButton title={topic.prevTitle || topic.title} to={topic.prev} prev />
        <DocNavigationButton title={topic.nextTitle || topic.title} to={topic.next} next />
      </div>
    </div>
  ): (<></>)
}

export default DiscussionDoc