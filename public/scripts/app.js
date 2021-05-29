$(document).ready(function () {

  const loadUsers = () => {
    $.ajax({
        method: "GET",
        url: "/api/users",
    }).done((users) => {
      for (user of users) {
      $("<div>").text(user.username).appendTo($("body"));
      }
    });
  }

  const loadBooks = () => {
    $.ajax({
        method: "GET",
        url: "/api/books",
    }).done((books) => {
      for (book of books) {
      $("<div>").text(book.name).appendTo($("body"));
      }
    });
  }

  const loadMovies = () => {
    $.ajax({
        method: "GET",
        url: "/api/movies",
    }).done((movies) => {
      for (movie of movies) {
      $("<div>").text(movie.name).appendTo($("body"));
      }
    });
  }

  const loadRestaurants = () => {
    $.ajax({
        method: "GET",
        url: "/api/restaurants",
    }).done((restaurants) => {
      for (restaurant of restaurants) {
      $("<div>").text(restaurant.name).appendTo($("body"));
      }
    });
  }

  const loadProducts = () => {
    $.ajax({
        method: "GET",
        url: "/api/products",
    }).done((products) => {
      for (product of products) {
      $("<div>").text(product.name).appendTo($("body"));
      }
    });
  }

  const loadMisc = () => {
    $.ajax({
        method: "GET",
        url: "/api/misc",
    }).done((misc) => {
      for (m of misc) {
      $("<div>").text(m.name).appendTo($("body"));
      }
    });
  }

  loadUsers();
  loadBooks();
  loadMovies();
  loadRestaurants();
  loadProducts();
  loadMisc();
});
