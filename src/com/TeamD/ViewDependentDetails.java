package com.TeamD;

import java.io.Serializable;

import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ViewDependentDetails implements Serializable {
	
	@FormParam("email")
	private String email;
	@FormParam("relation")
	private String relation;
	
	public ViewDependentDetails() {
		
	}

	public void setEmail(String email) {
		email = email;
	}

	public void setRelation(String relation) {
		relation = relation;
	}

	public String getEmail() {
		return email;
	}

	public String getRelation() {
		return relation;
	}

	public ViewDependentDetails(String useremail, String relation) {
		super();
		this.email = email;
		this.relation = relation;
	}

	@Override
	public String toString() {
		return "ViewDependentDetails [email=" + email + ", relation=" + relation + "]";
	}

}
