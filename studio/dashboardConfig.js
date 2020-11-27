export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc0dbd89ad37b29ff2583bf',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-c4wh7iz1',
                  apiId: '05a956e3-2da8-4830-96f6-07b03d739fd8'
                },
                {
                  buildHookId: '5fc0dbd8613244ab83f9687e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-2oc6nwbm',
                  apiId: 'd1587257-b17a-43da-b891-a4538466716b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/caoimhlab/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-2oc6nwbm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
