$(document).ready(function () {
    getAllUsers();
});

function getAllUsers() {
    $.ajax({
        url: "/rest/users",
        method: "GET",
        dataType: "json",
        success:  [ function (data) {
            var tableBody = $('#fillTableAllUsers tbody');
            tableBody.empty();
            $(data).each(function (i, user) {
                var stringRoles = "";
                $(user.roles).each(function (i, role) {
                    stringRoles += role.role + " ";
                });
                tableBody.append(`<tr> 
                    <td class="font-weight-normal">${user.id}</td> 
                    <td class="font-weight-normal">${stringRoles}</td> 
                    <td class="font-weight-normal">${user.login}</td> 
                    <td class="font-weight-normal">${user.password}</td> 
                    <td class="font-weight-normal">${user.email}</td> 
                    <td><button id="updateButton" class="btn btn-info" role="button" data-toggle="modal" 
                    data-target="#exampleModal">Edit</button></td> 
                    </tr>`);
            })
        }],
        error: [function (error) {
            alert(error);
        }]
    })
}