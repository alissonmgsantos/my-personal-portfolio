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
          label: 'Home',
          name: 'home',
          file: 'posts/home.md',
          fields: [
            {
              label: 'Hero Title',
              name: 'hero_title',
              widget: 'string',
            },
            {
              label: 'Builder',
              name: 'builder',
              widget: 'list',
              types: [
                {
                  label: 'Header Image',
                  name: 'header',
                  widget: 'object',
                  fields: [
                    {
                      label: 'Title',
                      name: 'title',
                      widget: 'string',
                      required: true,
                    },
                    {
                      label: 'Background Image',
                      name: 'photo',
                      widget: 'image',
                      required: true,
                      media_library: { config: { multiple: false } },
                    },
                  ],
                },
                {
                  label: 'CTA Section',
                  name: 'cta',
                  widget: 'object',
                  fields: [
                    {
                      label: 'Title',
                      name: 'title',
                      widget: 'string',
                      required: true,
                    },
                    {
                      label: 'Link',
                      name: 'link',
                      widget: 'string',
                    },
                  ],
                },
                {
                  label: 'Content',
                  name: 'content',
                  widget: 'object',
                  fields: [
                    {
                      name: 'Content',
                      widget: 'markdown',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
