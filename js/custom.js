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

    $('button#edit-submit-adverts').removeClass('btn-xs');

    $('form#views-exposed-form-adverts-page-adverts-all > div.form-inline > div.form-item > div.select-wrapper > select').addClass('input-sm');

}(jQuery));