$(document).ready(function () {

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
    });

    <script>
        AOS.init();
    </script>

    location.reload(true);
}); //end