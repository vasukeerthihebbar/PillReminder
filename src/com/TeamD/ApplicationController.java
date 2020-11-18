package com.TeamD;

import java.sql.SQLException;
import java.util.List;

import javax.ws.rs.BeanParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;



@Path("PillReminder")
public class ApplicationController {

	public static ApplicationDao service = new ApplicationDao();
	
	public ApplicationController() {
		
	}
	
	@POST
	@Path("AddUser")
	public String UserRegistration(@BeanParam UserDetails userdetails) {
		System.out.println("service method registration");
		boolean Result = service.SaveUserInfo(userdetails);
		if(Result) {
			return "Inserted Successfully";
		}else {
			return "User already Exist";
		}
	}
	
	@POST
	@Path("CheckUser")
	public String checkLogIn(@BeanParam LoginDetails logindetails) throws SQLException {
		String Result = service.CheckUserdetails(logindetails);
		return Result;
	}
	
	@POST
	@Path("ResetPassword")
	public String resetPassword(@BeanParam ResetPassword resetpassword ) throws SQLException {
		String Result = service.ResetPassword(resetpassword);
		return Result;
	}
	
	@POST
	@Path("AddDependent")
	public boolean UserDependent(@BeanParam DependentDetails dependent) {
		boolean Result = service.SaveDependentDetails(dependent);
		return Result;
	}
	
	@POST
	@Path("ViewDependentDetails")
	@Produces(MediaType.APPLICATION_JSON)
	public DependentDetails ViewDependentDetails(@BeanParam ViewDependentDetails dependentdetails) throws SQLException {
		DependentDetails Result = service.ViewDependentDetails(dependentdetails);
		return Result;
	}
	
/*	@POST
	@Path("updateDependentDetails")
	public String updateUser(@BeanParam UpdateUserDetails updateuser) {
		ApplicationService service = new ApplicationService();
		String Result = service.UpdateUser(updateuser);
		return Result;
	}*/
	
	@POST
	@Path("saveMedicalDetails")
	public String saveDep(@BeanParam MedicalHistory medicalhistory) {
		String res=service.AddMedicalDetails(medicalhistory);
		return res;
	}
	
	@POST
	@Path("getMedicalHistory")
	@Produces(MediaType.APPLICATION_JSON)
	public MedicalHistory viewMedicalHistory(@BeanParam ViewMedicalHistory viewMed) {
		MedicalHistory Result = service.ViewMedicalHistory(viewMed);
		return Result;

	 }
	
	
}
