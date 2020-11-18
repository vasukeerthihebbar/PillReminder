package com.TeamD;

public interface DaoInterface {

	public abstract boolean SaveUserInfo(UserDetails userdetails);
	public abstract String CheckUserdetails(LoginDetails logindetails);
	public abstract String ResetPassword(ResetPassword resetpassword);
	public abstract boolean SaveDependentDetails(DependentDetails dependent);
	public abstract DependentDetails ViewDependentDetails(ViewDependentDetails viewDependent);
	public abstract String AddMedicalDetails(MedicalHistory medicalhistory);
	public abstract MedicalHistory[] GetMedicalHistory(String emailid, String relation);
	
}
