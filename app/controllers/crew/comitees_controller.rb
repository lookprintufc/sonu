class Crew::ComiteesController < ApplicationController
  before_action :load_comitee, only: [:show, :edit, :update, :destroy]

  def index
    @comitees = Comitee.all
  end

  def edit
  end

  def show
    @users = @comitee.users
  end

  def new
    @comitees = Comitee.new
  end

  def create
    @comitee = Comitee.new(comitee_params)
    if @comitee.save
      redirect_to crew_comitees_path, notice: "Comitê criado com sucesso"
    else
      render :new
    end
  end

  def update
    if @comitee.update(comitee_params)
      redirect_to crew_comitees_path, notice: "Comitê editado com sucesso."
    else
      redirect_to edit_crew_comitee_path(@comitee), alert: "Não foi possível alterar comitê."
    end
  end

  private

  def load_comitee
    @comitee = Comitee.find(params[:id])
  end

  def Comitee_params
    params.require(:Comitee).permit(:name, :grade, :limit, :value_cotist,
                                :value_not_cotist, :start_date, :end_date)
  end

end
