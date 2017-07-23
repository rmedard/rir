(function ($) {
    $('select#edit-field-advert-district-target-id > option').each(function () {
        if ($(this).attr('value') === '75' ||
            $(this).attr('value') === '76' ||
            $(this).attr('value') === '77' ||
            $(this).attr('value') === '78' ||
            $(this).attr('value') === '79'){
            $(this).attr('disabled', true);
        }
    });

    $('div.view-adverts > div.view-filters').addClass('well well-sm');
    $('button#edit-submit-adverts').removeClass('btn-xs').addClass('btn-sm');
    $('div.view-adverts > div.view-filters > form.views-exposed-form > div.form-inline > div.form-item > div.select-wrapper > select').addClass('input-sm');

    if ($(location).attr('href').match('((\\/)(adverts\\/rent\\/(([a-z])\\w+))?$)')){
        $('nav#block-advertsprimarymenu > ul.nav > li:first-child').addClass('active');
    } else if ($(location).attr('href').match('((\\/)(adverts\\/buy\\/(([a-z])\\w+))?$)')){
        $('nav#block-advertsprimarymenu > ul.nav > li:last-child').addClass('active');
    }

    if ($('nav#block-rir-main-menu > ul.menu > li:first-child > a').hasClass('is-active')){
        console.log("should be okay");
        $('nav#block-rir-main-menu > ul.menu > li:first-child').addClass('active');
    }

}(jQuery));