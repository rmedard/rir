(function ($) {
    $('select#edit-field-advert-district-target-id > option').each(function () {
        if ($(this).attr('value') == 75 ||
            $(this).attr('value') == 76 ||
            $(this).attr('value') == 77 ||
            $(this).attr('value') == 78 ||
            $(this).attr('value') == 79){
            $(this).attr('disabled', true)
        }
    });
}(jQuery));