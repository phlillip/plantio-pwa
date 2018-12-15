require "stringex"
class Jekyll < Thor
  desc "new", "create a new post"
  method_option :editor, :default => "nano"
  def new(*title)
    title = title.join(" ")
    date = Time.now.strftime('%Y-%m-%d')
    time = Time.now.strftime('%Y-%m-%d %H:%M:%S')
    filename = "_posts/#{date}-#{title.to_url}.markdown"

    if File.exist?(filename)
      abort("#{filename} already exists!")
    end

    puts "Creating new post: #{filename}"
    open(filename, 'w') do |post|
      post.puts "---"
      post.puts "layout: thought"
      post.puts "comments: false"
      post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
      post.puts "date: \"#{time}\""
      post.puts "categories: thoughts"
      post.puts "---"
    end

    system(options[:editor], filename)
  end
end
