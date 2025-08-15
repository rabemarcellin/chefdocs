import DiscussionDoc from "../doc/discussion/ui/DiscussionDoc";
import DocLayout from "../doc/ui/DocLayout";

export default ([
    {
        key: "route-default",
        // index: true,
        path: "/",
        element: <DocLayout />,
        children: [
            {
                index: true,
                path: "discussion/:title?",
                element: <DiscussionDoc />
            }
        ]
    }
])