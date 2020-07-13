 var img = [
		"IMG_20190423_110305.jpg",
		"IMG_20190420_131948.jpg",
		"IMG_20190421_123808.jpg",
		"IMG_20190421_151830.jpg",
		"IMG_20190630_110918.jpg",		 
		"IMG_20190703_144833.jpg",
		"IMG_20190709_093742.jpg",
		"IMG_20190809_171952.jpg",
		"IMG_20200418_102328.jpg",
	
		 ];
		 
		   var vid = [
		 /*  
		"person_1.jpg",
		"person_2.jpg",
		"person_3.jpg",
		"person_4.jpg",
		"person_5.jpg",
		*/
		 ];
		 
         var text = "";
         var i;
          
		      for (i = 0; i < img.length; i++) 
			  {
			   text += "<div class=\"col-6 col-md-6 col-lg-4\" data-aos=\"fade-up\">";
			   text += "<a href=\"images/" + vid[i]+ "\" class=\"d-block photo-item\" data-fancybox=\"gallery\">";
               text += "<img src=\"images/" +  img[i] + "\" alt=\"Image\"class=\"img-fluid\"/>";
			   text += "<center><span>";
			   text += img[i];
			   text += "</span></center></div></a></div>";
//			   text += "<br/><img src=\"images/img_1.jpg\" ><div class=\"photo-text-more\">
			 
			 }
			  
			  document.getElementById("demo").innerHTML = text;