
require 'rubygems'
require 'resin/compiler'


def diaf!(fname)
  if File.exists?(fname)
    File.unlink(fname)
  end
end

task :compile do
  additional_files = ['jquery-ui-1.8.18.custom.min.js']
  fname = 'resin-app.deploy.js'

  diaf! fname
  diaf! "js/#{fname}"

  Resin::Compiler.run(additional_files)

  sh "java -jar compiler.jar --js #{fname} --js_output_file js/#{fname} --warning_level QUIET"

  diaf! fname
end


task :deploy => [:compile] do
  sh "git commit js/resin-app.deploy.js -m 'Committing the production .js file for deployment'"
  sh "git push heroku master"
end
