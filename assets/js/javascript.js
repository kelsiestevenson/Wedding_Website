/************/
/*** Nav ****/
/************/

const offset = 15;

$('nav ul a').on('click', function(event) {
  $(this).removeClass('active-nav');
  $(this).addClass('active-nav');
});

$(window).on('scroll', function() {
  $('.section').each(function() {
    if ($(window).scrollTop() + offset >= $(this).offset().top) {
      var id = $(this).attr('id');
      $('nav ul a').removeClass('active-nav');
      $('nav ul a[href=\\#' + id + ']').addClass('active-nav');
    }
  });
});

/* phones */
$('#navBar ul a').on('click', function(event) {
  $(this).removeClass('active-nav');
  $(this).addClass('active-nav');
});

$(window).on('scroll', function() {
  $('.section').each(function() {
    if ($(window).scrollTop() + offset >= $(this).offset().top) {
      var id = $(this).attr('id');
      $('#navBar ul a').removeClass('active-nav');
      $('#navBar ul a[href=\\#' + id + ']').addClass('active-nav');
    }
  });
});

let navBar = document.getElementById('navBar');
let hamburger = document.getElementById('hamburger-icon');
function openCloseNav() {
  if (navBar.style.height === '100vh') {
    navBar.style.height = '8vh';
    hamburger.classList.remove('hamburger-x');
  } else {
    navBar.style.height = '100vh';
    hamburger.classList.add('hamburger-x');
  }
}

$(document).ready(function() {
  $('#navBar ul a').click(function(event) {
    openCloseNav();
  });
});

/*************/
/* Itinerary */
/*************/
// Show an element
var show = function(elem) {
  elem.classList.add('is-visible');
};

// Hide an element
var hide = function(elem) {
  elem.classList.remove('is-visible');
};

// Toggle element visibility
var toggle = function(elem) {
  elem.classList.toggle('is-visible');
};

// Listen for click events
document.addEventListener(
  'click',
  function(event) {
    // Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle')) return;
    // Prevent default link behavior
    event.preventDefault();
    // Get the content
    var content = document.querySelector(event.target.hash);
    if (!content) return;
    // Toggle the content
    toggle(content);
  },
  false
);

// let openCloseItin = document.getElementsByClassName("open-close-itinerary");
// let openItin = document.getElementsByClassName("timeline-border");
// function openCloseItinerary() {
//   if (openItin.style.display === 'hidden') {
//     openItin.style.display = 'auto';
//   } else {
//     openItin.style.display = 'hidden';
//   }
// }

// $(document).ready(function () {
//   openCloseItin.click(function(event) {
//     openCloseItinerary();
//   });
// });

/*************/
/* Countdown */
/*************/

// Set the date we're counting down to
var countDownDate = new Date('May 9, 2020 11:00:00').getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById('countdown-days').innerHTML = days;
  document.getElementById('countdown-hrs').innerHTML = hours;
  document.getElementById('countdown-mins').innerHTML = minutes;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('countdown-num').innerHTML = 'EXPIRED';
  }
}, 1000);
