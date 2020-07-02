$( function() {$( "#dialog" ).dialog({
  autoOpen: false,
  minWidth: 500
 });} );

function showAbstract(id) {
  var td = document.getElementById(id);
  var parts = td.innerText.split("\n");
  var title = parts[0]
  var author_affiliation = parts[1]
  var abstract = td.getAttribute("abstract");

  var dlg_content = document.getElementById("dlg_content");

  dlg_content.innerHTML = "<b>"+title+"</b><br><i>"+author_affiliation+"</i><hr><pre>"+abstract+"</pre>"

  $( "#dialog" ).dialog( "open" );
}
