class ApiKeyController < ApplicationController
  private
  def soundcloud
    Rails.application.secrets.soundcloud_api_key
  end

  def youtube
    Rails.application.secrets.youtube_api_key
  end
end
