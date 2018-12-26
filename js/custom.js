function handleDeviceChange(deviceMql, $) {
    if (deviceMql.matches) {
        let searchBar = $('div#search-bar-input-form');
        if (searchBar.length) {
            let searchBarHtml = searchBar.html();

            let content = $('<div class="panel panel-default">\n' +
                '                    <div class="panel-heading" style="border-bottom: 1px #ccc solid">\n' +
                '                        <a href="#search-block-element" data-toggle="collapse" class="panel-title collapsed" role="button"><span class="glyphicon glyphicon-search" aria-hidden="true"></span> Search</a>\n' +
                '                    </div>\n' +
                '                    <div class="panel-body panel-collapse collapse fade" id="search-block-element" style="padding:10px 0">' + searchBarHtml +
                '                    </div>\n' +
                '                </div>');
            searchBar.remove();
            content.insertBefore($('div.main-container'));
        }
    }
}

(function ($) {
    const isMobile = {
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

    let deviceMql = window.matchMedia("(max-width: 767px)");
    deviceMql.addListener(handleDeviceChange);
    handleDeviceChange(deviceMql, $);

    if (isMobile.any()) {
        $('nav#block-advertssecondarymenu > ul.nav-pills').removeClass('nav-justified');
        $('a#notif-subscribe-modal-id').removeClass().addClass('webform-dialog btn btn-success btn-sm btn-block');
    }

    $("#dropdown").select2({
        theme: "bootstrap"
    });

    $('div.field--name-field-advert-picture > div.field--item:not(:first-child)').wrapAll('<div class=\'picture-row\'><div class=\'advert-picture-row\'><div class=\'advert-picture-thumbnails\' /></div></div>').addClass('advert-picture-thumbnail');

    $('form#direct-access-form').addClass('form-inline');
    $('form#direct-access-form > button.form-submit').removeClass('btn-sm');
    $('form#views-exposed-form-adverts-page-manage-adverts > div.form--inline > div.form-actions > button.form-submit').removeClass('btn-sm');
    $('button#edit-submit-agents').removeClass('btn-sm');
    $('section#block-directaccessblock').addClass('well well-sm');
    $('section#block-request-details-webform').addClass('well well-sm');
    $('section#block-registertoourfreepropertyalert').addClass('well well-sm');

    $('select#edit-field-advert-district-target-id > option[value="All"]').text('- District -');
    $('select#edit-field-advert-type-value > option[value="All"]').text('- Advert type -');
    $('select#edit-field-advert-bedrooms-value > option[value="All"]').text('- Rooms -');
    $('select#edit-field-advert-property-type-value > option[value="All"]').text('- Property type -');
    $('select#edit-field-price-in-rwf-value > option[value="All"]').text('- Price -');

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
    $('div.view-agents > div.view-filters').addClass('well well-sm');
    $('form#views-exposed-form-adverts-page-search-adverts > div.form-inline > div.form-item > div.select-wrapper > select').addClass('input-sm');
    $('form#views-exposed-form-adverts-page-search-adverts > div.form-inline > div.form-item > div.input-group > input#edit-combine')
        .addClass('input-sm').attr("placeholder", "Search address: district, sector, cell or village");
    $('div.form-type-tel > input.form-tel').attr('placeholder', '');
    $('form#views-exposed-form-adverts-page-search-adverts > div.form-inline > div.form-item > div.input-group > span.input-group-addon')
        .addClass('input-sm');
    $('form#views-exposed-form-agents-page-agents > div.form-inline > div.form-item > div > input').attr('placeholder', 'Name of an advertiser');
    $('div.form-item-field-agent-operations-area-value > input').attr('placeholder', 'Location');
    $('select#edit-field-advertiser-type-value > option[value="All"]').text('- Any type -');


    $('div.form-type-fivestar > div.form-type-select > div').removeClass('select-wrapper');

    $('button#notif_subscr_btn_id').removeAttr('style');

    $('div.field--name-field-news-image').addClass('text-center');
    $('div.field--name-field-news-image > img').addClass('img-thumbnail');

    const featuredWell = $('div.view-adverts.well');
    if ($.trim(featuredWell.text()) === "") {
        featuredWell.hide();
    }

    /*
     * URL.js docs => https://websanova.com/plugins/url
     */

    // var advertType = url('2', decodedUri); //Get second path variable
    const propertyLocation = getParameterByName('combine');
    const advertType = getParameterByName('field_advert_type_value');
    // var rooms = getParameterByName('field_advert_bedrooms_value');
    const propertyType = getParameterByName('field_advert_property_type_value');
    // var price = getParameterByName('field_price_in_rwf_value');

    $('section#block-rirsearchsubscribeblock > div#search-subscribe-button-id > a')
        .attr('href', '/search-subscribe?advert=' + advertType + '&location=' + propertyLocation + '&property_type=' + propertyType);

    //Activate home link while on homepage
    if ($('nav#block-rir-main-menu > ul.nav > li:first-child > a').hasClass('is-active')) {
        $('nav#block-rir-main-menu > ul.nav > li:first-child').addClass('active');
    }
    //End

    $('div#edit-field-advert-advertiser-wrapper').append("<div><a href='/node/add/agent'>Can't find agent? Click here.</a></div>");
    const menuTab = $('nav#block-advertssecondarymenu > ul.nav > li');
    menuTab.each(function (index) {
        if ($.trim($("nav#block-advertssecondarymenu > ul.nav > li:nth-child(" + (index + 1) + ") > a > span.badge").text()) === '0') {
            $(this).hide();
        }
    });

    $('p.duplicate-refs').each(function () {
        const size = $(this).text().length;
        if (size > 5) {
            $(this).parent().toggleClass('danger', true);
        }
    });

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

