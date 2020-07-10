   /*
     parent script : audio_script.js
	 description    : this script displays the audio file name along with playable audio track next to it.
	 audio_script.js uses below variables[ audio_files  | audio_titles | audio_id ] to load the list 
   */
   
    author_name_all_ebooks = [
	//Alphabet : A
	"Ashlee_Vance",
	//Alphabet : B
	
	//Alphabet : C
	"Cal_Newport",
	//"Chris_Bailey",
	//"Chris_Lewis",
	//"Charles_Duhigg",
	//Alphabet : D
	"David J.Schwartz",
	"Danny Penman and Mark Williams",
	"Daniel Levitin",
	"Darren_Hardy",
	//"Daniel_H._Pink",

	//Alphabet : E
	"Eckhart Tolle",
	"Eric Ries",
	//Alphabet : F
	
	//Alphabet : G
	"George Samuel Clason",
	//"Gary W.Keller and Jay Papasan",
	//Alphabet : H
	
	//Alphabet : I
	
	//Alphabet : J
	"Jen Sincero",
	"Jen Sincero",
	"Joseph Murphy",

	"Jenny Loveless",
	
	"Jamshid Gharajedaghi",
	//"John_C._Maxwell",

		//Alphabet : J
   		"James Rickards",
		
	//Alphabet : K

	//Alphabet : L
	
	//Alphabet : M
	"Malcolm Gladwell",
	//"Mark",
	"Mel Robbins",
	//Alphabet : N
//"Norman Vincent Peale",
	//Alphabet : O

	
	//Alphabet : P
    
	"Pat Dorsey",
	//Alphabet : Q
	
	//Alphabet : R
	"Rhonda Byrne",
	"Richard Templar",
	"Richard Templar",
	//Alphabet : S
	"Stephen Covey",
	//"Stephen_M._R._Covey",
	"Steven Stralser",
	"Simon Sinek",
	//Alphabet : T

	"Tony Robbins",
	//"Tony Robbins",
	//"Tony Hsieh",
	//"Tim_Ferriss",
   // "Timothy Ferriss",	
	"Timothy Ferriss",
	//Alphabet : Z
	"Zig Ziglar",
	"Cal Newport"
	];	
	
    ebook_titles_all_ebooks = [ 

						   //Alphabet : A
						   "Elon_Musk Biography",
						   //Alphabet : B

                         //Alphabet : C						  
						 // "Deep_Work",
						  //"The Productivity Project",
						  //"Too Fast to Think",
						  "The Power of Habit",
						  //Alphabet : D
						  "The Magic of Thinking Big",
						  "MINDFULNESS",
						  "THE ORGANIZED MIND",
						  "The Compound Effect",
						  //"To Sell Is Human", 
						 
						  //Alphabet : E
						  "The Power of Now",
						  "The Lean Startup",	
						  //Alphabet : G
						  "The Richest Man in Babylon",
						  //"The ONE Thing",
						  //Alphabet : J
						  	"You Are a Badass, Stop Doubting Your Greatness",
							"You Are a Badass at Making Money",
						  "The Power of Your Subconscious Mind",
						  "Law of Attraction : The Secret Power of The Universe",
						  	 "Systems Thinking  Managing Chaos and Complexity",
							 "Currency Wars",
						   //Alphabet : K

						  
						 //Alphabet : M 
						 "David and Goliath",
						// "What They Don't Teach You at Harvard Business School",
						 "The 5 Second Rule",
						  //Alphabet : N 
						// "The Power of Positive_Thinking",  	
						 //Alphabet : P
                         "Little Book That Builds Wealth",
						  //Alphabet : R
						  "The Secret : The-Science-of-Getting-Rich",
						  "The Rules of Life",
						  "The Rules of Work",
						  //Alphabet : S
						  "The 7 Habits of Highly Effective People",
						  "MBA In A Day",
						  "Start with Why",
						  //Alphabet : T

						  "MONEY Master the Game",
						  	"The 4-Hour Workweek",
						  //Alphabet :Z
						  "SEE YOU AT THE TOP",
						  "So good they cant ignore you"
						  
					 ];
					 
	book_cover_all_ebooks = [
	//Alphabet : A 
	"elon-musk-biography",
	//"audiobook",
	//"audiobook",
	//"audiobook",//HINDI_AFFIRMATION_2__
	//Alphabet : B

	 //"audiobook",//Becoming_Steve_Job
	 //Alphabet : C
	 //"audiobook", //deep work
	 //"audiobook",//The_Productivity_Project
	 //"audiobook", //too fast to think
	 "the-power-of-habit", //The power of habit
	 
	 //Alphabet : D
	 "the-magic-of-thinking-big", //the magic of thinking big
	 "mindfullness",
	 "the-organized-mind",
	 "the-compound-effect",//The_Compound_Effect_
	 //"audiobook",//To_Sell_Is_Human_
	 

	 //Alphabet : E 
	 "the-power-of-now",
	 "the-lean-startup",
	 //Alphabet : G
	"the-richest-man-in-babylon",
	//"not-available",//The_ONE_Thing_
	
	//Alphabet : J 
	"you-are-badass-how-to-stop-doubting-your-greatness",
	"You_are_a_badass_at_making_money",//YOU_ARE_A_BADASS_AT_MAKING_MONEY_
	"the-power-of-subconcious-mind",
	//"audiobook",//Do_Over
	//"audiobook",//Finish_
	//"audiobook",//Failing_Forward
     "how-to-use-law-of-attraction",
     "system-thinking",
	 "Rickards_Currency_Wars",
	//Alphabet : K

	
    //Alphabet : M
	"david-and-goliath",//David_and_Goliath
	//"not-available",//What_They_Don't_Teach_You_at_Harvard_Business_School
	"the-5-seconds-rule",
	//Alphabet : N
//	"not-available",//The_Power_of_Positive_Thinking_
	//Alphabet : P
	"little-book-that-build-wealth",
	//Alphabet : R
	"the-secret-the-science-of-getting-rich",//The_Secret_
	"the-rule-of-life",
	"the-rule-of-work",
	//Alphabet : S
	"the-7-habit-of-highly-effective-people",
    // "audiobook", //the speed of trust
	 "mba-in-a-day",
	 "start-with-why",//Start_with_Why
	 //Alphabet : T

	"money-master-the-game",
//	"audiobook",//Awaken_The_Giant_Within
	//"audiobook",//Delivering_Happiness_
//	"audiobook",//the 4 hour body
	"the-4-hour-workweek",
	//"audiobook",//Tribe_of_Mentors_
	//Alphabet : Z
	"see-you-at-the-top",
	"be-so-good-that-they-cant-ignore-you"
	];				 
	/*
	
	


	"the-lean-startup.jpg
	"building-wealth-like-a-billionaire.jpg",
	"the-strait-path-to-real-estate-wealth.jpg",
	"i-can-read-you-like-a-book.jpg",
	"law-of-success.jpg",
	

	
	*/
    book_link_all_ebooks = [

						   //Alphabet : A
						    "ashlee-vance-elon-musk-tesla-spacex-and-the-quest-for-a-fantastic-future",
						   //Alphabet : B

                         //Alphabet : C						  
						  "The Power of Habit_ Why We Do What We Do in Life and Business ( PDFDrive.com )",
						  //Alphabet : D
						  "The_Magic_of_Thinking_Big",
						  "MINDFULNESS",
						  "organized-mind-thinking-straight-in-the-levitin-daniel-j",
						  "The-Compound-Effect-By-darren-Hardy",
							 
						  //Alphabet : E
						  "The-Power-of-Now",
						  "The Lean Startup_ How Today Entrepreneurs Use Continuous  ( PDFDrive.com )",
						  //Alphabet : G
						  "THE R ICHEST M ANIN BABYLON ",
						  //"The_ONE_Thing",

						  //Alphabet : J
						  	"You Are a Badass How to Stop Doubting Your Greatness and Start Living an Awesome Life ( PDFDrive.com )",
							"You Are a Badass at Making Money_ Master the Mindset of Wealth ( PDFDrive.com )",
						  "The_Power_of_Your_Subconscious_Mind",
						  "Law of Attraction_ The Secret Power of The Universe, Inspirational Self Help Book ( PDFDrive.com )",
						  "Systems Thinking  Managing Chaos and Complexity_ A Platform for Designing Business Architecture ( PDFDrive.com )",
						  "Rickards_Currency_Wars",
						  //Alphabet : K

						  
						 //Alphabet : M 
						 "david-and-goliath",
						// "What_They_Don't_Teach_You at_Harvard_Business_School",
						 "The 5 Second Rule_ Transform your Life, Work, and Confidence with Everyday Courage ( PDFDrive.com )",
						  //Alphabet : N 
						//  "Think and Grow Rich by Napoleon Hill ( PDFDrive.com )",
						 //"The_Power_of_Positive_Thinking",  	
						 //Alphabet : P
                          "Little-Book-That-Builds-Wealth_Dorsey",
						  //Alphabet : R
						  
						  "The-Science-of-Getting-Rich",
						  "The Rules of Life",
						  "Richard_Templar-The_Rules_of_Work-EN",
						  //Alphabet : S
						  "The 7 habits of highly effective people",
						  	"MBA In A Day ( PDFDrive.com )",
						  "Start With Why ( PDFDrive.com )",
						  //"The_Speed_of_Trust",
						  //Alphabet : T
						  "money_master_the_game__7_simple_-_tony_robbins",
						  //"Awaken_The_Giant_Within",
						 // "Delivering_Happiness",
						  	"The 4-Hour Workweek_ Escape 9-5, Live Anywhere, and Join the New Rich ( PDFDrive.com )",
						  //"The_4-Hour_Body",
						  //"Tribe_of_Mentors",
						  //Alphabet :Z
						  "See.You.At.The.Top",
						  "Newport - So good they cant ignore you"
						  
	];
			  
			  author_name = author_name.concat(author_name_all_ebooks);		
			  ebook_titles = ebook_titles.concat(ebook_titles_all_ebooks);	
			  book_cover = book_cover.concat(book_cover_all_ebooks);	
			  book_link = book_link.concat(book_link_all_ebooks);				  
			  
			  
			  