
// slideshare overlay
var $overlay = $('<div id="overlay"></div>');
var $iframe = $('<iframe width="595" height="485" frameborder="0" marginwidth="0" margin="0" height="0" scrolling="no" allowfullscreen></iframe>');

// append iframe to overaly
$overlay.append($iframe);

// append overlay to body
$('body').append($overlay);

// slideshare slides - capture the click event on a link to the slide
$('a.view-slide').click(function(event) {
    event.preventDefault();
    var id = $(this).attr('href');
    var src = 'test.html';
    // update overlay with iframe
    $iframe.attr('src', src);
    // show overlay
    $overlay.show();
});

// when overlay is clicked
$overlay.click(function() {
    // hide overlay
    $overlay.hide();
    $iframe.attr('src', '');
});

$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })

  $('.basicAutoComplete').autoComplete({
    resolverSettings: {
        url: 'country-list.json'
    }
});