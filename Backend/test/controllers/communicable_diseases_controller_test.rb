require "test_helper"

class CommunicableDiseasesControllerTest < ActionDispatch::IntegrationTest
  test "should get no-test-framework" do
    get communicable_diseases_no-test-framework_url
    assert_response :success
  end
end
