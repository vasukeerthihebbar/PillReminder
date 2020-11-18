package com.TeamD;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class DataConnector {
	
 public static Connection con = null;
 public static PreparedStatement statement = null;
 
 public DataConnector() {
	 String URL = "jdbc:mysql://localhost:3306/pillreminder";
	 String UserName = "root";
	 String Password = "root";
	 
	 try {
		Class.forName("com.mysql.jdbc.Driver");
		try {
			con = DriverManager.getConnection(URL,UserName,Password);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	} catch (ClassNotFoundException e) {
		e.printStackTrace();
	}
 }
 
 

}
