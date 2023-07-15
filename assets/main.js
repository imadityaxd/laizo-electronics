/*
 * Student Name: 
 * Student ID: 
 * Course: CST8117 - Cross-Platform Web Design
 * Semester: Spring 2023
 * Assignment: Assignment 3 - Online Store Part - 3
 * Date Submitted: 
 */

/*email validation function**/ 
function isValidEmail(email) {
    // Check condition a
    if (typeof email !== "string" || email.indexOf('@') < 2 || email.indexOf('@') >= email.length - 6) {
    return false;
    }
    
    // Check condition b
    var atSymbolIndex = email.indexOf('@');
    var dotIndex = email.indexOf('.', atSymbolIndex);
    if (dotIndex === -1 || dotIndex === atSymbolIndex + 1) {
    return false;
    }
    
    // Check condition c
    if (email.lastIndexOf('.') >= email.length - 2) {
    return false;
    }
    
    // Check condition d
    var validChars = /^[a-zA-Z0-9._-]+$/;
    if (!validChars.test(email.replace('@', ''))) {
    return false;
    }
    
    // Check condition e
    var firstChar = email.charAt(0);
    if (!isNaN(firstChar)) {
    return false;
    }
    
    return true;
    }
    
    // Example usage:
    
    console.log("this email is "+ isValidEmail("myEmail1@email.com") );
    console.log(isValidEmail("my.Email1@e-mail.com"));
    console.log(isValidEmail("myEmail1@email.c")); 
    console.log(isValidEmail("m@email1.com")); 
    console.log(isValidEmail(1)); 
    console.log(isValidEmail(true));
    console.log(isValidEmail("myEmail1@com")); 
    console.log(isValidEmail("my_Email1@e.com")); 
    console.log(isValidEmail("1m@email.com")); 
    console.log(isValidEmail("my!Email@email.com")); 
    
    //
    //second code is for isAgeofMajority //
    //
    //
    function isAgeOfMajority(birthYear, birthMonth, birthDay) {
        // Validate birthYear
        if (typeof birthYear !== 'number' || birthYear < 1920 || birthYear > 2010 ) {
          return false;
        }
    
      
        // Validate birthMonth
        if (typeof birthMonth !== 'number' || birthMonth < 1 || birthMonth > 12) {
          return false;
        }
      
        // Validate birthDay
        if (typeof birthDay !== 'number' || birthDay < 1 || birthDay > 31) {
          return false;
        }
        if(birthYear %4 !== 0 && birthDay >28 && birthMonth ===2){
            if(birthYear %100 !==0){
                
            }
            return false;
        }
      
        // Create TODAY Date object representing the current date
        const TODAY = new Date();
      
        // Create birthdate Date object using the provided parameters
        // Concatenate the parameters into a string in the format "M/D/YYYY"
        // before passing them to the Date constructor
        var birthdate = new Date(`${birthMonth}/${birthDay}/${birthYear}`);
      
        /* 
          1. The possible return values from the Date constructor are:
             - An invalid date: if the provided date parameters are not valid (e.g., February 30th)
             - A valid date object representing the given date and time
      
          2. The parameters are concatenated into a string before passing them to the Date constructor
             to ensure that the date format is consistent and follows the expected format of "M/D/YYYY".
             Passing each number as an individual date part to the constructor would result in a different
             interpretation of the date, where the order of the parameters might vary depending on the locale,
             which could lead to unexpected results.
      
          3. Answered above as comments within the code.
        */
      
        // Calculate the difference in milliseconds between TODAY and birthdate
        var difference = TODAY - birthdate;
      
        // Convert the difference from milliseconds to days (approximately)
        var daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
      
        // Check if the difference is greater than 6570 days (18 years approximately)
        if (daysDifference > 6570) {
          return true;
        } else {
          return false;
        }
      }
    
    //testing isAgeofMajority function
    console.log(isAgeOfMajority(2005,2,25));
    console.log(isAgeOfMajority(1997,2,29)); 
    console.log(isAgeOfMajority(2008,5,1)); 
    console.log(isAgeOfMajority(2000,1,1)); 
    console.log(isAgeOfMajority(1980,12,31));
    console.log(isAgeOfMajority("1980","12",31)); 
    