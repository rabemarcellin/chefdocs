import React from "react";

export type TreeNode = {
  name: string;
  type: "folder" | "file";
  children?: TreeNode[];
};

type Props = {
  data: TreeNode[];
  folderIcon?: string;
  fileIcon?: string;
};

 const FolderTreeText: React.FC<Props> = ({
  data,
  folderIcon = "🗂️",
  fileIcon = "📄",
}) => {
  const lines: string[] = [];

  const buildTree = (
    nodes: TreeNode[],
    prefix = "",
    isLastArray: boolean[] = []
  ) => {
    nodes.forEach((node, index) => {
      const isLast = index === nodes.length - 1;

      let linePrefix = "";
      for (let i = 0; i < isLastArray.length; i++) {
        linePrefix += isLastArray[i] ? "    " : "│   ";
      }
      linePrefix += prefix ? (isLast ? "└── " : "├── ") : "";

      lines.push(
        `${linePrefix}${node.type === "folder" ? folderIcon : fileIcon} ${node.name}`
      );

      if (node.children?.length) {
        buildTree(node.children, prefix + " ", [...isLastArray, isLast]);
      }
    });
  };

  buildTree(data);

  return (
    <pre
      style={{
        fontFamily:
          "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        whiteSpace: "pre",
        fontSize: "0.9rem",
        lineHeight: "1.4",
      }}
    >
      {lines.join("\n")}
    </pre>
  );
};

export default FolderTreeText;