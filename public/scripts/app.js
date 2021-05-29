$(document).ready(function () {
  const loadUsers = () => {
    $.ajax({
        method: "GET",
        url: "/api/users",
    }).done((users) => {
      console.log("users:", users);
      for (user of users) {
        console.log("single:", user);
      $("<div>").text(user.username).appendTo($("body"));
      }
    });
  }
  loadUsers();
});
