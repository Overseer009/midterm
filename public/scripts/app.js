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
          $(".toRead").append(`
          <a >${book.name}
          <button class = "updateButton" id="update.books.${book.id}">
          <i class="fas fa-plus"></i>
          </button>
          <button class = "deleteButton" id ="delete.books.${book.id}">
          <i class="fas fa-trash-alt" ></i>
          </button>
          </a>
        `);
        }
      } else {
        $(".toRead").append(`
        <a >${books[books.length-1].name}
        <button class = "updateButton" id="update.books.${book.id}">
        <i class="fas fa-plus"></i>
        </button>
        <button class = "deleteButton" id="delete.books.${books[books.length-1].id}">
        <i class="fas fa-trash-alt" ></i>
        </button>
        </a>
      `);
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
          $(".toWatch").append(`
          <a >${movie.name}
          <button class = "updateButton" id="update.movies.${movie.id}">
          <i class="fas fa-plus"></i>
          </button>
          <button class = "deleteButton" id ="delete.movies.${movie.id}">
          <i class="fas fa-trash-alt" ></i>
          </button>
          </a>
        `);
        }
      } else {
        $(".toWatch").append(`
        <a >${movies[movies.length-1].name}
        <button class = "updateButton" id="update.movies.${movie.id}">
        <i class="fas fa-plus"></i>
        </button>
        <button class = "deleteButton" id ="delete.movies.${movies[movies.length-1].id}">
        <i class="fas fa-trash-alt" ></i>
        </button>
        </a>
      `);
      }
    })
  }

  const loadRestaurants = (allRestaurants) => {
    $.ajax({
      method: "GET",
      url: "/api/restaurants",
    }).done((restaurants) => {
      if (allRestaurants){
        for (restaurant of restaurants) {
          $(".toEat").append(`
          <a >${restaurant.name}
          <button class = "updateButton" id="update.restaurants.${restaurant.id}">
          <i class="fas fa-plus"></i>
          </button>
          <button class = "deleteButton" id="delete.restaurants.${restaurant.id}">
          <i class="fas fa-trash-alt" ></i>
          </button>
          </a>
        `);
        }
      } else {
        $(".toEat").append(`
        <a >${restaurants[restaurants.length-1].name}
        <button class = "updateButton" id="update.restaurants.${restaurant.id}">
        <i class="fas fa-plus"></i>
        </button>
        <button class = "deleteButton" id="delete.restaurants.${restaurants[restaurants.length-1].id}">
        <i class="fas fa-trash-alt" ></i>
        </button>
        </a>
      `);
      }
    })
  }

  const loadProducts = (allProducts) => {
    $.ajax({
      method: "GET",
      url: "/api/products",
    }).done((products) => {
      if (allProducts){
        for (product of products) {
          $(".toBuy").append(`
          <a >${product.name}
          <button class = "updateButton" id="update.products.${product.id}">
          <i class="fas fa-plus"></i>
          </button>
          <button class = "deleteButton" id="delete.products.${product.id}">
          <i class="fas fa-trash-alt" ></i>
          </button>
          </a>
        `);
        }
      } else {
        $(".toBuy").append(`
        <a >${products[products.length-1].name}
        <button class = "updateButton" id="update.products.${product.id}">
        <i class="fas fa-plus"></i>
        </button>
        <button class = "deleteButton" id="delete.products.${products[products.length-1].id}">
        <i class="fas fa-trash-alt" ></i>
        </button>
        </a>
      `);
      }
    })
  }

  const loadMisc = (allMisc) => {
    $.ajax({
      method: "GET",
      url: "/api/misc",
    }).done((misc) => {
      if (allMisc){
        for (m of misc) {
          $(".other").append(`
          <a >${m.name}
          <button class = "updateButton" id ="update.misc.${m.id}">
          <i class="fas fa-plus"></i>
          </button>
          <button class = "deleteButton" id ="delete.misc.${m.id}">
          <i class="fas fa-trash-alt" ></i>
          </button>
          </a>
        `);
        }
      } else {
        $(".other").append(`
        <a >${misc[misc.length-1].name}
        <button class = "updateButton" id="update.misc.${m.id}">
        <i class="fas fa-plus"></i>
        </button>
        <button class = "deleteButton" id ="delete.misc.${misc[misc.length-1].id}">
        <i class="fas fa-trash-alt" ></i>
        </button>
        </a>
      `);
      }
    })
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

    //------EDIT (UPDATE AND DELETE FROM LIST)-----//


    $( document ).on( "click",".updateButton", function() {

      const inputValue = $(this).attr("id")

      $.post(`/edit/update?input=${inputValue}`)
      console.log( "HI1");
      // if (value.includes("books")) {

      // }

    });

    //-------Delete button for the specific items in the
    $( document ).on( "click",".deleteButton", function() {
      const value = $(this).attr("id")

      $.post(`/edit/delete?input=${value}`)
      if (value.includes("books")) {
        $(".toRead").empty();
        loadBooks(true)
      }
      if (value.includes("movies")) {
        $(".toWatch").empty();
        loadMovies(true)
      }
      if (value.includes("products")) {
        $(".toBuy").empty();
        loadProducts(true)
      }
      if (value.includes("restaurants")) {
        $(".toEat").empty();
        loadRestaurants(true)
      }
      if (value.includes("misc")) {
        $(".other").empty();
        loadMisc(true)
      }
    });



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
