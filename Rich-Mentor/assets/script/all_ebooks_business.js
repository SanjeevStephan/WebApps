   /*
     parent script : audio_script.js
	 description    : this script displays the audio file name along with playable audio track next to it.
	 audio_script.js uses below variables[ audio_files  | audio_titles | audio_id ] to load the list 
   */
   
    var author_business = [
	"Unknown",
	"Susan Sweeney",
	"Michele Cagan",
	"",
	"TERE STOUFFER",//budgeting-book
	"Peter Barron Stark and Jane Flaherty",
	"RAM CHARAN",
	"Paco Underhill",
	"Chris Voss",
	"",
	"Mark H. Mccorkmack"
	

	];	
	
    var ebook_titles_business = [ 
	                       	"Start Your Own Business",
	                       "101 Internet Businesses",
						   "Everthing Accounting Book",
						   "How to Read and Interpret Financial Statements",
						   "The Only Budgeting Book",
						   "The Only Leadership Book",
						   "What The Customer wants your to Know",
						   	"Why We Buy : The Science of Shopping",
							"Negotiating As If Your Life Depended On It",
							"Be a Network Marketing Superstar",
							"what they dont teach you at harvard"
						
						  
					 ];
					 
	var book_cover_business = [
		"start-your-own-business",
		"101-internet-business",  //no excuses
		"everything-accounting",
		"how-to-read-and-intrepret-numbers",
		"the-only-budgeting-book",
		"the-only-leadership-book",
		"what-the-customer-wants-you-to-know",
		"why-we-buy",//Paco_Underhill
		"never-split-the-difference",
		"be-a-networking-superstar",
		"what-they-dont-teach-you-at-harvard"
		


	];				 
	
    var book_link_business = [
							"Start Your Own Business ( PDFDrive.com )",
						   "101 Internet Businesses You Can Start from Home_ How to Choose and Build Your Own Successful e-Business ( PDFDrive.com )",
						   "The Everything Accounting Book_ Balance Your Budget, Manage Your Cash Flow, And Keep Your Books in the Black (Everything_ Business and Personal Finance) ( PDFDrive.com )",
						   	"How to Read and Interpret Financial Statements_ A Guide to Understanding What the Numbers Really Mean ( PDFDrive.com )",
						   "The Only Budgeting Book Youll Ever Need_ How to Save Money and Manage Your Finances with a Personal Budget Plan That Works for You ( PDFDrive.com )",
						   "The Only Leadership Book Youll Ever Need_ How to Build Organizations Where Employees Love to Come to Work   ( PDFDrive.com )",
						   "What the Customer Wants You to Know_ How Everybody Needs to Think Differently About Sales ( PDFDrive.com )",
						   "why-we-buy",
						   "Never Split the Difference_ Negotiating As If Your Life Depended On It ( PDFDrive.com )",
						   "Be a Network Marketing Superstar_ The One Book You Need to Make More Money Than You Ever Thought Possible ( PDFDrive.com )",
						   "what-they-dont-teach-you-at-harvard"
						   
	];
			  
			  
			  
			  author_name = author_name.concat(author_business);		
			  ebook_titles = ebook_titles.concat(ebook_titles_business);	
			  book_cover = book_cover.concat(book_cover_business);	
			  book_link = book_link.concat(book_link_business);				  
			  
			  