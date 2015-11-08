module.exports = {

   app_files: {
      js: ['public/components/**/*js'],
      indexHtml: ['public/index.html'],
      tplFiles: ['public/components/**/*js']

   },
   concatOrder: [
      'public/components/app.js',
      'public/components/home/homeModule.js',
      'public/components/home/*js',
      'public/components/frameworks/frameworksModule.js',
      'public/components/frameworks/*js',
      'public/components/about/aboutModule.js',
      'public/components/about/*js',
      'public/components/**/*js'
   ]

};