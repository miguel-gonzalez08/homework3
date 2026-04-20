/*
Program: script-2.js
Author: Miguel Gonzalez
Date Created: 3/22/2026
Date Last Edited: 3/22/2026
Description: Code that is used to redisplay and validate the information that was entered into the patient form.
*/

function getFormData() {
    // Name
    let firstName = document.getElementById("firstname");
    let middleInit = document.getElementById("middleinit");
    let lastName = document.getElementById("lastname");

    // DOB
    let dateOfBirth = document.getElementById("DOB");

    // Phone number
    let phoneNum = document.getElementById("Phone Number");

    // Email
    let emailAd = document.getElementById("Email");

    // Addresses
    let addLineOne = document.getElementById("addr1");
    let addLineTwo = document.getElementById("addr2");

    // City, State, ZIP
    let cityLoc = document.getElementById("City");
    let stateLoc = document.getElementById("state");
    let zipCode = document.getElementById("zip");

    // SSN
    let socialSec = document.getElementById("socialsec");

    // Radio buttons
    let genderButtons = document.getElementsByName("gender");
    let vaxButtons = document.getElementsByName("vax");
    let insButtons = document.getElementsByName("ins");

    let formOutput = "<h2>Please review your information.</h2>";
    formOutput = "<table class='review-table'><th>Field Name</th><th>Entry</th><th>Status</th>";

    // Name
    if (firstName.checkValidity()) {
        formOutput += "<tr><td>First Name, MI, Last Name:</td><td>" + firstName.value + " " + middleInit.value + " " + lastName.value + "</td><td>Pass</td></tr>";
    } else {
        formOutput += "<tr><td>First Name, MI, Last Name:</td><td>" + firstName.value + " " + middleInit.value + " " + lastName.value + "</td><td>ERROR</td></tr>";
    }

    // DOB
    if (dateOfBirth.checkValidity()) {
        formOutput += "<tr><td>Date of Birth:</td><td>" + dateOfBirth.value + "</td><td>Pass</td></tr>";
    } else {
        formOutput += "<tr><td>Date of Birth:</td><td>" + dateOfBirth.value + "</td><td>ERROR</td></tr>";
    }

    // Phone Number
    if (phoneNum.checkValidity()) {
        formOutput += "<tr><td>Phone Number:</td><td>" + phoneNum.value + "</td><td>Pass</td></tr>";
    } else {
        formOutput += "<tr><td>Phone Number:</td><td>" + phoneNum.value + "</td><td>ERROR</td></tr>";
    }

    // Email
    if (emailAd.checkValidity()) {
        formOutput += "<tr><td>Email Address:</td><td>" + emailAd.value + "</td><td>Pass</td></tr>";
    } else {
        formOutput += "<tr><td>Email Address:</td><td>" + emailAd.value + "</td><td>ERROR</td></tr>";
    }

    // Addresses
    if (addLineOne.checkValidity()) {
        formOutput += "<tr><td>Address 1:</td><td>" + addLineOne.value + "</td><td>Pass</td></tr>";
    } else {
        formOutput += "<tr><td>Address 1:</td><td>" + addLineOne.value + "</td><td>ERROR</td></tr>";
    }

    if (addLineTwo.checkValidity()) {
        formOutput += "<tr><td>Address 2:</td><td>" + addLineTwo.value + "</td><td>Pass</td></tr>";
    } else {
        formOutput += "<tr><td>Address 2:</td><td>" + addLineTwo.value + "</td><td>ERROR</td></tr>";
    }

    // SSN
    if (socialSec.checkValidity()) {
        formOutput += "<tr><td>SSN:</td><td>" + socialSec.value + "</td><td>Pass</td></tr>";
    } else {
        formOutput += "<tr><td>SSN:</td><td>" + socialSec.value + "</td><td>ERROR</td></tr>";
    }

    // Radio buttons
        formOutput += "<tr><td>Gender:</td><td>" + genderButtons.value;
        formOutput += "<tr><td>Vaccinated?</td><td>" + vaxButtons.value;
        formOutput += "<tr><td>Insurance?</td><td>" + insButtons.value;

    formOutput += "</table>";
    document.getElementById("getFormData").innerHTML = formOutput;
}

// JS First Name validation
function validateFirstName() {
    let fnEntry = document.getElementById("firstname");
    let fnError = document.getElementById("firstname_error");
    const fnPattern = /^[A-Za-z'~ -]{1,30}$/;

    if (fnPattern.test(fnEntry.value)) {
        fnError.innerHTML = "";
    }
    else {
        fnError.innerHTML = "First name must be 1 to 30 characters; only letters, apostrophes, and dashes are allowed.";
    }
}

// JS Middle Initial validation (optional)
function validateMinit() {
    let mEntry = document.getElementById("middleinit");
    let mError = document.getElementById("middleinit_error");
    const mPattern = /^[A-Za-z]?$/;

    if (mPattern.test(mEntry.value)) {
        mError.innerHTML = "";
    }
    else {
        mError.innerHTML = "Only letters are allowed.";
    }
}

// JS Last Name validation
function validateLastName() {
    let lnEntry = document.getElementById("lastname");
    let lnError = document.getElementById("lastname_error");
    const lnPattern = /^[A-Za-z2345'~ -]{1,30}$/;

    if (lnPattern.test(lnEntry.value)) {
        lnError.innerHTML = "";
    }
    else {
        lnError.innerHTML = "Last name must be 1 to 30 characters; only letters, apostrophes, dashes, and numbers 2-5 allowed.";
    }
}

// JS Date of Birth validation
function validateDOB() {
    let today = new Date();
    let minDate = new Date();
    let dobEntry = document.getElementById("dob");
    let dobError = document.getElementById("dob_error");

    if(dobEntry == "") {
        dobError.innerHTML = "Date of Birth is required.";
        return;
    }

    minDate.setFullYear(today.getFullYear() - 120);
    if(dobEntry > today) {
        dobError.innerHTML = "Date of Birth cannot be in the future.";
    }
    else if (dobEntry < minDate) {
        dobError.innerHTML = "Date of Birth cannot be more than 120 years ago.";
    }
    else {
        dobError.innerHTML = "";
    }
}

// JS Phone Number validation
function validatePhone() {
    let pEntry = document.getElementById("Phone Number");
    let pError = document.getElementById("phone_error");
    const pPattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    if (pPattern.test(pEntry.value)) {
        pError.innerHTML = "";
    }
    else {
        pError.innerHTML = "Please enter a valid phone number so that we may contact you.";
    }
}

// JS Email Address validation (optional)
function validateEmail() {
    let eEntry = document.getElementById("Email");
    let eError = document.getElementById("email_error");
    const ePattern = /^([a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,})?$/;

    if (ePattern.test(eEntry.value)) {
        eError.innerHTML = "";
    }
    else {
        eError.innerHTML = "Please enter a valid email address.";
    }
}

// JS Address 1 validation
function validateAddr1() {
    let a1Entry = document.getElementById("addr1");
    let a1Error = document.getElementById("addr1_error");
    const a1Pattern = /^[A-Za-z0-9\s.,#-]{2,30}$/;

    if (a1Pattern.test(a1Entry.value)) {
        a1Error.innerHTML = "";
    }
    else {
        a1Error.innerHTML = "Please enter a valid address.";
    }
}

// JS Address 2 validation (optional)
function validateAddr2() {
    let a2Entry = document.getElementById("addr2");
    let a2Error = document.getElementById("addr2_error");
    const a2Pattern = /^([A-Za-z0-9\s.,#-]{2,30})?$/;

    if (a2Pattern.test(a2Entry.value)) {
        a2Error.innerHTML = "";
    }
    else {
        a2Error.innerHTML = "Please enter a valid address.";
    }
}

// JS City validation
function validateCity() {
    let cEntry = document.getElementById("addr2");
    let cError = document.getElementById("addr2_error");
    const cPattern = /^[A-Za-z'~ -]{2,30}$/;

    if (cPattern.test(cEntry.value)) {
        cError.innerHTML = "";
    }
    else {
        cError.innerHTML = "Please enter a valid city.";
    }
}

// JS ZIP validation
function validateZip() {
    let zEntry = document.getElementById("zip");
    let zError = document.getElementById("zip_error");
    const zPattern = /^[0-9]{5,10}$/;

    if (zPattern.test(zEntry.value)) {
        zError.innerHTML = "";
    }
    else {
        zError.innerHTML = "Please enter a valid ZIP code.";
    }
}

// JS SSN validation
function validateSsn() {
    let ssnEntry = document.getElementById("socialsec");
    let ssnError = document.getElementById("ssn_error");
    const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;

    if (ssnPattern.test(ssnEntry.value)) {
        ssnError.innerHTML = "";
    }
    else {
        ssnError.innerHTML = "Please enter a valid SSN.";
    }
}

// JS User ID validation
function validateUser() {
    let idEntry = document.getElementById("userid");
    let idError = document.getElementById("userid_error");
    const idPattern = /^[A-Za-z0-9_-]{5,20}$/;

    if (idPattern.test(idEntry.value)) {
        idError.innerHTML = "";
    }
    else {
        idError.innerHTML = "A user ID must be 5-20 characters and can only contain letters, numbers, dashes, and underscores.";
    }
}

// JS Password validation
function validatePass() {
    let pwEntry = document.getElementById("password");
    let pwError = document.getElementById("pass_error");
    let idEntry = document.getElementById("userid");
    const pwPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!pwPattern.test(pwEntry.value)) {
        pwError.innerHTML = "A strong password should contain 8 characters minimum, 1 uppercase letter, 1 lowercase letter, and 1 digit.";
    }
    else if (pwEntry.value == idEntry.value) {
        pwError.innerHTML = "Password cannot be the same as desired User ID.";
    }
    else {
        pwError.innerHTML = "";
    }
}

// JS Verify Password validation
function validateVPass() {
    let vpEntry = document.getElementById("vpass");
    let vpError = document.getElementById("vpass_error");
    let pwEntry = document.getElementById("password");

    if (vpEntry.value !== pwEntry.value) {
        vpError.innerHTML = "Passwords do not match.";
    }
    else {
        vpError.innerHTML = "";
    }
}