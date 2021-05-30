$(document).ready(function () {

//------Database Read AJAX Requests------//

  const loadUsers = () => {
    $.ajax({
        method: "GET",
        url: "/api/users",
    }).done((users) => {
      for (user of users) {
      $("<div>").text(user.username).appendTo($(".users"));
      }
    });
  }

  const loadBooks = () => {
    $.ajax({
        method: "GET",
        url: "/api/books",
    }).done((books) => {
      for (book of books) {
      $("<a>").text(book.name).appendTo($(".toRead"));
      }
    });
  }

  const loadMovies = () => {
    $.ajax({
        method: "GET",
        url: "/api/movies",
    }).done((movies) => {
      for (movie of movies) {
      $("<div>").text(movie.name).appendTo($(".toWatch"));
      }
    });
  }

  const loadRestaurants = () => {
    $.ajax({
        method: "GET",
        url: "/api/restaurants",
    }).done((restaurants) => {
      for (restaurant of restaurants) {
      $("<div>").text(restaurant.name).appendTo($(".toEat"));
      }
    });
  }

  const loadProducts = () => {
    $.ajax({
        method: "GET",
        url: "/api/products",
    }).done((products) => {
      for (product of products) {
      $("<div>").text(product.name).appendTo($(".toBuy"));
      }
    });
  }

  const loadMisc = () => {
    $.ajax({
        method: "GET",
        url: "/api/misc",
    }).done((misc) => {
      for (m of misc) {
      $("<div>").text(m.name).appendTo($(".other"));
      }
    });
  }

//------Nav Bar Button Toggles------//

$(".books").click(function() {
  $(".toRead").slideToggle("slow");
});

$(".movies").click(function() {
  $(".toWatch").slideToggle("slow");
});

$(".restaurants").click(function() {
  $(".toEat").slideToggle("slow");
});

$(".products").click(function() {
  $(".toBuy").slideToggle("slow");
});

$(".misc").click(function() {
  $(".other").slideToggle("slow");
});

$(".dropbtn").click(function() {
  $(".dropdown-content").slideToggle("slow");
});

//------AJAX Function Calls-----//

  loadUsers();
  loadBooks();
  loadMovies();
  loadRestaurants();
  loadProducts();
  loadMisc();
});

