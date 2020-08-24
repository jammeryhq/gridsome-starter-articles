var embedConfig = {
  enabledProviders: ['Youtube', 'Vimeo', 'Gist', 'Codepen', 'JSFiddle', 'Giphy'],
  Youtube: {
    template: './src/embedTemplates/Youtube.hbs'
  },
  Vimeo: {
    template: './src/embedTemplates/Vimeo.hbs'
  },
  Giphy: {
    template: './src/embedTemplates/Giphy.hbs'
  },
  JSFiddle: {
    template: './src/embedTemplates/JSFiddle.hbs',
    secureConnection: true
  },
  Codepen: {
    template: './src/embedTemplates/Codepen.hbs'
  },
  Gist: {
    omitStylesheet: false
  }

};

module.exports = {
  siteName: 'Gridsome',
  permalinks: {
    trailingSlash: false
  },
  icon: {
    favicon: {
      src: './src/resources/images/favicon.png',
      sizes: [16, 32, 96]
    },
    touchicon: {
      src: './src/resources/images/favicon.png',
      sizes: [76, 152, 120, 167],
      precomposed: true
    }
  },
  plugins: [{
    use: 'gridsome-plugin-tailwindcss',
    options: {
      tailwindConfig: './tailwind.config.js'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'CustomPage',
      baseDir: './content/pages',
      path: '*.md'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'Article',
      baseDir: './content/articles',
      path: '**/*.md',
      refs: {
        tags: {
          typeName: 'Tag',
          create: true
        }
      }
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'News',
      baseDir: './content/news',
      path: '*.md',
      refs: {
        tags: {
          typeName: 'Tag',
          create: true
        }
      }
    }
  }
    // {
    //   use: 'gridsome-plugin-flexsearch',
    //   options: {
    //     searchFields: ['title'],
    //     collections: [{
    //       typeName: 'SomeType',
    //       indexName: 'SomeType',
    //       fields: ['title', 'handle', 'description']
    //     }]
    //   }
    // }
  ],
  templates: {
    Article: [{
      path: '/articles/:title'
    }],
    Tag: [{
      path: '/tag/:title',
      component: './src/templates/Tag.vue'
    },
    {
      name: 'resourcesByTag',
      path: '/resources/filter/tags/:title',
      component: './src/templates/ResourceTagFilter.vue'
    }
    ],
    News: [{
      path: '/news/:title',
      component: './src/templates/News.vue'
    }],
    CustomPage: [{
      path: '/pages/:title',
      component: './src/templates/CustomPage.vue'
    }]
    // ResourceType: [{
    //   name: 'resourcesByType',
    //   path: '/resources/filter/:type/:title',
    //   component: './src/templates/ResourceTypeFilter.vue'
    // }]
  },
  transformers: {
    remark: {
      plugins: [
        ['@noxify/gridsome-plugin-remark-embed', embedConfig],
        ['gridsome-plugin-remark-prismjs-all', {
          noInlineHighlight: false,
          showLineNumbers: true
        }]
      ]
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@customPageImage', '@/../content/pages');
  }
}
