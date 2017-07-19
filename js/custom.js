jQuery('select#edit-field-advert-district-target-id > option').each(function () {
    if (jQuery(this).attr("value").inArray(75,76,77,78,79)){
        jQuery(this).attr("disabled", true);
    }
});