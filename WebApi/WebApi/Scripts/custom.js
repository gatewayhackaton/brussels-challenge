//jQuery(document).ready(function($) {
//  alert("Your location is: " + geoplugin_countryName() + ", " + geoplugin_region() + ", " + geoplugin_city());
//});

$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('Report an obstacle for ' + recipient)

    $.getJSON("http://api.db-ip.com/v2/free/self").then(addrInfo =>
        modal.find('.modal-country').text(addrInfo.countryName)
    );

});
$(".typeahead").typeahead({
    source: function (query, process) {
        var countries = [];
        map = {};
        // This is going to make an HTTP post request to the controller
        return $.get('http://10.20.0.118:8888/api/Feedback/GetCountries', { eu: 'true' }, function (data) {

            // Loop through and push to the array
            $.each(data, function (i, country) {
                map[country.Name] = country;
                countries.push(country.Value);
            });

            // Process the details
            process(countries);
        });
    },
    updater: function (item) {
        var selectedShortCode = map[item].Id;
        // Set the text to our selected id
        $("#details").text("Selected : " + selectedShortCode);
        return item;
    }
});
