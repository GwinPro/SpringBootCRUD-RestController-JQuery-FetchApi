$(document).ready(function () {
    $('#addUserButton').click(function () {
        ajaxPost();
    });

    function ajaxPost() {
        var roleValue = "";
        var role = document.getElementById("newUser-role");
        if (role[role.selectedIndex].value === 2) {
            roleValue = "ROLE_ADMIN";
        } else {
            roleValue = "ROLE_USER";
        }

        // PREPARE FORM DATA
        var formData = {
            email: $('#inputEmail').val(),
            login: $('#inputLogin').val(),
            password: $('#inputPassword').val(),
            roles: [{
                id: role[role.selectedIndex].value,
                role: roleValue,
                authority: roleValue
            }]
        };

        // DO POST
        $.ajax({
            type: "POST",
            contentType: "application/json;",
            url: "/rest/addUser",
            data: JSON.stringify(formData),
            dataType: 'json',
            complete: [
                function () {
                    getAllUsers();
                    $(document).ready(function () {
                        $('#usersTableTab').tab('show');
                        reset();
                    });

                    function reset() {
                        $('#inputEmail').val('');
                        $('#inputLogin').val('');
                        $('#inputPassword').val('');
                    }
                }
            ]
        });
    }
});