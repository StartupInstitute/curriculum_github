$( document ).ready(function() {
	var editor = ace.edit("editor");
//Eyyy Jules got it to work! Eyyyyy!!!!	console.log("EY");
	var code = editor.getSession().getValue();
	console.log(code);
	$('#content_to_save').html(code);
	var data = $("#viewcontent").val();
	$('#view-panel').html(marked(data));
});
