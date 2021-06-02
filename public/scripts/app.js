$(document).ready(function() {

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

  const loadBooks = (allBooks) => {
    $.ajax({
      method: "GET",
      url: "/api/books",
    }).done((books) => {
      if (allBooks){
        for (book of books) {
          $("<a>").text(book.name).appendTo($(".toRead"));
        }
      } else {
        $("<a>").text(books[books.length-1].name).appendTo($(".toRead"));
      }
    });
  }

  const loadMovies = (allMovies) => {
    $.ajax({
      method: "GET",
      url: "/api/movies",
    }).done((movies) => {
      if (allMovies){
        for (movie of movies) {
          $("<a>").text(movie.name).appendTo($(".toWatch"));
        }
      } else {
        $("<a>").text(movies[movies.length-1].name).appendTo($(".toWatch"));
      }
    });
  }

  const loadRestaurants = (allRestaurants) => {
    $.ajax({
      method: "GET",
      url: "/api/restaurants",
    }).done((restaurants) => {
      if (allRestaurants){
        for (restaurant of restaurants) {
          $("<a>").text(restaurant.name).appendTo($(".toEat"));
        }
      } else {
        $("<a>").text(restaurants[restaurants.length-1].name).appendTo($(".toEat"));
      }
    });;
  }

  const loadProducts = (allProducts) => {
    $.ajax({
      method: "GET",
      url: "/api/products",
    }).done((products) => {
      if (allProducts){
        for (product of products) {
          $("<a>").text(product.name).appendTo($(".toBuy"));
        }
      } else {
        $("<a>").text(products[products.length-1].name).appendTo($(".toBuy"));
      }
    });
  }

  const loadMisc = (allMisc) => {
    $.ajax({
      method: "GET",
      url: "/api/misc",
    }).done((misc) => {
      if (allMisc){
        for (m of misc) {
          $("<a>").text(m.name).appendTo($(".other"));
        }
      } else {
        $("<a>").text(misc[misc.length-1].name).appendTo($(".other"));
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

    let listObject = {};



    $.get(`/api/external/products?input=${userInput}`).then((data) => {
       let products
      if (JSON.parse(data).search_results.length === 0) {
        products = undefined
      } else {
        products = JSON.parse(data).search_results[0].title
      }

      $.get(`/api/external/movies?input=${userInput}`).then((data) => {
        let movies
        movies = JSON.parse(data).Title

        $.get(`/api/external/books?input=${userInput}`).then((data) => {
          let books;
          if (JSON.parse(data).totalItems === 0) {
            books = undefined
          } else {
            books = JSON.parse(data).items[0].volumeInfo.title

          }

          $.get(`/api/external/restaurants?input=${userInput}`).then((data) => {
            let restaurants;
            if (JSON.parse(data).status === "ZERO_RESULTS") {
              restaurants = undefined
            } else {
              restaurants = JSON.parse(data).candidates[0].name
            }

            listObject.movies = movies
            listObject.books = books
            listObject.products = products
            listObject.restaurants = restaurants

            console.log("list:", listObject);
            const inputValue = mainFetcher($(".userText").val(), listObject)

            $.post(`/input?input=${inputValue}`).then(
              (data) => {
                console.log("HI")
                console.log("input Value:", inputValue[0])
                console.log("data:", data);
                if (inputValue[0] === "books"){
                  loadBooks(false);
                } else if (inputValue[0] === "movies"){
                  loadMovies(false);
                } else if (inputValue[0] === "restaurants") {
                  loadRestaurants(false);
                } else if (inputValue[0] === "products") {
                  loadProducts(false);
                }
              }
            )
          })
        })
      })
    })

  $(".userText").val("");

  })

  //------AJAX Function Calls-----//

  loadUsers(true);
  loadBooks(true);
  loadMovies(true);
  loadRestaurants(true);
  loadProducts(true);
  loadMisc(true);
});

const mainFetcher = (search, object) => {
  let listArray = Object.entries(object)
  for (const choice of listArray) {
    if (choice[1] !== undefined) {
      if (choice[1].includes(search)) {
        //return the list name and the thing name
        return choice
      }
    }
  }
  // go to misc
  return search
}
