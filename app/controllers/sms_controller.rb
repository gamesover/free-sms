class SmsController < ApplicationController
  def send_sms
    to = params[:to]
    message = params[:message]

    Sms.send_sms(to, message)

    head :no_content
  end
end
