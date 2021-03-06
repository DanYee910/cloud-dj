$(document).ready(function(){


  $(body).on("click", "#user_profile", function(){
    $("#ajax_home_thing").css("display", "none");
    $("#new_room_form_div").css("display", "none");
    $("#room").css("display", "none");
    $("#room_black_bar").css("display", "none");
    $("#home_trending_section").css("display", "block")
    $("#profile_page").slideDown();
  })

  bindEvents();
});

function bindEvents() {
  $('#user_profile').on('click', Profile.showProfile)
  $('#accordion ul > li ul').click(function(event){
    event.stopPropagation();
  })
  .filter(':not(:first)')
  .hide();
  $('#accordion ul > li').click(function() {
    var selfClick = $(this).find('ul:first').is(':visible');
    if (!selfClick) {
      $(this)
      .parent()
      .find('> li ul:visible')
      .slideToggle();
    }
    $(this)
    .find('ul:first')
    .slideToggle();
  });
}

var Profile = (function() {
  function showProfile() {
    var $userHomeSelector = $('div#user_home');
    var $userProfileSelector = $('div.user_profile');
  };

  return {
    showProfile: showProfile
  }
})();
