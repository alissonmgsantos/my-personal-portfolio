export default {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'alissonmgsantos/my_portfolio',
    branch: 'develop',
  },
  media_folder: 'public/img',
  public_folder: 'img',
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      files: [
        {
          label: 'Layout',
          name: 'layout',
          file: 'posts/layout.md',
          fields: [
            {
              label: 'Profile',
              name: 'profile',
              widget: 'object',
              fields: [
                {
                  label: 'Name',
                  name: 'name',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Location',
                  name: 'location',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Github',
                  name: 'github',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Linkedin',
                  name: 'linkedin',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'URL Image',
                  name: 'image',
                  widget: 'string',
                  required: true,
                },
              ],
            },
            {
              label: 'Languages',
              name: 'languages',
              widget: 'list',
              fields: [
                {
                  label: 'Name',
                  name: 'name',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Percentage',
                  name: 'percentage',
                  widget: 'string',
                  required: true,
                },
              ],
            },
            {
              label: 'Skills',
              name: 'skills',
              widget: 'list',
              fields: [
                {
                  label: 'Name',
                  name: 'name',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Percentage',
                  name: 'percentage',
                  widget: 'string',
                  required: true,
                },
              ],
            },
            {
              label: 'Knowledges',
              name: 'knowledges',
              widget: 'list',
              fields: [
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'string',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
