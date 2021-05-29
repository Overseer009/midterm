$(document).ready(function () {
  const loadUsers = () => {
    $.ajax({
        method: "GET",
        url: "/api/users",
    }).done((users) => {
      for (user of users) {
      $("<div>").text(user.name).appendTo($("body"));
      }
    });
  }
  loadUsers();
});
