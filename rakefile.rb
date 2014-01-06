task :default => [:ui_tests]
@run_options = {verbose: Rake.application.options.trace}
NYAN_REPORTER = 'nyan'

task :node_dependencies do
	rake_sh 'npm update'
end

task :ui_tests => [:node_dependencies] do
	phantom_js('./tests')
end

def committing_code?
	ENV['m'] != nil
end

def mocha(test_location,reporter,test_format)
	rake_sh "mocha #{test_location}  --ui #{test_format} --recursive --reporter #{reporter}"	
end

def phantom_js(test_location)
	folders = Dir.glob test_location+'/**/*/'
	folders.each do |folder|
  		next if folder == '.' or folder == '..'
  		rake_sh "phantomjs #{test_location}/runner.js #{folder}/*.html"
	end
end

def rake_sh(command)
	sh command, @run_options
end