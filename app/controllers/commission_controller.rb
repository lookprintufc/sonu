class CommissionController < ApplicationController
	before_action :get_commission,  only: [:show]
	layout 'site'
def show
end


private
def get_commission
	@commission = Commission.find(params[:id]) 
end

end
