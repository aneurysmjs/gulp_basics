module.exports = {

   app_files: {
      js: ['public/components/**/*js'],
      indexHtml: ['public/index.html'],
      tplFiles: ['public/components/**/*js']

   },
   concatOrder: [
      'public/components/app.js',
      'public/components/appRoutes.js',
      'public/components/home/homeModule.js',
      'public/components/home/homeConfig.js',
      'public/components/home/home.js',
      'public/components/home/home.tpl.js',
      'public/components/home/*js',
      'public/components/frameworks/frameworksModule.js',
      'public/components/frameworks/frameworksConfig.js',
      'public/components/frameworks/frameworks.js',
      'public/components/frameworks/frameworks.tpl.js',
      'public/components/frameworks/*js',
      'public/components/about/aboutModule.js',
      'public/components/about/aboutConfig.js',
      'public/components/about/about.js',
      'public/components/about/about.tpl.js',
      'public/components/about/*js',
      'public/components/**/*js'
   ]

};