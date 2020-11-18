package com.TeamD;

import java.io.Serializable;

import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class UserDetails implements Serializable {
	
	@FormParam("name")
	private String name;
	
	@FormParam("email")
	private String email;
	
	@FormParam("contact")
	private String contact;
	
	@FormParam("country")
	private String country;
	
	@FormParam("dob")
	private String dob;
	
	@FormParam("password")
	private String password;
	
	public UserDetails() {
		
	}

	public UserDetails(String name,String email,String contact,String country,String dob,String password) {
		super();
		this.name = name;
		this.email = email;
		this.contact = contact;
		this.country = country;
		this.dob = dob;
		this.password = password;
		
		
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
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


	public String getCountry() {
		return country;
	}


	public void setCountry(String country) {
		this.country = country;
	}


	public String getDob() {
		return dob;
	}


	public void setDob(String dob) {
		this.dob = dob;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
