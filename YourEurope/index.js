//jQuery(document).ready(function($) {
//  alert("Your location is: " + geoplugin_countryName() + ", " + geoplugin_region() + ", " + geoplugin_city());
//});

$('#exampleModal').on('show.bs.modal', function (event) {
	  $('.typeahead').trigger('focus')
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
		modal.find('.modal-title').text('Report an obstacle for ' + recipient)
		modal.find('.typeahead').val('')
		modal.find('#message-text').val('')
		//$( ".wrapper" ).unwrap();
    $.getJSON("http://api.db-ip.com/v2/free/self").then(addrInfo =>
		modal.find('.modal-country').text(addrInfo.countryName)
	);

	})
	
	$('#submitBtn').click(function() {
		//$("#showImage").toggleClass("hidepanel");
		$( ".wrapper" ).toggle();//.wrap( "<div class='wrapperHidden container text-center'><div class='row'><div class='col'><img class='m-5 img-fluid bounce animated' src='Your Europe_files/done.jpg'></div><div class='w-100'></div><div class='col mb-5 fadeIn animated'><h5>Thank you for your feedback</h5></div></div>" );
	
		setTimeout(function(){
			$('#exampleModal').modal('hide');		

		},1500);
	
		setTimeout(function(){
			$( ".wrapper" ).toggle();	

		},2500);
	});

	$('#exampleModal').on('hidden.bs.modal', function (e) {
		//$( ".wrapper" ).unwrap(".wrapperHidden");
		//$( ".wrapper" ).toggle();
	})


  $(".typeahead").typeahead({
    source: [
      {id: "id1", name: "Germany"},
      {id: "id2", name: "Italy"},
      {id: "id3", name: "Belgium"},
	  {id: "id2", name: "Austria"},
	  {id: "id2", name: "Bulgaria"},
	  {id: "id2", name: "Croatia"},
	  {id: "id2", name: "Republic of Cyprus"},
	  {id: "id2", name: "Czech Republic"},
	  {id: "id2", name: "Denmark"},
	  {id: "id2", name: "Estonia"},
	  {id: "id2", name: "Finland"},
	  {id: "id2", name: "France"},
	  {id: "id2", name: "Greece"},
	  {id: "id2", name: "Hungary"},
	  {id: "id2", name: "Ireland"},
	  {id: "id2", name: "Latvia"},
	  {id: "id2", name: "Lithuania"},
	  {id: "id2", name: "Luxembourg"},
	  {id: "id2", name: "Malta"},
	  {id: "id2", name: "Netherlands"},
	  {id: "id2", name: "Poland"},
	  {id: "id2", name: "Portugal"},
	  {id: "id2", name: "Romania"},
	  {id: "id2", name: "Slovakia"},
	  {id: "id2", name: "Slovenia"},
	  {id: "id2", name: "Spain"},
	  {id: "id2", name: "Sweden "},
	  {id: "id2", name: "United Kingdom"}
    ]
  });  
