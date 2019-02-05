class ContactMailer < ApplicationMailer
  def contact(contact)
    @contact = contact
    mail(to: 'santos.felipe13@gmail.com', subject: 'New contact on portfolio website')
  end
end
