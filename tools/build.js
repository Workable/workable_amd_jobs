{
  appDir: '../www',
  mainConfigFile: '../www/js/common.js',
  dir: '../www-built',
  modules: [{
      name: '../common',

      include: ['jquery',
        'app/lib',
        'app/controller/Base',
        'app/model/Base'
      ]
    }, {
      name: 'app/main',
      exclude: ['../common']
    }

  ]
}