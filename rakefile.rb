task :default => [:ui_tests]
multitask :dependencies => [:node_dependencies]
@run_options = {verbose: Rake.application.options.trace}
NYAN_REPORTER = 'nyan'

task :node_dependencies do
	rake_sh 'npm update'
end

task :git => :ruby_dependencies do 
	require 'bundler/setup'
	require 'git_repository'
	message = ENV['m']
	raise 'no commit message specified' if message.nil?
	git = GitRepository.new
	git.pull
	git.add
	git.commit(message: message )
	git.push
end

task :ui_tests do
	phantom_js('./tests/ui')
end

task :unit_tests do
	test_format = 'qunit'
	mocha("./tests/unit",NYAN_REPORTER,test_format)
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