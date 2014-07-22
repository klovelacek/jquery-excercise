// the .add() Method--Example 1
$( ".button1" ).click(function() {
  $( ".example1" ).add().css( "background-color", "#BAB393" );

    console.log( "btn 1 worked." );
});


// the .fadeOut() Method--Example 2

$( ".button2" ).click(function() {
  $( ".example2" ).fadeOut(1000)

  console.log( "Animation worked." );
  console.log( "btn 2 worked." );
});


// the .slideDown() Method--Example 3

$( ".button3" ).click(function() {
  if ( $( "example3:first" ).is( ":hidden" ) ) {
    $( "example3" ).slideDown(1000);
  } else {
    $( "example3" ).slideUp(1000)

    console.log( "Animation worked." );
    console.log( "btn 3 worked." );
  }
});


// the .content() Method--Example 4

$( "button4" ).click(function(){
  $( "p" )
  .contents()
  .filter(function(){
    return this.nodeType !== 1;
  })
  .wrap( "<b></b>" );
});

// the .not() Method--Example 2

$( ".button5" ).click(function() {
  $( "li" ).not( ":even" ).css( "background-color", "rgb(186, 179, 147" );

  console.log( "Animation worked." );
  console.log( "btn 2 worked." );
});
