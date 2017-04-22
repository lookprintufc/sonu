class Comitee < ApplicationRecord
  has_many :users
  mount_uploader :avatar, AvatarUploader
  enum type_event: { "Ensino Superior": 1,  "Ensino Médio": 0}

  def is_full?(user)
    if user.is_cotist == true
      self.users.count >= self.limit_cotist.to_i
    else
      self.users.count >= self.limit.to_i
    end
  end

  def check_limit_cotist_full?(user)
    if user.is_cotist == true
      self.users.count >= self.limit_cotist
    else
      true
    end
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

  def is_active
    now = Time.now
    if now > self.start_date && now < self.end_date
      return true
    end
    return false
  end

  def is_passed
    now = Time.now
    Comitee.all.each do |comitee|
      if now > comitee.end_date
        return true
      end
    end
    return false
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
