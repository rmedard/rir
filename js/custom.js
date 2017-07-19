// jQuery('select#edit-field-advert-district-target-id > option').each(function ($) {
//     if ($(this).attr("value").inArray(75,76,77,78,79)){
//         $(this).attr("disabled", true);
//     }
// });

(function ($) {
    if ($.inArray($('select#edit-field-advert-district-target-id > option').attr('value'),
            [75,76,77,78,79])){
        $(this).attr('disabled', true)
    }
}(jQuery));