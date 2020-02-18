$(document).ready(function () {

    let dropdown = $('#locality-dropdown');
    let input = $('#locality-input');
    let dropdown_guest = $('#locality-dropdown-guest');
    let input_guest = $('#locality-input-guest');

    dropdown.empty();
    dropdown_guest.empty();

    dropdown.append('<option selected="true" disabled>Choose country</option>');
    dropdown.prop('selectedIndex', 0);

    dropdown_guest.append('<option selected="true" disabled>Choose country</option>');
    dropdown_guest.prop('selectedIndex', 0);

    const url = 'json/countries.json';

    // Populate dropdown with list of countries
    $.getJSON(url, function (data) {
        $.each(data, function (key, entry) {
            dropdown.append($('<option></option>').attr('value', entry.dial_code).text(entry.name + "(" + entry.dial_code + ")"));
        })
    });
    $.getJSON(url, function (data) {
        $.each(data, function (key, entry) {
            dropdown_guest.append($('<option></option>').attr('value', entry.dial_code).text(entry.name + "(" + entry.dial_code + ")"));
        })
    });

    $("#locality-dropdown").change(function () {
        let str = "";
        $("#locality-dropdown :selected").each(function () {
            str += $(this).val() + " ";
        });
        console.log(str);
        input.text(str);
    });
    $("#locality-dropdown-guest").change(function () {
        let str_guest = "";
        $("#locality-dropdown-guest :selected").each(function () {
            str_guest += $(this).val() + " ";
        });
        console.log(str_guest);
        input_guest.text(str_guest);
    });
//show div for extra guest
    $('#guest').hide();
    $('#guest_list').hide();
    $("#plus_btn").click(function () {
        $("#guest").show();
        $("#personal_info").hide();
    });
    $("#close").click(function () {
        $("#guest").hide();
        $("#personal_info").show();
    });
    $("#save").click(function () {
        $("#guest").hide();
        $('#guest_list').show();
        $("#personal_info").show();

        let str_guest_email = "";
        let str_guest_name = "";
        str_guest_name = $("#guest_Fname").val() + " " + $("#guest_name").val();
        str_guest_email = $("#guest_email").val();

        $("#guest_name_list").text(str_guest_name);
        $("#guest_email_list").text(str_guest_email);
    });
    $("#delete_guest").click(function () {
        $("#guest_name_list").text("");
        $("#guest_email_list").text("");
        $('#guest_list').hide();
    });

    //menu bottom
   /* let links = document.querySelectorAll('a');
    let background = document.querySelector('.link-background');


    const clickHandler = (el) => {
        links.forEach(link => {
            link.classList.remove('active');
        });
        el.classList.add('active');
    };
    links.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Update background position
            background.style.transform = `translateX(${128.25 * index}%)`;
            clickHandler(e.currentTarget);

        });
    });*/

    //neumorphic elements
    $('.neumorphic-checkbox').on('click', function () {
        $(this).toggleClass('neumorphic-checkbox_active');
    });

    $('.neumorphic-tab-container__control').on('click', function () {
        if ($(this).hasClass('neumorphic-tab-container__control_active')) {
            return false;
        }
        $('.neumorphic-tab-container__tab_shown').removeClass('neumorphic-tab-container__tab_shown');
        $('.neumorphic-tab-container__control_active').removeClass('neumorphic-tab-container__control_active');
        $(this).addClass('neumorphic-tab-container__control_active');
        $('#' + $(this).data('target')).addClass('neumorphic-tab-container__tab_shown');
    });

    $('.neumorphic-slider__thumb').on('mousedown', function () {
        $(document).on('mousemove.mm', function (e) {
            var new_value = 0;
            if (e.clientX < $('.neumorphic-slider').offset().left) {
                new_value = '0%';
            } else if (e.clientX > $('.neumorphic-slider').offset().left + $('.neumorphic-slider').width() - 10) {
                new_value = '100%';
            } else {
                new_value = ((e.clientX - $('.neumorphic-slider').offset().left) / ($('.neumorphic-slider').width() - 10) * 100).toFixed(0) + '%';
            }
            document.documentElement.style.setProperty('--value', new_value);
            $('.neumorphic-slider__popover').text(new_value);
        });
        $(document).on('mouseup.mu', function () {
            $(document).off('mousemove.mm');
            $('.neumorphic-slider__thumb').off('mouseup.mu');
        });
    });

});