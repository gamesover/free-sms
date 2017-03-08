class Sms < ApplicationRecord
  # require 'rest-client'

  TELSTRA_SEND_SMS_URL = 'https://api.telstra.com/v1/sms/messages'.freeze

  def self.send_sms(to, message)
    token = Token.new.get_token

    RestClient.post TELSTRA_SEND_SMS_URL, { to: to, body: message }.to_json, content_type: :json, Authorization: 'Bearer ' + token
  end
end
