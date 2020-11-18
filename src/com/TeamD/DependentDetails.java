package com.TeamD;

import java.io.Serializable;

import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class DependentDetails implements Serializable{
	
	@FormParam("email")
	private String email;
	@FormParam("depname")
	private String depname;
	@FormParam("depemail")
	private String depemail;
	@FormParam("depcontact")
	private String depcontact;
	@FormParam("depheight")
	private String depheight;
	@FormParam("depweight")
	private String depweight;
	@FormParam("depbldgrp")
	private String depbldgrp;
	@FormParam("depdob")
	private String depdob;
	@FormParam("relation")
	private String relation;
	
	public DependentDetails() {
		
	}
	
	
	public DependentDetails(String email, String depname, String depemail, String depcontact, String depheight,
			String depweight, String depbldgrp, String depdob, String relation) {
		super();
		this.email = email;
		this.depname = depname;
		this.depemail = depemail;
		this.depcontact = depcontact;
		this.depheight = depheight;
		this.depweight = depweight;
		this.depbldgrp = depbldgrp;
		this.depdob = depdob;
		this.relation = relation;
	}
	@Override
	public String toString() {
		return "DependentDetails [email=" + email + ", depname=" + depname + ", depemail=" + depemail + ", depcontact="
				+ depcontact + ", depheight=" + depheight + ", depweight=" + depweight + ", depbldgrp=" + depbldgrp
				+ ", depdob=" + depdob + ", relation=" + relation + "]";
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getDepname() {
		return depname;
	}
	public void setDepname(String depname) {
		this.depname = depname;
	}
	public String getDepemail() {
		return depemail;
	}
	public void setDepemail(String depemail) {
		this.depemail = depemail;
	}
	public String getDepcontact() {
		return depcontact;
	}
	public void setDepcontact(String depcontact) {
		this.depcontact = depcontact;
	}
	public String getDepheight() {
		return depheight;
	}
	public void setDepheight(String depheight) {
		this.depheight = depheight;
	}
	public String getDepweight() {
		return depweight;
	}
	public void setDepweight(String depweight) {
		this.depweight = depweight;
	}
	public String getDepbldgrp() {
		return depbldgrp;
	}
	public void setDepbldgrp(String depbldgrp) {
		this.depbldgrp = depbldgrp;
	}
	public String getDepdob() {
		return depdob;
	}
	public void setDepdob(String depdob) {
		this.depdob = depdob;
	}
	public String getRelation() {
		return relation;
	}
	public void setRelation(String relation) {
		this.relation = relation;
	}
	
		

}
