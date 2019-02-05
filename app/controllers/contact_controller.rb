class ContactController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    c = Contact.new

    c.name = params[:name]
    c.email = params[:email]
    c.phone = params[:phone]
    c.subject = params[:subject]
    c.message = params[:message]

    c.save

    ContactMailer.contact(c).deliver_now

    redirect_to "/contact?email=sent"
  end
end
