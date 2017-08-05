(function ($) {
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if (isMobile.any()) {
        $('nav#block-advertsprimarymenu > ul.nav-pills').removeClass('nav-justified').addClass('nav-mobile-primary');
        $('nav#block-advertssecondarymenu > ul.nav-pills').removeClass('nav-justified');
        $('nav#block-buyadvertssecondarymenu > ul.nav-pills').removeClass('nav-justified');
    }

    $('form#direct-access-form').addClass('form-inline');
    $('form#direct-access-form > button.form-submit').removeClass('btn-sm');
    $('button#edit-submit-agents').removeClass('btn-sm');
    $('section#block-directaccessblock').addClass('well well-sm');
    $('section#block-request-details-webform').addClass('well well-sm');

    $('select#edit-field-advert-district-target-id > option[value="All"]').text('- Any District -');
    $('select#edit-field-advert-bedrooms-value > option[value="All"]').text('- Any nbr of Rooms -');
    $('select#edit-field-advert-property-type-value > option[value="All"]').text('- Any Property -');
    $('select#edit-field-price-in-rwf-value > option[value="All"]').text('- Any Price -');

    $('select#edit-field-advert-district-target-id > option').each(function () {
        if ($(this).attr('value') === '75' ||
            $(this).attr('value') === '76' ||
            $(this).attr('value') === '77' ||
            $(this).attr('value') === '78' ||
            $(this).attr('value') === '79') {
            $(this).attr('disabled', true);
        }
    });

    $('div.view-adverts > div.view-filters').addClass('well well-sm');
    $('div.view-adverts > div.view-filters > form.views-exposed-form > div.form-inline > div.form-item > div.select-wrapper > select').addClass('input-sm');

    //Activate primary menu while navigating secondary menu
    if ($(location).attr('href').match('((\\/)(adverts\\/rent\\/(([a-z])\\w+))?$)')) {
        $('nav#block-advertsprimarymenu > ul.nav > li:first-child').addClass('active');
    } else if ($(location).attr('href').match('((\\/)(adverts\\/buy\\/(([a-z])\\w+))?$)')) {
        $('nav#block-advertsprimarymenu > ul.nav > li:last-child').addClass('active');
    }
    //End

    //Activate home link while on homepage
    if ($('nav#block-rir-main-menu > ul.nav > li:first-child > a').hasClass('is-active')) {
        $('nav#block-rir-main-menu > ul.nav > li:first-child').addClass('active');
    }
    //End

    $('div.form-type-fivestar > div.form-type-select > div').removeClass('select-wrapper');

    var propertyType = getParameterByName('field_advert_property_type_value');

    $('section#block-rirsearchsubscribeblock > a').attr('href', '/search-subscribe?field_advert_property_type_value=' + propertyType);

    console.log(propertyType);

}(jQuery));

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
