var developer_name = "Sanjeev Stephan Murmu";
var tag_id = "developed_by";
var developer_text = "";

developer_text += "<p class='lead'>Developed By ";
developer_text += "<span class='badge badge-secondary badge-pill'>";
developer_text += developer_name;
developer_text +="</span></p>";

document.getElementById(tag_id).innerHTML = developer_text;