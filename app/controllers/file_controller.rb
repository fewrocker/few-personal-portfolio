class FileController < ApplicationController
  def download
    send_file "app/files/#{params[:filename]}.pdf"
  end
end
