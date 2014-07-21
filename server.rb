require 'json'
require 'sinatra'

use Rack::Static, urls: ["/vendor/assets/javascripts"], root: File.expand_path('..', settings.root)

helpers do

  def script_tag(src)
    %(<script src="#{src}" type="text/javascript"></script>)
  end

end

get '/' do
  erb :index
end

post '/double' do
  content_type :json
  x = if params[:x]
        params[:x].to_i
      else
        0
      end
  { value: 2 * x }.to_json
end

get '/test' do
  send_file './views/SpecRunner.html'
end

get '/time' do
  content_type :json
  { timestamp: Time.now.to_i }.to_json
end


