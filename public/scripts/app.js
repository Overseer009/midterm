$(document).ready(function () {

//------Database Read AJAX Requests------//

  const loadUsers = () => {
    $.ajax({
        method: "GET",
        url: "/api/users",
    }).done((users) => {
      for (user of users) {
      $("<div>").text(user.username).appendTo($("#users"));
      }
    });
  }

  const loadBooks = () => {
    $.ajax({
        method: "GET",
        url: "/api/books",
    }).done((books) => {
      for (book of books) {
      $("<div>").text(book.name).appendTo($("#books"));
      }
    });
  }

  const loadMovies = () => {
    $.ajax({
        method: "GET",
        url: "/api/movies",
    }).done((movies) => {
      for (movie of movies) {
      $("<div>").text(movie.name).appendTo($("#movies"));
      }
    });
  }

  const loadRestaurants = () => {
    $.ajax({
        method: "GET",
        url: "/api/restaurants",
    }).done((restaurants) => {
      for (restaurant of restaurants) {
      $("<div>").text(restaurant.name).appendTo($("#restaurants"));
      }
    });
  }

  const loadProducts = () => {
    $.ajax({
        method: "GET",
        url: "/api/products",
    }).done((products) => {
      for (product of products) {
      $("<div>").text(product.name).appendTo($("#products"));
      }
    });
  }

  const loadMisc = () => {
    $.ajax({
        method: "GET",
        url: "/api/misc",
    }).done((misc) => {
      for (m of misc) {
      $("<div>").text(m.name).appendTo($("#misc"));
      }
    });
  }

//------Nav Bar Button Toggles------//

$(".books").click(function() {
  $("#books").slideToggle("slow");
});

$(".movies").click(function() {
  $("#movies").slideToggle("slow");
});

$(".restaurants").click(function() {
  $("#restaurants").slideToggle("slow");
});

$(".products").click(function() {
  $("#products").slideToggle("slow");
});

$(".misc").click(function() {
  $("#misc").slideToggle("slow");
});

//------AJAX Function Calls-----//

  loadUsers();
  loadBooks();
  loadMovies();
  loadRestaurants();
  loadProducts();
  loadMisc();
});
