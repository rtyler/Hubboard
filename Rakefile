
require 'rubygems'
require 'resin/compiler'


def diaf!(fname)
  if File.exists?(fname)
    File.unlink(fname)
  end
end

desc "Compile the single JavaScript file for the application"
task :compile do
  additional_files = ['jquery-ui-1.8.18.custom.min.js']
  fname = 'resin-app.deploy.js'

  diaf! fname
  diaf! "js/#{fname}"

  Resin::Compiler.run(additional_files)

  sh "java -jar compiler.jar --js #{fname} --js_output_file js/#{fname} --warning_level QUIET"

  diaf! fname
end


desc "Deploy to heroku"
task :deploy => [:compile] do
  sh "git commit js/resin-app.deploy.js -m 'Committing the production .js file for deployment' || true"
  sh "git push heroku master"
end
