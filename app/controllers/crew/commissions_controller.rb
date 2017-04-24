class Crew::CommissionsController < Crew::BaseController
before_action :set_commission, only: [ :edit, :update, :destroy]

	def index
	@commissions = Commission.all
	end

	def new
	@commissions = Commission.new
	end
	
	def edit
  	
  	end
	
	def create
	    @commissions = Commission.new(commission_params)
	    if @commissions.save
      		flash[:success] = "criado com sucesso."
      		redirect_to crew_commissions_path
    	else
      		render :new
    end
end
	def update
    if @commissions.update(commission_params)
      flash[:success] = "editado com sucesso."
      redirect_to crew_commissions_path
    else
      redirect_to edit_crew_commissions_path(@commissions), alert: "Não foi possível alterar."
    end
  end
	


  	private

	def set_commission
	    @commission = Commission.find(params[:id])
	  end

	def commission_params
	    params.require(:commission).permit(:title, :description, :avatar)
	 end


end
