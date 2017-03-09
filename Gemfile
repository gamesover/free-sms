source 'https://rubygems.org'

ruby '2.3.3'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '5.0.2'

# Use Puma as the app server
gem 'puma', '~> 3.0'

gem 'rubocop', '~> 0.47.1', require: false

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', '~> 1.2016.9', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'devise_token_auth', '~> 0.1.40'
gem 'omniauth'
gem 'pg', '~> 0.19'

group :development, :test do
  gem 'factory_girl_rails', '~> 4.0'
  gem 'faker', '~> 1.7.3'
  gem 'rspec-rails', '~> 3.5'
end

group :development do
  gem 'mailcatcher'
  gem 'spring'
end

group :test do
end

group :production do
end
