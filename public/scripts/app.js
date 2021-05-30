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
      .replace(/\s/g, '+')

    const userInput2 = $(".userText")
      .val()
      .trim()
      .replace(/\s/g, '%20')

    const keyBooks = '&key=AIzaSyB4Q5zFQ0mwyehCcTLfGafcu9VRY7_Jfq0'
    const keyMovies = 'ac4024b3'
    const keyRestaurants = '&key=AIzaSyDEopJDXd9dieKX6y_kb6nUgq61qeBuBNY'

    const endpointBooks = 'https://www.googleapis.com/books/v1/volumes?q='
    const endpointMovies = `http://www.omdbapi.com/?apikey=${keyMovies}&t=`
    const endpointRestaurants = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${userInput2}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry`//term //location




    //going to be coming in from the db users table.
    // const city = "&city=montreal"

    console.log(endpointRestaurants + keyRestaurants);
    // console.log(endpointMovies + userInput);
    // console.log(endpointBooks + userInput + keyBooks);

    //------Google Books API GET-----//

    $.ajax({
      method: "GET",
      url: endpointBooks + userInput + keyBooks,
      dataType: "JSON"
    })
      .then((response) => {
        console.log(response.items)
        console.log(response.items[0].volumeInfo.title)
      })
      .catch((error) => error.msg)

    //------Open Movie Database API GET-----//

    $.ajax({
      method: "GET",
      url: endpointMovies + userInput,
      dataType: "JSON"
    })
      .then((response) => {
        console.log(response); //.Title to access the title object
      })
      .catch((error) => error.msg)

    //------YELP Restaurants API GET-----//

    $.ajax({
      method: "GET",
      url: endpointRestaurants + keyRestaurants,
      dataType: "JSON",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => error.msg)
  });


  //------AJAX Function Calls-----//

  loadUsers();
  loadBooks();
  loadMovies();
  loadRestaurants();
  loadProducts();
  loadMisc();
});

