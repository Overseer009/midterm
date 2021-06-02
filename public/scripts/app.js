$(document).ready(function() {
// const mainFetcher = require("./functionality")

  //------Database Read AJAX Requests------//

  const loadUsers = () => {
    $.ajax({
      method: "GET",
      url: "/api/users",
    }).done((users) => {
      for (user of users) {
        $("<a>").text(user.username).appendTo($(".users"));
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
        $("<a>").text(movie.name).appendTo($(".toWatch"));
      }
    });
  }

  const loadRestaurants = () => {
    $.ajax({
      method: "GET",
      url: "/api/restaurants",
    }).done((restaurants) => {
      for (restaurant of restaurants) {
        $("<a>").text(restaurant.name).appendTo($(".toEat"));
      }
    });
  }

  const loadProducts = () => {
    $.ajax({
      method: "GET",
      url: "/api/products",
    }).done((products) => {
      for (product of products) {
        $("<a>").text(product.name).appendTo($(".toBuy"));
      }
    });
  }

  const loadMisc = () => {
    $.ajax({
      method: "GET",
      url: "/api/misc",
    }).done((misc) => {
      for (m of misc) {
        $("<a>").text(m.name).appendTo($(".other"));
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

  //------API Routes-----//

  $("#input").click(function() {
    //------Endpoints/Keys-----//
    const userInput = $(".userText")
    .val()
    .trim()
    .toLowerCase()
    .replace(/\s/g, '+');


    $.get(`/api/external/products?input=${userInput}`).then((data) => {
      let productTitle
      if (JSON.parse(data).search_results.length === 0) {
        productTitle = undefined
        console.log("product: ", productTitle)
      } else {
        productTitle = JSON.parse(data).search_results[0].title
        console.log("product: ", productTitle)
      }
    })

    $.get(`/api/external/movies?input=${userInput}`).then((data) => {
      let movieTitle
      movieTitle = JSON.parse(data).Title
      console.log("movies: ", movieTitle)
    })

    $.get(`/api/external/books?input=${userInput}`).then((data) => {
      let bookTitle;
      if (JSON.parse(data).totalItems === 0) {
        bookTitle = undefined
        console.log("books: ", bookTitle)
      } else {
         bookTitle = JSON.parse(data).items[0].volumeInfo.title
        console.log("books: ", bookTitle)
      }
    })

    $.get(`/api/external/restaurants?input=${userInput}`).then((data) => {
      let restaurantTitle;
      if (JSON.parse(data).status === "ZERO_RESULTS") {
        restaurantTitle = undefined
        console.log("restaurants: ", restaurantTitle);
      } else {
        restaurantTitle = JSON.parse(data).candidates[0].name
        console.log("restaurants: ", restaurantTitle)
      }
    })



    // console.log("The List:", listObject);

    // $.post(`/api/external/books?input=${userInput}`).then(data => console.log(data))

    $(".userText").val("");


  })

  //------AJAX Function Calls-----//

  loadUsers();
  loadBooks();
  loadMovies();
  loadRestaurants();
  loadProducts();
  loadMisc();
});

