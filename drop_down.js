function validateFields(temp) {
    var flag = true;
    $('.err').remove();

    if (temp == "1") {
        if ($('#firstname').val().trim() == '') {
            $("<span class='err'>First name is required</span>").insertAfter("#firstname");
            flag = false;
        }
        if ($('#lastname').val().trim() == '') {
            $("<span class='err'>Last name is required</span>").insertAfter("#lastname");
            flag = false;
        }
        if ($('#emailaddress').val().trim() == '') {
            $("<span class='err'>Email address is required</span>").insertAfter("#emailaddress");
            flag = false;
        }
        if ($('#emailaddress').val().trim() != '' && validateEmail($('#emailaddress').val().trim()) == true) {
            $("<span class='err'>Enter a valid email address.</span>").insertAfter("#emailaddress");
            flag = false;
        }
        if ($('#phone').val().trim() == '') {
            $("<span class='err'>Phone number is required</span>").insertAfter("#phone");
            flag = false;
        }
        if ($('#privacyconsent').is(":checked") == false) {
            $("<span class='err'>Privacy consent is required</span>").insertAfter(".privacyconsent");
            flag = false;
        }
        if (flag == true) {
            $('.err').remove();
            return true;
        } else {
            sessionStorage.clear();
            return false;
        }
    } else if (temp == "2") {
        if ($('input[name=autoloan]').is(":checked") == false) {
            $("<span class='err'>This is required</span>").insertAfter(".autoloan");
            return false;
        } else {
            return true;
        }
    } else if (temp == "3") {
        if ($('input[name=financed]').is(":checked") == false) {
            $("<span class='err'>This is required</span>").insertAfter(".financed");
            return false;
        } else {
            return true;
        }
    } else if (temp == "4") {
        if ($('input[name=payment]').is(":checked") == false) {
            $("<span class='err'>This is required</span>").insertAfter(".payment");
            return false;
        } else {
            return true;
        }
    } else if (temp == "5") {
        $('.span-content').text('Less than 2 minutes from');
        if ($('input[name=longAutoLoan]').is(":checked") == false) {
            $("<span class='err'>This is required</span>").insertAfter(".longAutoLoan");
            return false;
        } else {
            return true;
        }
    } else if (temp == "6") {
        if ($('#modelYear').val() == '') {
            $("<span class='err'>This is required</span>").insertAfter("#modelYear");
            flag = false;
        } else {
            $("#modelYear").next('.err').remove();
        }
        if ($('#make').val() == '') {
            $("<span class='err'>This is required</span>").insertAfter("#make");
            flag = false;
        } else {
            $("#make").next('.err').remove();
        }
        if ($('#model').val() == '') {
            $("<span class='err'>This is required</span>").insertAfter("#model");
            flag = false;
        } else {
            $("#model").next('.err').remove();
        }
        if ($('#series').val() == '') {
            $("<span class='err'>This is required</span>").insertAfter("#series");
            flag = false;
        } else {
            $("#series").next('.err').remove();
        }
        if ($('#bodyStyle').val() == '') {
            $("<span class='err'>This is required</span>").insertAfter("#bodyStyle");
            flag = false;
        } else {
            $("#bodyStyle").next('.err').remove();
        }
        return flag;
    } else if (temp == "7") {
        if ($('#mileage').val().trim() != '') {
            $("#mileage").next('.err').remove();
            return true;
        } else {
            $("<span class='err'>This is required</span>").insertAfter("#mileage");
            return false;
        }
    } else if (temp == "8") {
        if ($('input[name=interestRate]').is(":checked") == false) {
            $("<span class='err'>This is required</span>").insertAfter(".interestRate");
            return false;
        } else {
            return true;
        }
    } else if (temp == "9") {
        if ($('input[name=pay]').is(":checked") == false) {
            $("<span class='err'>This is required</span>").insertAfter(".pay");
            return false;
        } else {
            return true;
        }
    } else if (temp == "10") {
        if ($('#owing').val().trim() != '') {
            $("#owing").next('.err').remove();
            return true;
        } else {
            $("<span class='err'>This is required</span>").insertAfter("#owing");
            return false;
        }
    } else if (temp == "11") {
        $('.span-content').text('Less than 1 minute from');
        if ($('#owner').val() != '') {
            $("#owner").next('.err').remove();
            return true;
        } else {
            $("<span class='err'>This is required</span>").insertAfter("#modelYear");
            return false;
        }
    } else if (temp == "12") {
        if ($('#homeaddress').val().trim() != '') {
            $("#homeaddress").next('.err').remove();
            return true;
        } else {
            $("<span class='err'>This is required</span>").insertAfter("#homeaddress");
            return false;
        }
    } else if (temp == "13") {
        if ($('input[name=time]').is(":checked") == false) {
            $("<span class='err'>This is required</span>").insertAfter(".time");
            return false;
        } else if ($('input[name=time]').is(":checked") == true && $('input[name=time]:checked').val() == 'Less than 2 Years' && $('#previousaddress').val().trim() == '') {
            $("<span class='err'>Previous address is required</span>").insertAfter("#previousaddress");
            return false;
        } else if ($('input[name=time]').is(":checked") == true && $('input[name=time]:checked').val() != 'Less than 2 Years') {
            $(".time").next('.err').remove();
            return true;
        }
    } else if (temp == "14") {
        if ($('input[name=monthly]').is(":checked") == false) {
            $("<span class='err'>This is required</span>").insertAfter(".monthly");
            return false;
        } else {
            return true;
        }
    } else if (temp == "15") {
        $('.span-content').text('Less than 30 seconds from');
        if ($('input[name=6months]').is(":checked") == false) {
            $("<span class='err'>This is required</span>").insertAfter(".6months");
            return false;
        } else if ($('input[name=6months]').is(":checked") == true && $('input[name=6months]:checked').val() == 'No' && $('#previousemp').val().trim() == '') {
            $("<span class='err'>Previous employer is required</span>").insertAfter("#previousemp");
            return false;
        } else if ($('input[name=6months]').is(":checked") == true && $('input[name=6months]:checked').val() == 'No' && $('#previousemp').val().trim() != '') {
            $(".6months").next('.err').remove();
            return true;
        } else {
            return true;
        }
    } else if (temp == "16") {
        if ($('#gross').val().trim() != '') {
            $("#gross").next('.err').remove();
            return true;
        } else {
            $("<span class='err'>This is required</span>").insertAfter("#gross");
            return false;
        }
    } else if (temp == "17") {
        if ($('input[name=emptype]').is(":checked") == false) {
            $("<span class='err'>This is required</span>").insertAfter(".emptype");
            return false;
        } else {
            return true;
        }
    } else if (temp == "18") {
        if ($('#work').val().trim() != '') {
            $("#work").next('.err').remove();
            return true;
        } else {
            $("<span class='err'>This is required</span>").insertAfter("#work");
            return false;
        }
    } else if (temp == "19") {
        if ($('#jobtitle').val().trim() != '') {
            $("#jobtitle").next('.err').remove();
            return true;
        } else {
            $("<span class='err'>This is required</span>").insertAfter("#jobtitle");
            return false;
        }
    } else if (temp == "20") {
        return true;
    }
    return true;
}
