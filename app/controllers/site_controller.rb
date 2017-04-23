class SiteController < ApplicationController
  layout 'site'

  def index

  end

  def academic
  end

  def beta
  end

  def certificates
  end

  def comitees
    @commissions = Commission.all
  end
  def set_comitees
    @commissions = Comission.find(params[:id])
  end
  def commission_params
    params.require(:commission).permit(:title, :description, :photo)
  end
  def contact
  end

  def cronogram
  end

  def diretory
  end

  def faq
  end

  def fortaleza
  end

  def inscription
  end

  def muns
  end

  def parties
  end

  def partners
  end

  def schools
  end

  def secretary
  end

  def show_card
  end

  def solidary
  end

  def sonu_certificates
  end

  def speeches
  end

  def story
  end

  
end
