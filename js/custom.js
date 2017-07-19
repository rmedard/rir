jQuery('#edit-field-advert-district-target-id > select > option').each(function () {
    if ((this).attr("value").inArray(75,76,77,78,79)){
        (this).attr("disabled", true);
    }
});