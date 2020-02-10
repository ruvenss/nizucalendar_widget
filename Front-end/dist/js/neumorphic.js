$(document).ready(function () {

    let dropdown = $('#locality-dropdown');
    let input = $('#locality-input');


    dropdown.empty();

    dropdown.append('<option selected="true" disabled>Choose country</option>');
    dropdown.prop('selectedIndex', 0);

    const url = 'json/countries.json';

    // Populate dropdown with list of countries
    $.getJSON(url, function (data) {
        $.each(data, function (key, entry) {
            dropdown.append($('<option></option>').attr('value', entry.dial_code).text(entry.name + "(" + entry.dial_code + ")"));
        })
    });

    $("select").change(function () {
        let str = "";
        $("select option:selected").each(function () {
            str += $(this).val() + " ";
        });
        console.log(str);
        input.text(str);
    });
//show div for extra guest
    $('#guest').hide();
    $("#plus_btn").click(function(){
        $("#guest").show();
    });
    $("#close").click(function(){
        $("#guest").hide();
    });
    $("#save").click(function(){
        $("#guest").hide();
        alert("You successfully saved a new guest.")
    });

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