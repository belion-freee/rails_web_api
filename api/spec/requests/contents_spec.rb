require 'rails_helper'

RSpec.describe "Contents", type: :request do
  describe "GET /api/v1/contents" do
    it "success" do
      get api_v1_contents_path
      expect(response).to have_http_status(200)
    end
  end

  describe "SHOW /api/v1/content/{id}" do
    it "success" do
      content = Content.create(body: "show test")
      get api_v1_content_path(content)
      expect(response).to have_http_status(200)
    end
  end

  describe "POST /api/v1/contents" do
    it "success" do
      post api_v1_contents_path, params: { content: { body: "test" } }
      expect(response).to have_http_status(201)
    end
  end

  describe "PUT /api/v1/content/{id}" do
    it "success" do
      content = Content.create(body: "before update test")
      put api_v1_content_path(content), params: { content: { body: "after update test" } }
      expect(response).to have_http_status(200)
    end
  end

  describe "DELETE /api/v1/contents/{id}" do
    it "success" do
      content = Content.create(body: "delete test")
      delete api_v1_content_path(content)
      expect(response).to have_http_status(204)
    end
  end
end
