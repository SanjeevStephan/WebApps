   /*
     parent script : audio_script.js
	 description    : this script displays the audio file name along with playable audio track next to it.
	 audio_script.js uses below variables[ audio_files  | audio_titles | audio_id ] to load the list 
   */
   
    var author_self_help = [
	"Dr.Henry Cloud",
	"Scott Adams",
	"Self Help",
	"Self-Help",
	

	];	
	
    var ebook_titles_self_help = [ 
							"When to Say Yes,How to say no",
							"How to Fail at Almost Everything and Still Win Big",
							"Better Single Than Sorry",
	                       "Life Changer Ebooks",
						   "Genius Foods_ Become Smarter"
						
						  
					 ];
					 
	var book_cover_self_help = [
		"boundaries"	,
		"how-to-fail-at-almost-everything",
		"better-single-than-sorry",
		"life-changer-ebooks",  //no excuses
		"genius-foods"

	];				 
	
    var book_link_self_help = [
							"Boundaries_ When to Say Yes, How to Say No to Take Control of Your Life ( PDFDrive.com )",
							"How to Fail at Almost Everything and Still Win Big_ Kind of the Story of My Life ( PDFDrive.com )",
							"Better Single Than Sorry_ A No-Regrets Guide to Loving Yourself and Never Settling ( PDFDrive.com )",
						   "life_changers_100_books",
						   "Genius Foods_ Become Smarter, Happier, and More Productive While Protecting Your Brain for Life ( PDFDrive.com )"
	];
			  
			  
			  
			  author_name = author_name.concat(author_self_help);		
			  ebook_titles = ebook_titles.concat(ebook_titles_self_help);	
			  book_cover = book_cover.concat(book_cover_self_help);	
			  book_link = book_link.concat(book_link_self_help);				  
			  
			  