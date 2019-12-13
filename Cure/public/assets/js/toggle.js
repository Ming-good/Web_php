
jQuery(document).ready(function($) {
    

     $(".nav_list1").hide();
    // hide the menu when the page load
    $(".toggle").click(function() {
        // open the menu with slide effect
        $(".nav_list1").slideToggle(300);
    });
});
