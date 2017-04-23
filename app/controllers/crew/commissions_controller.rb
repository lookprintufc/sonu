class Crew::CommissionsController < Crew::BaseController



def new
@commissions = Commission.new
end

def create
    @commissions = Commission.new(commission_params)
    respond_to do |format|
      if @commissions.save
        format.html { redirect_to commissions_path }
	end
	end
end

def set_comitees
    @commissions = Comission.find(params[:id])
  end

def commission_params
    params.require(:commission).permit(:title, :description, :photo)
 end






end
