class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    def current_user
        User.find_by(id: session[:user_id])
    end
    
    def logged_in?
        !!session[:user_id]
    end

    def sig_base(method, url, oauth_params)
        sig = method.upcase + "&" + CGI.escape(url) + "&"
        sorted_params = oauth_params.collect{|k,v| [ URI.escape(k), URI.escape(v)] }.sort
        sig + CGI.escape(sorted_params.collect!{|arr| arr.join("=")}.join("&"))
    end
    
    def sig_key
        CGI.escape(ENV['SECRET']) + "&" 
    end

    def sig_generator(method, url, oauth_params)
        base = sig_base(method, url, oauth_params)
        key = sig_key
        Base64.strict_encode64(OpenSSL::HMAC.hexdigest("SHA256", key, base))
    end

end
