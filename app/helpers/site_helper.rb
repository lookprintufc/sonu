module SiteHelper
	 def active_class(link_path)
    active = current_page?(link_path) ? "active" : ""
  end
end
