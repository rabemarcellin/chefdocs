export const completionConcerns = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "components",
        type: "folder",
        children: [
          {
            name: "myAux",
            type: "folder",
            children: [
              {
                name: "chat",
                type: "folder",
                children: [
                  // {
                  // name: "AiCompletionMessage.tsx", type: "file" },
                  //{ name: "AiMessage.tsx", type: "file" },
                  // { name: "ChatMessage.tsx", type: "file" },
                  { name: "CompletionMessage.tsx", type: "file" },
                  { name: "ErrorMessage.tsx", type: "file" },
                  // { name: "MyChat.tsx", type: "file" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "features",
        type: "folder",
        children: [
          {
            name: "chat",
            type: "folder",
            children: [
              {
                name: "ui",
                type: "folder",
                children: [
                  {
                    name: "form",
                    type: "folder",
                    children: [{ name: "UserPromptFrom.tsx", type: "file" }], // le formulaire de l'input
                  },
                ],
              },
            ],
          },
          // { name: "imageGeneration", type: "folder" },
        ],
      },
      {
        name: "services",
        type: "folder",
        children: [
          {
            name: "api",
            type: "folder",
            children: [{ name: "chat.ts", type: "file" }],
          },
        ],
      },
      {
        name: "store",
        type: "folder",
        children: [
          {
            name: "features",
            type: "folder",
            children: [
              {
                name: "conversationSlice",
                type: "folder",
              },
            ],
          },
        ],
      },
      // { name: "main.tsx", type: "file" },
    ],
  },
];

export const promptConcerns = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "features",
        type: "folder",
        children: [
          {
            name: "chat",
            type: "folder",
            children: [
              {
                name: "ui",
                type: "folder",
                children: [
                  {
                    name: "form",
                    type: "folder",
                    children: [{ name: "UserPromptFrom.tsx", type: "file" }], // le formulaire de l'input
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "services",
        type: "folder",
        children: [
          {
            name: "api",
            type: "folder",
            children: [{ name: "chat.ts", type: "file" }],
          },
        ],
      },
      {
        name: "store",
        type: "folder",
        children: [
          {
            name: "features",
            type: "folder",
            children: [
              {
                name: "agentSlice",
                type: "folder",
              },
              {
                name: "conversationSlice",
                type: "folder",
              },
            //   {
            //     name: "messageSlice",
            //     type: "folder",
            //   },
            ],
          },
        ],
      },
      // { name: "main.tsx", type: "file" },
    ],
  },
];

export const viewConcerns = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "components",
        type: "folder",
        children: [
          {
            name: "myAux",
            type: "folder",
            children: [
              {
                name: "chat",
                type: "folder",
                children: [
                  // { name: "AiCompletionMessage.tsx", type: "file" },
                  { name: "AiMessage.tsx", type: "file" },
                  { name: "ChatMessage.tsx", type: "file" },
                  //{ name: "CompletionMessage.tsx", type: "file" },
                  { name: "ErrorMessage.tsx", type: "file" },
                  // { name: "MyChat.tsx", type: "file" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "features",
        type: "folder",
        children: [
          {
            name: "conversation",
            type: "folder",
            children: [
              {
                name: "ui",
                type: "folder",
                children: [
                  { name: "ChatMdRenderer", type: "folder" },
                  // { name: "SelectConversationAgent", type: "folder" },
                ],
              },
            ],
          },
          // { name: "imageGeneration", type: "folder" },
        ],
      },
      {
        name: "store",
        type: "folder",
        children: [
          {
            name: "features",
            type: "folder",
            children: [
            //   {
            //     name: "agentSlice",
            //     type: "folder",
            //   },
            //   {
            //     name: "conversationSlice",
            //     type: "folder",
            //   },
             {
                name: "messageSlice",
                type: "folder",
              },
            ],
          },
        ],
      },

      // { name: "main.tsx", type: "file" },
    ],
  },
];

export const concernedFolderAndFiles = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "components",
        type: "folder",
        children: [
          {
            name: "myAux",
            type: "folder",
            children: [
              {
                name: "chat",
                type: "folder",
                children: [
                  { name: "AiCompletionMessage.tsx", type: "file" },
                  { name: "AiMessage.tsx", type: "file" },
                  { name: "ChatMessage.tsx", type: "file" },
                  { name: "CompletionMessage.tsx", type: "file" },
                  { name: "ErrorMessage.tsx", type: "file" },
                  // { name: "MyChat.tsx", type: "file" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "features",
        type: "folder",
        children: [
          {
            name: "chat",
            type: "folder",
            children: [
              {
                name: "ui",
                type: "folder",
                children: [
                  {
                    name: "form",
                    type: "folder",
                    children: [{ name: "UserPromptFrom.tsx", type: "file" }], // le formulaire de l'input
                  },
                ],
              },
            ],
          },
          {
            name: "conversation",
            type: "folder",
            children: [
              {
                name: "ui",
                type: "folder",
                children: [
                  { name: "ChatMdRenderer", type: "folder" },
                  { name: "SelectConversationAgent", type: "folder" },
                ],
              },
            ],
          },
          // { name: "imageGeneration", type: "folder" },
        ],
      },
      {
        name: "services",
        type: "folder",
        children: [
          {
            name: "api",
            type: "folder",
            children: [{ name: "chat.ts", type: "file" }],
          },
        ],
      },
      {
        name: "store",
        type: "folder",
        children: [
          {
            name: "features",
            type: "folder",
            children: [
              {
                name: "agentSlice",
                type: "folder",
              },
              {
                name: "conversationSlice",
                type: "folder",
              },
              {
                name: "messageSlice",
                type: "folder",
              },
            ],
          },
        ],
      },
      // { name: "main.tsx", type: "file" },
    ],
  },
];
