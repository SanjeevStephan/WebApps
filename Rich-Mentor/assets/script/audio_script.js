    
	         var audio_id;
			 var audio_files;
			 var audio_titles;
			 var audio_path ;
			 
			  function loadAudio()
			  {
			   
					 
					 /*
					 audio_card_text += "<div class='card'>";
					 audio_card_text += " <div class='badge badge-success badge-lg'><h6>Audio Books</h6></div>";
					 audio_card_text += "<div class='card-body'>";
					 audio_card_text += "<div id='audio_card'></div>"
					 */
					 
					 
						 var audio_text = "";
						 var audio_num;
						 
						  audio_text +="<table class='table' border='0'>";
						 for(i = 0; i < audio_titles.length ; i++)
						 {
						         
					              audio_text += "<tr><td>";
					              audio_text += audio_titles[i];
								  audio_text += "</td>";
								  audio_text +="<td>";
							      audio_text += "<audio controls><source src='" + audio_path + "/" + audio_files[i] + "'/></audio>"; 
					              audio_text +="</td></tr>";
						 }
						 audio_text += "</table>";
						 document.getElementById(audio_id).innerHTML = audio_text;
					    
			  }