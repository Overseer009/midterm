$(document).ready(function() {

  //------Database Read AJAX Requests------//

  const loadUsers = () => {
    $.ajax({
      method: "GET",
      url: "/api/users",
    }).done((users) => {
      console.log("USERSSSSSSSS",users)
      $(".users").append(`
      <h2>Welcome, ${users.username}</h2>
      `)


    });
  }

  const loadBooks = (allBooks) => {
    $.ajax({
      method: "GET",
      url: "/api/books",
    }).done((books) => {
      if (allBooks) {
        for (book of books) {
          $(".toRead").append(`
          <a>${book.name}
            <div class = "dropdown">
              <button class = "updateButton" id="update.books.${book.id}">
                <i class="fas fa-plus"></i>
              </button>
              <div class = "book${book.id} content"></div>
            </div>
            <button class = "deleteButton" id ="delete.books.${book.id}">
              <i class="fas fa-trash-alt" ></i>
            </button>
          </a>
        `);
        }
      } else {
        $(".toRead").append(`
        <a >${books[books.length - 1].name}
          <div class = "dropdown">
            <button class = "updateButton" id="update.books.${books[books.length - 1].id}">
              <i class="fas fa-plus"></i>
            </button>
            <div class = "book${books[books.length - 1].id} content"></div>
          </div>
          <button class = "deleteButton" id="delete.books.${books[books.length - 1].id}">
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
      if (allMovies) {
        for (movie of movies) {
          $(".toWatch").append(`
          <a >${movie.name}
            <div class = "dropdown">
              <button class = "updateButton" id="update.movies.${movie.id}">
                <i class="fas fa-plus"></i>
              </button>
              <div class = "movie${movie.id} content"></div>
            </div>
            <button class = "deleteButton" id ="delete.movies.${movie.id}">
              <i class="fas fa-trash-alt" ></i>
            </button>
          </a>
        `);
        }
      } else {
        $(".toWatch").append(`
        <a >${movies[movies.length - 1].name}
          <div class = "dropdown">
            <button class = "updateButton" id="update.movies.${movies[movies.length - 1].id}">
              <i class="fas fa-plus"></i>
            </button>
            <div class = "movie${movies[movies.length - 1].id} content"></div>
          </div>
          <button class = "deleteButton" id ="delete.movies.${movies[movies.length - 1].id}">
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
      if (allRestaurants) {
        for (restaurant of restaurants) {
          $(".toEat").append(`
          <a >${restaurant.name}
            <div class = "dropdown">
              <button class = "updateButton" id="update.restaurants.${restaurant.id}">
                <i class="fas fa-plus"></i>
              </button>
              <div class = "restaurant${restaurant.id} content"></div>
            </div>
            <button class = "deleteButton" id="delete.restaurants.${restaurant.id}">
              <i class="fas fa-trash-alt" ></i>
            </button>
          </a>
        `);
        }
      } else {
        $(".toEat").append(`
        <a >${restaurants[restaurants.length - 1].name}
          <div class = "dropdown">
            <button class = "updateButton" id="update.restaurants.${restaurants[restaurants.length - 1].id}">
              <i class="fas fa-plus"></i>
            </button>
            <div class = "restaurant${restaurants[restaurants.length - 1].id} content"></div>
          </div>
          <button class = "deleteButton" id="delete.restaurants.${restaurants[restaurants.length - 1].id}">
            i class="fas fa-trash-alt" ></i>
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
      if (allProducts) {
        for (product of products) {
          $(".toBuy").append(`
          <a>${product.name}
            <div class = "dropdown">
              <button class = "updateButton" id="update.products.${product.id}">
                <i class="fas fa-plus"></i>
              </button>
              <div class = "product${product.id} content"></div>
            </div>
            <button class = "deleteButton" id="delete.products.${product.id}">
              <i class="fas fa-trash-alt" ></i>
            </button>
          </a>
        `);
        }
      } else {
        $(".toBuy").append(`
        <a >${products[products.length - 1].name}
          <div class = "dropdown">
            <button class = "updateButton" id="update.products.${products[products.length - 1].id}">
              <i class="fas fa-plus"></i>
            </button>
            <div class = "product${products[products.length - 1].id} content"></div>
          </div>
          <button class = "deleteButton" id="delete.products.${products[products.length - 1].id}">
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
    }).done((miscs) => {
      if (allMisc) {
        for (misc of miscs) {
          $(".other").append(`
          <a>${misc.name}
            <div class = "dropdown">
              <button class = "updateButton" id ="update.miscs.${misc.id}">
                <i class="fas fa-plus"></i>
              </button>
              <div class = "misc${misc.id} content"></div>
            </div>
            <button class = "deleteButton" id ="delete.miscs.${misc.id}">
              <i class="fas fa-trash-alt" ></i>
            </button>
          </a>
        `);
        }
      } else {
        $(".other").append(`
        <a>${miscs[miscs.length - 1].name}
          <div class = "dropdown">
            <button class = "updateButton" id="update.miscs.${miscs[miscs.length - 1].id}">
              <i class="fas fa-plus"></i>
            </button>
            <div class = "misc${miscs[miscs.length - 1].id} content"></div>
          </div>
          <button class = "deleteButton" id ="delete.miscs.${miscs[miscs.length - 1].id}">
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

  $(".show-profile-btn").click(function() {
    $(".profile-view").slideToggle("slow");

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
                if (inputValue[0] === "books") {
                  loadBooks(false);
                } else if (inputValue[0] === "movies") {
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
  let inputValue = ""
  $(document).on("click", ".updateButton", function() {
    inputValue = $(this).attr("id")
    const appendValue = inputValue.slice(7, inputValue.length).split("s.").join("")
    $(`.${appendValue}`).empty()
    const option = filterCategory(inputValue)
    $(`.${appendValue}`).append(`
        <button type="button" class="change" id="cat.${option[0]}">${option[0]}</button>
        <button type="button" class="change" id="cat.${option[1]}">${option[1]}</button>
        <button type="button" class="change" id="cat.${option[2]}">${option[2]}</button>
        <button type="button" class="change" id="cat.${option[3]}">${option[3]}</button>
        `
    ).slideToggle("slow")
  });
  $(document).on("click", ".change", function() {
    const newInput = $(this).attr("id");
    console.log(newInput);
    const inputArray = [newInput, inputValue]
    $.post(`/edit/update?input=${inputArray}`)
      .then(() => {
        $(".toRead").empty()
        loadBooks(true)

        $(".toWatch").empty();
        loadMovies(true)

        $(".toBuy").empty();
        loadProducts(true)

        $(".toEat").empty();
        loadRestaurants(true)

        $(".other").empty();
        loadMisc(true)
      })
  })
  //-------Delete button for the specific items in the
  $(document).on("click", ".deleteButton", function() {
    const value = $(this).attr("id")
    $.post(`/edit/delete?input=${value}`)
      .done(() => {
        if (value.includes("books")) {
          $(".toRead").empty()
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
      })

  });

  $(".register-form").hide()
  $("#show-login-btn").hide()
  $(document).on("click", "#show-register-btn", function() {


    $(".register-form").show()
    $("#show-register-btn").hide()
    $(".login-form").hide()
    $("#show-login-btn").show()
    $(".register-line").hide()
  })

  $(document).on("click", "#show-login-btn", function() {

    $(".register-form").hide()
    $("#show-register-btn").show()
    $(".login-form").show()
    $("#show-login-btn").hide()
    $(".register-line").show()
  })

  $(".submit-profile").submit(function() {

    alert("Successfully Updated Profile")

  })



});

const filterCategory = (value) => {
  const newValue = value.split(".");
  let array = ['movies', 'restaurants', 'books', 'products', 'miscs']
  const result = array.filter(word => word !== (newValue[1]));
  return result
}

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
