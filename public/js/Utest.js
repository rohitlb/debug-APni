$(document).ready(function() {

//**************************disabling personal information***************************************************
    $('#EmergencyContactSubmit').hide();
    $('#ContactUsSubmit').hide();
    $('#PersonalDetailsSubmit').hide();
    $('#ConfidentialInfoSubmit').hide();
    $('#PersonalInfo :input').prop('disabled',true);
    $('#ContactInfo :input').prop('disabled',true);
    $('#ConfidentialInfo :input').prop('disabled',true);

    //*****************************on click on EDIT....enabling the fields******************************************
    $('#PInfoedit').click(function () {
        //enabling the functions
        $('#EmergencyContactSubmit').show();
        $('#ContactUsSubmit').show();
        $('#ConfidentialInfoSubmit').show();
        $('#PersonalDetailsSubmit').show();
        $('#PersonalInfo :input').prop('disabled',false);
        $('#ContactInfo :input').prop('disabled',false);
        $('#ConfidentialInfo :input').prop('disabled',false);

    });
//******************************showing the submitbutton and sending details to server***********************************
     $('#PersonalDetailsSubmit').click(function(){

        var dob = $('#datepicker').val();
        var gender = $("input[type='radio'][name='gender']:checked").val();
        var bloodgroup = $('#Pbox').val();
        var maritalstatus = $("input[type='radio'][name='marital']:checked").val();
        var height = $('#Pheight').val();
        var weight = $('#Pweight').val();
        var data = {
            dob: dob,
            gender: gender,
            blood_group: bloodgroup,
            marital_status: maritalstatus,
            height: height,
            weight: weight
        };

        $.ajax(
            {
                url: "/personalinfo",
                method: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (result) {

                    if (result.status === "success") {
                        Materialize.toast(result.message, 2000);
                        //$('#change').show();
                    }
                    else {
                        Materialize.toast(result.message, 2000);

                    }

                },
                error: function (err) {

                }
            }

        )

    });
//============================for contact details=========================================
    $('#ContactUsSubmit').click(function(){
        var name = $('#Pfirstname').val();
        var number = $('#Pphone').val();
        var email = $('#Pemail').val();
        var data = {
            name: name,
            number: number,
            email: email
            };
        $.ajax(
        {
            url: "/contactinfo",
            method: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (result) {

                if (result.status === "success") {
                    Materialize.toast(result.message, 2000);
                    //$('#change').show();
                }
                else {
                    Materialize.toast(result.message, 2000);

                }

            },
            error: function (err) {

            }
        }

    )

});

//========================================confidentialInformation====================================
    $('#ConfidentialInfoSubmit').click(function(){
        var Aadhar = $('#Aadhar').val();
        var income = $('#Pbox').val();
        var data = {
            aadhaar_number: Aadhar,
            income: income
        };

        $.ajax(
            {
                url: "/userconfidential",
                method: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (result) {

                    if (result.status === "success") {
                        Materialize.toast(result.message, 2000);
                        //$('#change').show();
                    }
                    else {
                        Materialize.toast(result.message, 2000);

                    }

                },
                error: function (err) {

                }
            }

        )

    });
//============================================EmergencyContactDetails===========================================
    $('#EmergencyContactSubmit').click(function(){
        var names = $('#names').val();
        var relation = $('#relation').val();
        var phone = $('#Pphone').val();

        var data = {
            rel_name : names,
            relation : relation,
            rel_contact : phone
        };

        $.ajax(
            {
                url: "/useremergency",
                method: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (result) {

                    if (result.status === "success") {
                        Materialize.toast(result.message, 2000);
                        //$('#change').show();
                    }
                    else {
                        Materialize.toast(result.message, 2000);

                    }

                },
                error: function (err) {

                }
            }
        )
    });

/////////////////////////////////////////Address///////////////////////////////////////////////////////////////////////

    $('#AddressSubmit').click(function(){
        var address = $('#address').val();
        var pincode = $('#pincode').val();
        var landmark = $('#landmark').val();
        var city = $('#city').val();
        var state = $('#state').val();

        var data = {
            addresses : address,
            pincode : pincode,
            landmarks : landmark,
            city : city,
            state : state
        };

        $.ajax(
            {
                url: "/useraddress",
                method: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (result) {

                    if (result.status === "success") {
                        Materialize.toast(result.message, 2000);
                    }
                    else {
                        Materialize.toast(result.message, 2000);

                    }

                },
                error: function (err) {

                }
            }
        )
    });




//===========================for UserDropdown=========================
    $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrainWidth: true, // Does not change width of dropdown to that of the activator
            hover: true, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: false,
            alignment: 'left',
            stopPropagation: false
        }
    );
//*************************for pictures********************************
    $('.carousel.carousel-slider').carousel({fullWidth: true});
//****************************for datepicker************************************
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
    });
//**********************************************************************8

    // $('#upload').click(function () {
    //     var upload=$('#images').val();
    //     var data={
    //         upload1 = upload
    //     };
    //     $.ajax(
    //         {
    //             url:"/upload",
    //             method: 'POST',
    //             data: JSON.stringify(data),
    //             contentType:'application/json',
    //             success:function (result) {
    //
    //             },
    //             error:function (err) {
    //                 console.log(err);
    //
    //             }
    //         }
    //     )
    //
    // })


});