class Token < ApplicationRecord
  # require 'rest-client'

  CONSUMER_KEY = Rails.application.secrets.telstra_sms_consumer_key
  CONSUMER_SECRET = Rails.application.secrets.telstra_sms_consumer_secret
  CONTENT_TYPE = 'application/x-www-form-urlencoded'.freeze
  TELSTRA_GET_TOKEN_URL = 'https://api.telstra.com/v1/oauth/token'.freeze
  OPTIONS = {
    client_id: CONSUMER_KEY,
    client_secret: CONSUMER_SECRET,
    grant_type: 'client_credentials',
    scope: 'SMS'
  }.freeze

  def get_token
    latest_token = Token.last

    if latest_token.present? && latest_token.expired_time > Time.now
      latest_token.token
    else
      get_token_from_telstra
    end
  end

  private

  def get_token_from_telstra
    response = RestClient.post TELSTRA_GET_TOKEN_URL, OPTIONS, content_type: CONTENT_TYPE

    response_hash = JSON.parse(response.body)
    token = response_hash['access_token']
    expires_in = Time.now + response_hash['expires_in'].to_i

    Token.create(token: token, expired_time: expires_in)

    token
  end
end
