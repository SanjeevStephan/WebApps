    
	         var ebook_id;
			 var ebook_files;
			 var ebook_titles;
			 var author_name;
			 var audio_path ;
			 var book_cover;
			 var book_cover_path = "./img-bookcovers/";
			 var book_link="#"
			 var pdf_path ;
			 
			 function openInNewTab(url)
			 {
				window.open(url);
			 }
			 
			  function loadAudio()
			  {
			 
						 var ebook_text = "";
						 var audio_num;
						 var addon;
						 
						// openInNewTab("https://www.geeksforgeeks.org");
						 
						ebook_text += "<div class='row'>";
						 for(i = 0; i < ebook_titles.length ; i++)
						 {

						    	 ebook_text += "<div class='col'>"
								 ebook_text +="<center>"
								  ebook_text +="<img src='" + book_cover_path + book_cover[i]+ ".jpg"+ "' width='120px' height='150px' />";
								  ebook_text +="</center>"
								  ebook_text += "<br/><span><b class='display-5'>";
					              ebook_text += "<span class='badge badge-secondary badge-lg' height='100%'>" + (i + 1) + "</span>";
								  ebook_text += ebook_titles[i];
								  ebook_text +="</b>";
								  ebook_text +="<br/>";
								  ebook_text += "By <i>" + author_name[i] + "</i>";
								 // ebook_text +="<br/><a href='"+ pdf_path + book_link[i] + ".pdf"+"' class='badge badge-primary badge-pill'>Read Now</a>";
								  ebook_text +="<br/><button onclick=\"openInNewTab(' " + pdf_path + book_link[i] +".pdf');\" class='badge badge-primary badge-pill'>Read Now</button>";
								  ebook_text +="<br/></span>";
								 ebook_text +="</div>";
								
						 }
						 ebook_text += "</div>";
						 
						document.getElementById(ebook_id).innerHTML = ebook_text;
					    document.getElementById("ebook_heading").innerHTML = "Total E-Books <span class='badge badge-danger badge-pill'>" + ebook_titles.length + "</span>";
			  }