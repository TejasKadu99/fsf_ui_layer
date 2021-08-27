$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});
$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$('.mobile-nav-open').toggleClass('show');
	});
});

function mylog(msg){
    console.log(msg)
}

function myEvent(event){
    const msg=event.target.value;
 }

