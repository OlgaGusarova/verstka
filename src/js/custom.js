$('.selectOptions').hide();

$('.selectBlock').click(
  function () {
    $(this).parent('.form-group').find('.selectOptions').toggle();
  }
);

$(document).click(
  function(e) {
    if (!$(e.target).closest('.form-group').length) {
      $('.form-group > .selectOptions').hide();
    }
    e.stopPropagation();
  }
);

$('.distrCountries > ul > li').click(
  function (e) {
    var country = $(e.target).closest('span').attr('data-attr-value');
    $(this).closest('ul').parent('.distrCountries').closest('.form-group').children('.selectBlock').text(country);
    $(this).closest('ul').parent('.distrCountries').hide();
  }
);

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$(document).ready(function () {
  localStorage.setItem('activeLink', window.location.pathname);
  var activeLink = localStorage.getItem('activeLink');
  $('a[href="' + activeLink + '"]').parent('.navItem').attr('class', 'navItem active');
});