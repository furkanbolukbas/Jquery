$(init); 
function init(){
	$('#verplaatsbaar').draggable();
}

$('button').click(function(){
	$('#animate').animate({
		left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
	}, 200)
});
$(function() {
    $( "#resizable" ).resizable();
 });

 $(function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  });