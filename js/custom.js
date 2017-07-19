// jQuery('select#edit-field-advert-district-target-id > option').each(function ($) {
//     if ($(this).attr("value").inArray(75,76,77,78,79)){
//         $(this).attr("disabled", true);
//     }
// });

(function ($) {
    var provinceOption = $('select#edit-field-advert-district-target-id > option');
    if (provinceOption.attr('value').inArray(75,76,77,78,79)){
        provinceOption.attr('disabled', true);
    }
}(jQuery));