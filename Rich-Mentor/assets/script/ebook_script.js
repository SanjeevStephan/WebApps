var ebook_cover_path;
var ebook_cover_img;
var ebook_title;
var ebook_link;
var ebook_card_id;
var ebook_code;


 function loadEbook()
			  {					 
						//  audio_text +="<table class='table' border='0'>";
						  ebook_code += "<div class='row'>";
						 for(i = 0; i < ebook_title.length ; i++)
						 {
				
	                              ebook_code += "<div class='col'>";
								  ebook_code +="<a href='" + ebook_link[i] + "'>";
							      ebook_code += "<img src='" + ebook_cover_path  + ebook_cover_img[i] + "' width='120px' height='150px'/>"; 
								  ebook_code += "<p>" + ebook_title[i] + "</p>";
								  ebook_code += "</a>";
					              ebook_code += "</div>";
						 }
						  ebook_code += "</div>";
						 
						 document.getElementById(ebook_card_id).innerHTML = ebook_code;
					    
			  }
	




 