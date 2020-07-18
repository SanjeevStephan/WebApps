    
	         var audio_id;
			 var audio_files;
			 var audio_titles;
			 var author_name;
			 var audio_path ;
			 var book_cover;
			 var book_cover_path = "./img-bookcovers/";
			 var book_link="#"
			 var pdf_path ;
			 
			  function loadAudio()
			  {
						 var audio_text = "";
						 var audio_num;
						 var addon;
						 
						 
						  audio_text +="<table class='table' border='0'>";
						 for(i = 0; i < audio_titles.length ; i++)
						 {

				         	    audio_text += "<tr>";
					            
									    
						         audio_text += "<td>";
								 // audio_text += "<span class='badge badge-primary badge-lg' height='100%'>" + (i + 1) + "</span><br/>";
								  audio_text +="<img src='" + book_cover_path + book_cover[i]+ ".jpg"+ "' width='120px' height='150px' />";
								  audio_text += "</td><td>";
								  //audio_text +="<center>"
								  audio_text += "<b class='display-5'>";
								 audio_text += "<span class='badge badge-primary badge-lg' height='100%'>" + (i + 1)  + "</span>";
					              audio_text += audio_titles[i];
								  audio_text +="</b>";
								  audio_text +="<br/>";
								  audio_text += "Author : <b>" + author_name[i] + "</b>";
								  audio_text +="<br/><a href='"+ pdf_path + book_link[i] + ".pdf"+"' class='badge badge-primary badge-pill'>Download PDF</a>";
								  audio_text +="<br/>";
								 // audio_text += "</td>";
								 // audio_text +="<td>";
								 audio_text +="<hr class='my-4'>";
								// audio_text +="<span class='badge badge-secondary badge-pill'>Click below to Listen Summary</span>";
							      audio_text += "<audio controls><source src='" + audio_path + "/" + audio_files[i] + "'/></audio>"; 
								  //audio_text +="</center>";
								  audio_text += "</td>";
								
								  if(i % 2 == 0)
								  {
									  i = i +1;
								  }									  
						 if(i != audio_titles.length)
						  { 
								  audio_text += "<td>";
						//		  audio_text += "<span class='badge badge-primary badge-lg' height='100%'>" + (i + 1)  + "</span><br/>";
								  audio_text +="<img src='" + book_cover_path + book_cover[i]+ ".jpg"+ "' width='120px' height='150px' />";
								  audio_text += "</td><td>";
								  //audio_text +="<center>"
								  audio_text += "<span class='badge badge-danger badge-lg' height='100%'>" + (i + 1)  + "</span> ";
								  audio_text += "<b class='display-5'>";
					              audio_text += audio_titles[i];
								  audio_text += "</b>";
								  audio_text += "<br/>Author : <b>" + author_name[i] + "</b>";
								  audio_text +="<br/><a href='" + pdf_path + book_link[i] + ".pdf"+"' class='badge badge-primary badge-pill'>Download PDF</a>";
								  audio_text +="<br/>";
								 // audio_text += "</td>";
								 // audio_text +="<td>";
								 audio_text +="<hr class='my-4'>";
							     audio_text += "<audio controls><source src='" + audio_path + "/" + audio_files[i] + "'/></audio>"; 
								  //audio_text +="</center>";
								  audio_text += "</td>";
								  
								   }
								  
					              audio_text +="<td></td></tr>";	  
						 }
						 audio_text += "</table>";
						 document.getElementById(audio_id).innerHTML = audio_text;
					    document.getElementById("audio_book_heading").innerHTML = "Total Audio Books <span class='badge badge-danger badge-pill'>" + audio_titles.length + "</span>";
			  }
