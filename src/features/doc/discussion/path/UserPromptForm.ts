const UserPromptForm = [{
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
        // { name: "imageGeneration", type: "folder" },
      ],
    },
  ],
}];

export default UserPromptForm;
