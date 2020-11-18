package com.TeamD;

import java.io.Serializable;

import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;


@XmlRootElement
public class LoginDetails implements Serializable{
	
	@FormParam("email")
	private String email;
	@FormParam("password")
	private String password;
	

	public LoginDetails() {
		
	}
	public LoginDetails(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "LoginDetails [email_id=" + email + ", Password=" + password + "]";
	}

	public String getEmail() {
		return email;
	}
	public void setEmail_id(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	

}
