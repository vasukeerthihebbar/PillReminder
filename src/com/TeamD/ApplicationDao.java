package com.TeamD;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ApplicationDao extends DataConnector implements DaoInterface{

	//RegistrationPage
	public boolean SaveUserInfo(UserDetails userdetails) {
		
		int result = 0;
		
		try {
			statement = con.prepareStatement("insert into UserDetails(name,email,contact,country,dob,password)values(?,?,?,?,?,?)");
	
			statement.setString(1, userdetails.getName());
			statement.setString(2, userdetails.getEmail());
			statement.setString(3, userdetails.getContact());
			statement.setString(4, userdetails.getCountry());
			statement.setString(5, userdetails.getDob());
			statement.setString(6, userdetails.getPassword());
			
			result = statement.executeUpdate();
			
		} catch (SQLException e) {
			
			e.printStackTrace();
		}
		
		if(result!=0) {
			return true;
		}else {
			return false;
		}
	}

	//LoginPAge
	public String CheckUserdetails(LoginDetails logindetails) {
		/*System.out.println(logindetails.getEmail());
		System.out.println(logindetails.getPassword());
		*/
		
		String result;
		ResultSet rs = null;
		
		try {
			statement = con.prepareStatement("select * from UserDetails where email=? and password = ?");
			statement.setString(1, logindetails.getEmail());
			statement.setString(2, logindetails.getPassword());
			rs= statement.executeQuery();
		
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		try {
			if(rs.next()) {
				result = rs.getString("name");
				return result;
			}else {

				return "USER DOES NOT EXIST";
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "";
	}

	//ChangePasswordpage
	public String ResetPassword(ResetPassword resetpassword) {
		
		ResultSet rs = null;
		
		try {
			
			statement = con.prepareStatement("select * from UserDetails where email=? and contact=?");
			statement.setString(1, resetpassword.getEmail());
			statement.setString(2, resetpassword.getContact());
		    rs = statement.executeQuery();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		try {
			if(rs.next()) {
				try {
					statement = con.prepareStatement("update UserDetails SET `password` = ? where `email`=?");
					statement.setString(1, resetpassword.getNewpassword());
					statement.setString(2, resetpassword.getEmail());
					statement.executeUpdate();
					
					return "true";
				
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			return "USER DOES NOT EXIST";
	}

	//Adding Dependents 
	public boolean SaveDependentDetails(DependentDetails dependent) {
		System.out.println(dependent.getEmail());
		System.out.println(dependent.getDepemail());
		System.out.println(dependent.getDepname());
		System.out.println(dependent.getDepcontact());
		System.out.println(dependent.getDepheight());
		System.out.println(dependent.getDepweight());
		System.out.println(dependent.getDepbldgrp());
		System.out.println(dependent.getDepdob());
		System.out.println(dependent.getRelation());
		
		int result = 0;
		try {
			statement = con.prepareStatement("insert into DependentDetails(email,depname,depemail,depcontact,depheight,depweight,depbldgrp,depdob,relation)values(?,?,?,?,?,?,?,?,?)");
			statement.setString(1,dependent.getEmail());
			statement.setString(2,dependent.getDepname());
			statement.setString(3,dependent.getDepemail());
			statement.setString(4,dependent.getDepcontact());
			statement.setString(5,dependent.getDepheight());
			statement.setString(6,dependent.getDepweight());
			statement.setString(7,dependent.getDepbldgrp());
			statement.setString(8,dependent.getDepdob());
			statement.setString(9,dependent.getRelation());
			
			result=statement.executeUpdate();		
		
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		if(result!=0) {
			return true;
		}else {
			return false;
		}
	}

	//view DependentDetails
	
	public DependentDetails ViewDependentDetails(ViewDependentDetails viewDependent) {
		DependentDetails dependent=null;
		String userMail=viewDependent.getEmail();
		String relation=viewDependent.getRelation();
		System.out.println(userMail);
		System.out.println(relation);
		ResultSet rs=null;
		
		
		try {
			statement=con.prepareStatement("select * from DependentDetails where email=? AND relation=?");
			statement.setString(1,userMail);
			statement.setString(2,relation);
			
			rs=statement.executeQuery();
			
		}catch(SQLException e) {
			System.out.println(e);
		}
		try {
			if(rs.next()) {
				dependent = new DependentDetails();
				dependent.setDepname(rs.getString("depname"));
				dependent.setRelation(rs.getString("relation"));
				dependent.setDepemail(rs.getString("depemail"));
				dependent.setDepcontact(rs.getString("depcontact"));
				dependent.setDepbldgrp(rs.getString("depbldgrp"));
				dependent.setDepdob(rs.getString("depdob"));
				dependent.setDepheight(rs.getString("depheight"));
				dependent.setDepweight(rs.getString("depweight"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return dependent;
	}
	
/*	//update DependentDetails
	public String UpdateUserInfo(UpdateUserDetails updateuser) {
		// TODO Auto-generated method stub
		return null;
	}*/

	//show MedicalHistory
	public MedicalHistory[] GetMedicalHistory(String emailid, String relation) {
		MedicalHistory mH[] = null;
		return mH;
	}

	//Add MedicalHistory
	public String AddMedicalDetails(MedicalHistory medicalhistory)  {
		System.out.println(medicalhistory.getEmail());
		System.out.println(medicalhistory.getRelation());
		System.out.println(medicalhistory.getIllness());
		System.out.println(medicalhistory.getMedicine());
		System.out.println(medicalhistory.getDoctorDetails());
		System.out.println(medicalhistory.getStartDate());
		System.out.println(medicalhistory.getEndDate());
		System.out.println(medicalhistory.getDosageAmount());
		System.out.println(medicalhistory.getDosageFrequency());
		System.out.println(medicalhistory.getDosageTime());
		System.out.println(medicalhistory.getEmailNotify());
		int result = 0;
		
		try {
			statement = con.prepareStatement("insert into MedicalHistory(email,relation,illness,doctorDetails,medicine,startDate,endDate,dosageAmount,dosageFrequency,dosageTime,emailNotify)values(?,?,?,?,?,?,?,?,?,?,?)");
		    statement.setString(1, medicalhistory.getEmail());
		    statement.setString(2, medicalhistory.getRelation());
		    statement.setString(3, medicalhistory.getIllness());
		    statement.setString(4, medicalhistory.getDoctorDetails());
		    statement.setString(5, medicalhistory.getMedicine());
		    statement.setString(6, medicalhistory.getStartDate());
		    statement.setString(7, medicalhistory.getEndDate());
		    statement.setString(8, medicalhistory.getDosageAmount());
		    statement.setString(9, medicalhistory.getDosageFrequency());
		    statement.setString(10, medicalhistory.getDosageTime());
		    statement.setString(11, "null");
		
		    result = statement.executeUpdate();		    
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
		if(result!=0) {
			return "Details Saved";
		}else {
			return "Details not Saved";
		}
	}

	public MedicalHistory ViewMedicalHistory(ViewMedicalHistory viewMed) {
		// TODO Auto-generated method stub
		MedicalHistory mh=null;
		String userMail=viewMed.getEmail();
		String relation=viewMed.getRelation();
		System.out.println(userMail);
		System.out.println(relation);
		ResultSet rs=null;
		
		
		try {
			statement=con.prepareStatement("select * from medicalhistory where email=? AND relation=?");
			statement.setString(1,userMail);
			statement.setString(2,relation);
			
			rs=statement.executeQuery();
			
		}catch(SQLException e) {
			System.out.println(e);
		}
		try {
			if(rs.next()) {
				mh = new MedicalHistory();
				mh.setDoctorDetails(rs.getString("doctorDetails"));	
				mh.setRelation(rs.getString("relation"));
				mh.setEmail(rs.getString("email"));
				mh.setIllness(rs.getString("illness"));
				mh.setMedicine(rs.getString("medicine"));
				mh.setStartDate(rs.getString("startDate"));
				mh.setEndDate(rs.getString("endDate"));
				mh.setDosageFrequency(rs.getString("dosageFrequency"));
				mh.setDosageAmount(rs.getString("dosageAmount"));
				mh.setDosageTime(rs.getString("dosageTime"));
				mh.setEmailNotify(rs.getString("emailNotify"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return mh;
	}
	
		
}
