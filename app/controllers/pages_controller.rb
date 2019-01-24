class PagesController < ApplicationController
  def home
    redirect_to '/home' if params[:page].nil?
  end

  def show
    # Page infos

    if params[:page] === 'experiences'
      @page_title = 'Experiences'
      @page_pic = "https://images.pexels.com/photos/814667/pexels-photo-814667.jpeg?cs=srgb&dl=asphalt-bicycle-daylight-814667.jpg&fm=jpg"
    elsif params[:page] === 'skills'
      @page_title = 'Skills'
      @page_pic = "https://images.pexels.com/photos/814667/pexels-photo-814667.jpeg?cs=srgb&dl=asphalt-bicycle-daylight-814667.jpg&fm=jpg"
    end

    # Renderiza paginas do tipo /(nome_da_pagina)
    if valid_page?
      render template: "pages/#{params[:page]}"
    else
      render file: "public/404.html", status: :not_found
    end
  end

  private

  def valid_page?
    # Pagina valida se atende todas as condicoes abaixo. Caso contrario, ir para erro 404
    conds = []
    # Pagina esta em pages/X
    conds << File.exist?(Pathname.new(Rails.root + "app/views/pages/#{params[:page]}.html.erb"))
    # Pagina esta em pages/areas/X
    conds << File.exist?(Pathname.new(Rails.root + "app/views/pages/areas/#{params[:area]}.html.erb"))

    return conds.include?(true)
  end
end

