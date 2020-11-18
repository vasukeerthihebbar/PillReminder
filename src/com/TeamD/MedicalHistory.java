package com.TeamD;

import java.io.Serializable;

import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class MedicalHistory implements Serializable {
	
	@FormParam("email")
	String email;
	@FormParam("relation")
	String relation;
	@FormParam("illness")
	String illness;
	@FormParam("doctorDetails")
	String doctorDetails;
	@FormParam("medicine")
	String medicine;
	@FormParam("startDate")
	String startDate;
	@FormParam("endDate")
	String endDate;
	@FormParam("dosageAmount")
	String dosageAmount;
	@FormParam("dosageFrequency")
	String dosageFrequency;
	@FormParam("dosageTime")
	String dosageTime;
	@FormParam("emailNotify")
	String emailNotify;
	
	
	public MedicalHistory() {
		super();
	}
	
	public MedicalHistory(String email, String relation, String illness, String doctorDetails, String medicine,
			String startDate, String endDate, String dosageAmount, String dosageFrequency, String dosageTime,
			String emailNotify) {
		super();
		this.email = email;
		this.relation = relation;
		this.illness = illness;
		this.doctorDetails = doctorDetails;
		this.medicine = medicine;
		this.startDate = startDate;
		this.endDate = endDate;
		this.dosageAmount = dosageAmount;
		this.dosageFrequency = dosageFrequency;
		this.dosageTime = dosageTime;
		this.emailNotify = emailNotify;
	}
	@Override
	public String toString() {
		return "MedicalHistory [email=" + email + ", relation=" + relation + ", illness=" + illness + ", doctorDetails="
				+ doctorDetails + ", medicine=" + medicine + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", dosageAmount=" + dosageAmount + ", dosageFrequency=" + dosageFrequency + ", dosageTime="
				+ dosageTime + ", emailNotify=" + emailNotify + "]";
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRelation() {
		return relation;
	}
	public void setRelation(String relation) {
		this.relation = relation;
	}
	public String getIllness() {
		return illness;
	}
	public void setIllness(String illness) {
		this.illness = illness;
	}
	public String getDoctorDetails() {
		return doctorDetails;
	}
	public void setDoctorDetails(String doctorDetails) {
		this.doctorDetails = doctorDetails;
	}
	public String getMedicine() {
		return medicine;
	}
	public void setMedicine(String medicine) {
		this.medicine = medicine;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public String getDosageAmount() {
		return dosageAmount;
	}
	public void setDosageAmount(String dosageAmount) {
		this.dosageAmount = dosageAmount;
	}
	public String getDosageFrequency() {
		return dosageFrequency;
	}
	public void setDosageFrequency(String dosageFrequency) {
		this.dosageFrequency = dosageFrequency;
	}
	public String getDosageTime() {
		return dosageTime;
	}
	public void setDosageTime(String dosageTime) {
		this.dosageTime = dosageTime;
	}
	public String getEmailNotify() {
		return emailNotify;
	}
	public void setEmailNotify(String emailNotify) {
		this.emailNotify = emailNotify;
	}

	
	
	
	
	
}
