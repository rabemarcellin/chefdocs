import DiscussionIntroduction from "./introduction/DiscussionIntroduction.mdx";
// import StateHierarchie from "./stateHierarchie/StateHierarchie.mdx";
import DiscussionFlow from "./flow/DiscussionFlow.mdx";
import TechnicFlow from "./technicFlow/TechnicFlow.mdx";
import CodelineFlow from "./codelineFlow/CodelineFlow.mdx";
import DiscussionConcerns from "./concerns/DiscussionConcerns.mdx";
import Prompting from "./prompting/Prompting.mdx";
import CompletionLogic from "./completion/CompletionLogic.mdx";
import MessagesView from "./messagesView/MessagesView.mdx";
import {
  introductionTitle,
  introductionPath,
  flowTitle,
  flowPath,
  concernsTitle,
  concernsPath,
  technicFlowTitle,
  technicFlowPath,
  codelineFlowTitle,
  codelineFlowPath,
  promptingTitle,
  promptingPath,
  completionTitle,
  completionPath,
  viewTitle,
  viewPath,
} from "./text";

export default [
  {
    key: "topic-discussion-introduction",
    title: introductionTitle,
    to: introductionPath,
    prev: introductionPath,
    prevTitle: introductionTitle,
    next: flowPath,
    nextTitle: flowTitle,
    element: <DiscussionIntroduction />,
  },
  {
    key: "topic-discussion-flow",
    title: flowTitle,
    to: flowPath,
    prev: introductionPath,
    prevTitle: introductionTitle,
    next: concernsPath,
    nextTitle: concernsTitle,
    element: <DiscussionFlow />,
  },
  {
    key: "topic-discussion-concerns",
    title: concernsTitle,
    to: concernsPath,
    prev: flowPath,
    prevTitle: flowTitle,
    next: technicFlowPath,
    nextTitle: technicFlowTitle,
    element: <DiscussionConcerns />,
  },
  {
    key: "topic-discussion-technic-flow",
    title: technicFlowTitle,
    to: technicFlowPath,
    prev: flowPath,
    prevTitle: flowTitle,
    next: codelineFlowPath,
    nextTitle: codelineFlowTitle,
    element: <TechnicFlow />,
  },
  {
    key: "topic-discussion-codeline-flow",
    title: codelineFlowTitle,
    to: codelineFlowPath,
    prev: technicFlowPath,
    prevTitle: technicFlowTitle,
    next: promptingPath,
    nextTitle: promptingTitle,
    element: <CodelineFlow />,
  },
  {
    key: "topic-discussion-prompting",
    title: promptingTitle,
    to: promptingPath,
    prev: codelineFlowPath,
    prevTitle: codelineFlowTitle,
    next: completionPath,
    nextTitle: completionTitle,
    element: <Prompting />,
  },
  {
    key: "topic-discussion-completion",
    title: completionTitle,
    to: completionPath,
    prev: promptingPath,
    prevTitle: promptingTitle,
    next: completionPath,
    nextTitle: completionTitle,
    element: <CompletionLogic />,
  },
//   {
//     key: "topic-discussion-view",
//     title: viewTitle,
//     to: viewPath,
//     prev: completionPath,
//     prevTitle: completionTitle,
//     next: viewPath,
//     nextTitle: viewTitle,
//     element: <MessagesView />,
//   },
];
