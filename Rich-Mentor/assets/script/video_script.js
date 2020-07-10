
			 var video_id;
			 var video_files;
			 var video_titles;
			 var video_path ;
			 
			  function loadVideo()
			  {			 
						 var video_text = "";
						 var i;
						 
						  video_text +="<div class='row'>";
						 for(i = 0; i < video_titles.length ; i++)
						 {
						         
					              video_text += "<div class='col'>";
					              video_text += "<div class='card'>" 
								  video_text += "<div class='card-body'>";
								  video_text += "<div class='card-title'><h5>" + video_titles[i] + "</h5></div>";
								   video_text += "<video controls><source src='" + video_path + "/" + video_files[i] + "'/></video>";
					              video_text +="</div></div></div>";
						 }
						 video_text += "</div>";
						 document.getElementById(video_id).innerHTML = video_text;
					    
			  }
			  
				