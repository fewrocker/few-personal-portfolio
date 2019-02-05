class PagesController < ApplicationController
  def home
    redirect_to '/home' if params[:page].nil?
  end

  def show
    # Page infos

    if params[:page] === 'resume'
      @page_title = 'Resume'
      @page_pic = "https://images.pexels.com/photos/814667/pexels-photo-814667.jpeg?cs=srgb&dl=asphalt-bicycle-daylight-814667.jpg&fm=jpg"
    elsif params[:page] === 'projects'
      @page_title = 'Projects'
      @page_pic = "https://images.pexels.com/photos/814667/pexels-photo-814667.jpeg?cs=srgb&dl=asphalt-bicycle-daylight-814667.jpg&fm=jpg"
    elsif params[:page] === 'contact'
      @page_title = 'Contact'
      @page_pic = "https://images.pexels.com/photos/814667/pexels-photo-814667.jpeg?cs=srgb&dl=asphalt-bicycle-daylight-814667.jpg&fm=jpg"
    end

    # Renderiza paginas do tipo /(nome_da_pagina)
    if valid_page?
      render template: "pages/#{params[:page]}"
    else
      render file: "public/404.html", status: :not_found
    end
  end

  def projects
    if params[:project] === 'everything'
      @page_title = 'Projects > Everything'
      @page_pic = "https://images.pexels.com/photos/814667/pexels-photo-814667.jpeg?cs=srgb&dl=asphalt-bicycle-daylight-814667.jpg&fm=jpg"
    elsif params[:project] === 'spacewagons'
      @page_title = 'Projects > Space Wagons'
      @page_pic = "https://images.pexels.com/photos/814667/pexels-photo-814667.jpeg?cs=srgb&dl=asphalt-bicycle-daylight-814667.jpg&fm=jpg"
    elsif params[:project] === 'blackjack'
      @page_title = 'Projects > Blackjack'
      @page_pic = "https://images.pexels.com/photos/814667/pexels-photo-814667.jpeg?cs=srgb&dl=asphalt-bicycle-daylight-814667.jpg&fm=jpg"
    elsif params[:project] === 'burgershop'
      @page_title = 'Projects > Burgershop'
      @page_pic = "https://images.pexels.com/photos/814667/pexels-photo-814667.jpeg?cs=srgb&dl=asphalt-bicycle-daylight-814667.jpg&fm=jpg"
    end


    if valid_page?
      render template: "pages/projects/#{params[:project]}"
    else
      render file: "public/404.html", status: :not_found
    end
  end

  private

  def valid_page?
    # Check if page exists
    conds = []
    # Check if page is in pages/X
    conds << File.exist?(Pathname.new(Rails.root + "app/views/pages/#{params[:page]}.html.erb"))
    # Check if page is in pages/proects/X
    conds << File.exist?(Pathname.new(Rails.root + "app/views/pages/projects/#{params[:project]}.html.erb"))

    return conds.include?(true)
  end
end

