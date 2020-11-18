package com.TeamD;

import java.io.Serializable;

import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ResetPassword implements Serializable {

	@FormParam("email")
	private String email;
	@FormParam("contact")
	private String contact;
	@FormParam("newpassword")
	private String newpassword;
	
	public ResetPassword() {
		
	}
	
	public ResetPassword(String email, String contact, String newPassword) {
		super();
		this.email = email;
		this.contact = contact;
		this.newpassword = newPassword;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getNewpassword() {
		return newpassword;
	}

	public void setNewpassword(String newpassword) {
		this.newpassword = newpassword;
	}

	
}
