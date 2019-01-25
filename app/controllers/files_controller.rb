class FilesController < ApplicationController
  def download
    send_file "app/files/#{params[:filename]}.#{params[:format]}"
  end
end
