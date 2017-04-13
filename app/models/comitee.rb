class Comitee < ApplicationRecord

  def is_full?
    self.users.count >= self.limit
  end

  def self.get_actives
    now = Time.now
    Comitee.all.each do |comitee|
      if now > comitee.start_date && now < comitee.end_date
        return comitee
      end
    end
    nil
  end

  def self.get_passed
    now = Time.now
    Comitee.all.each do |comitee|
      if now > comitee.end_date
        return comitee
      end
    end
    nil
  end

    # def qnt_pays_total
    #   self.users.joins(:payment).where("payments.portion_paid=payments.portions").count
    # end
    #
    # def qnt_pays_partial
    #   self.users.joins(:payment).where("payments.portion_paid>0").where("payments.portion_paid!=payments.portions").count
    # end

    # def self.totalLimit
    #   self.sum(:limit)
    # end

end
