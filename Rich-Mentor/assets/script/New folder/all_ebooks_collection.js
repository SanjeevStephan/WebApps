   /*
     parent script : audio_script.js
	 description    : this script displays the audio file name along with playable audio track next to it.
	 audio_script.js uses below variables[ audio_files  | audio_titles | audio_id ] to load the list 
   */
   						  
    author_name_ = [
	"Robert Kiyosaki",
	//Alphabet : A
	"Ashlee_Vance",
	"Arnold_Schwarzenegger",
	"Adi_Gurudas",
	"Adi_Gurudas",
	//Alphabet : B
	"Brian Tracy",
	"Brian Tracy",
	"Brian Tracy",
	"Brian Tracy",
	"Brian Tracy",
	"Brent_Schlender and Rick_Tetzeli",
	//Alphabet : C
	"Cal_Newport",
	"Chris_Bailey",
	"Chris_Lewis",
	"Charles_Duhigg",
	//Alphabet : D
	"David J.Schwartz",
	"Danny Penman and Mark_Williams",
	"Daniel Levitin",
	"Darren_Hardy",
	"Daniel_H._Pink",
	//Alphabet : E
	"Eckhart Tolle",
	//Alphabet : F
	
	//Alphabet : G
	"George Samuel Clason",
	"Gary_W._Keller_and_Jay_Papasan",
	//Alphabet : H
	
	//Alphabet : I
	
	//Alphabet : J
	"James_C._Collins and Jerry_I._Porras",
    "James_C._Collins",
	"James_C._Collins",
	"Jen Sincero",
	"Jen Sincero",
	"Joseph Murphy",
	"Jon_Acuff",
	"Jon_Acuff",
	"John_C._Maxwell",
	"Joe_Navarro",
	//Alphabet : K
	
	//Alphabet : L
	
	//Alphabet : M
	"Malcolm_Gladwell",
	"Malcolm_Gladwell",
	"Mark",
	//Alphabet : N
	"Napoleon Hill",
	"Norman Vincent Peale",
	//Alphabet : O
	
	//Alphabet : P
	"Paco_Underhill",
	//Alphabet : Q
	
	//Alphabet : R
	"Rhonda_Byrne",
	//Alphabet : S
	"Stephen Covey",
	"Stephen_M._R._Covey",
	"Simon_Sinek",
	//Alphabet : T
	"T.Harv Eker",
	"Tony Robbins",
	"Tony Robbins",
	"Tony_Hsieh",
	"Tim_Ferriss",
    "Timothy Ferriss",	
	"Timothy Ferriss",
	//Alphabet : Z
	"Zig Ziglar",
	];	
	
    ebook_titles = [ 
	                       "Rich_Dad_Poor_Dad",
						   //Alphabet : A
						   "Elon_Musk Biography",
						   "Total_Recall",
						   "It's_Possible",
						   "HINDI_AFFIRMATION_2",
						   //Alphabet : B
                          "Get_Smart",
                          "GOALS",						  
						  "THE_PSYCHOLOGY_OF_SELLING",
						  "No_Excuses",
						  "Eat_That_Frog",
						  "Becoming_Steve_Jobs",
                         //Alphabet : C						  
						  "Deep_Work",
						  "The_Productivity_Project",
						  "Too_Fast_to_Think",
						  "The_Power_of_Habit",
						  //Alphabet : D
						  "The_Magic_of_Thinking_Big",
						  "MINDFULNESS",
						  "THE_ORGANIZED_MIND",
						  "The_Compound_Effect",
						  "To_Sell_Is_Human",
						  //Alphabet : E
						  "The_Power_of_Now",
						  //Alphabet : G
						  "The_Richest_Man_in_Babylon",
						  "The_ONE_Thing",
						  //Alphabet : J
						  "Built_to_Last",
						  "Great_by_Choice",
						   "How_the_Mighty_Fall",
						  	"You_Are_a_Badass, Stop_Doubting_Your_Greatness",
							"YOU_ARE_A_BADASS_AT_MAKING_MONEY",
						  "The_Power_of_Your_Subconscious_Mind",
						  "Do_Over",
						  "Finish",
						  "Failing_Forward",
						  "What_Every_BODY is_Saying",
						 //Alphabet : M 
						 "David_and_Goliath",
						 "Outliers__The_Story_of_Success",
						 "What_They_Don't_Teach_You at_Harvard_Business_School",
						  //Alphabet : N 
						  "Think_and_Grow_Rich",
						 "The_Power_of_Positive_Thinking",  	
						 //Alphabet : P
						 "Why_We_Buy : The_Science_of_Shopping",
						 
						  //Alphabet : R
						  "The_Secret : The-Science-of-Getting-Rich",
						  
						  //Alphabet : S
						  "The_7_Habits_of_Highly_Effective_People",
						  "The_Speed_of_Trust",
						  "Start_with_Why",
						  //Alphabet : T
						   "Secrets of the Millionaire Mind ( PDFDrive.com )",
						  "MONEY_Master_the_Game",
						  "Awaken_The_Giant_Within",
						  "Delivering_Happiness",
						  "The_4-Hour_Body",
						  	"The_4-Hour_Workweek",
						  "Tribe_of_Mentors",
						  //Alphabet :Z
						  "SEE_YOU_AT_THE_TOP"
						  
					 ];
					 
	book_cover = [
	"rich-dad-poor-dad",
	//Alphabet : A 
	"elon-musk-biography",
	"audiobook",
	"audiobook",
	"audiobook",//HINDI_AFFIRMATION_2__
	//Alphabet : B
	"audiobook", //get smart
	"goals-how-to-get-everythings-your-want",
     "the-psychology-of-selling",
	 "audiobook",  //no excuses
	 "audiobook",//Eat_That_Frog
	 "audiobook",//Becoming_Steve_Jobs
	 
	 //Alphabet : C
	 "audiobook", //deep work
	 "audiobook",//The_Productivity_Project
	 "audiobook", //too fast to think
	 "audiobook", //The power of habit
	 
	 //Alphabet : D
	 "audiobook", //the magic of thinking big
	 "audiobook",
	 "the-organized-mind",
	 "audiobook",//The_Compound_Effect_
	 "audiobook",//To_Sell_Is_Human_
	 
	 //Alphabet : E 
	 "the-power-of-now",
	 
	 //Alphabet : G
	"the-richest-man-in-babylon",
	"audiobook",//The_ONE_Thing_
	
	//Alphabet : J
	"audiobook", //Built to Last
	"audiobook", //Great By Choice
	"audiobook", //How the Mighty Fall
	"you-are-badass-how-to-stop-doubting-your-greatness",
	"audiobook",//YOU_ARE_A_BADASS_AT_MAKING_MONEY_
	"the-power-of-subconcious-mind",
	"audiobook",//Do_Over
	"audiobook",//Finish_
	"audiobook",//Failing_Forward
	"what-everybody-is-saying",//What_Every_BODY_is_Saying_
	
    //Alphabet : M
	"audiobook",//David_and_Goliath
	"audiobook",
	"audiobook",//What_They_Don't_Teach_You_at_Harvard_Business_School
	//Alphabet : N
	"think-and-grow-rich",
	"audiobook",//The_Power_of_Positive_Thinking_
	//Alphabet : P
	"audiobook",//Paco_Underhill
	
	//Alphabet : R
	"the-secret-the-science-of-getting-rich",//The_Secret_
	//Alphabet : S
	"the-7-habit-of-highly-effective-people",
     "audiobook", //the speed of trust
	 "audiobook",//Start_with_Why
	 //Alphabet : T
	"secret-of-the-millionaire-mind",
	"money-master-the-game",
	"audiobook",//Awaken_The_Giant_Within
	"audiobook",//Delivering_Happiness_
	"audiobook",//the 4 hour body
	"the-4-hour-workweek",
	"audiobook",//Tribe_of_Mentors_
	//Alphabet : Z
	"see-you-at-the-top",
	];				 
	/*
	
	


	"the-lean-startup.jpg
	"building-wealth-like-a-billionaire.jpg",
	"the-strait-path-to-real-estate-wealth.jpg",
	"i-can-read-you-like-a-book.jpg",
	"law-of-success.jpg",
	

	
	*/
    book_link = [
	                       "Rich Dad Poor Dad ( PDFDrive.com )",
						   //Alphabet : A
						   "ashlee-vance-elon-musk-tesla-spacex-and-the-quest-for-a-fantastic-future",
						   "Total_Recall",
						   "It's_Possible",
						   "HINDI_AFFIRMATION_2",
						   //Alphabet : B
                          "Get_Smart",
                          "GOALS How to Get Everything You Want Faster Than You Ever Thought Possible By Brian Tracy",						  
						  "Psychology Of Selling - The Art Of Closing Sales - Brian Tracy",
						  "No_Excuses",
						  "Eat_That_Frog",
						  "Becoming_Steve_Jobs",
                         //Alphabet : C						  
						  "Deep_Work",
						  "The_Productivity_Project",
						  "Too_Fast_to_Think",
						  "The_Power_of_Habit",
						  //Alphabet : D
						  "The_Magic_of_Thinking_Big",
						  "MINDFULNESS",
						  "organized-mind-thinking-straight-in-the-levitin-daniel-j",
						  "The_Compound_Effect",
						  "To_Sell_Is_Human",
						  //Alphabet : E
						  "The-Power-of-Now",
						  //Alphabet : G
						  "THE R ICHEST M ANIN BABYLON ",
						  "The_ONE_Thing",
						  //Alphabet : J
						  "Built_to_Last",
						  "Great_by_Choice",
						   "How_the_Mighty_Fall",
						  	"You Are a Badass How to Stop Doubting Your Greatness and Start Living an Awesome Life ( PDFDrive.com )",
							"YOU_ARE_A_BADASS_AT_MAKING_MONEY",
						  "The_Power_of_Your_Subconscious_Mind",
						  "Do_Over",
						  "Finish",
						  "Failing_Forward",
						  "WHAT  EVERY BODY IS  SAYING",
						 //Alphabet : M 
						 "David_and_Goliath",
						 "Outliers__The_Story_of_Success",
						 "What_They_Don't_Teach_You at_Harvard_Business_School",
						  //Alphabet : N 
						  "Think and Grow Rich by Napoleon Hill ( PDFDrive.com )",
						 "The_Power_of_Positive_Thinking",  	
						 //Alphabet : P
						 "Why_We_Buy : The_Science_of_Shopping",
						 
						  //Alphabet : R
						  
						  "The-Science-of-Getting-Rich",
						  
						  //Alphabet : S
						  "The 7 habits of highly effective people",
						  "The_Speed_of_Trust",
						  "Start_with_Why",
						  //Alphabet : T
						   "Secrets of the Millionaire Mind ( PDFDrive.com )",
						  "money_master_the_game__7_simple_-_tony_robbins",
						  "Awaken_The_Giant_Within",
						  "Delivering_Happiness",
						  "The_4-Hour_Body",
						  	"The 4-Hour Workweek_ Escape 9-5, Live Anywhere, and Join the New Rich ( PDFDrive.com )",
						  "Tribe_of_Mentors",
						  //Alphabet :Z
						  "See.You.At.The.Top"
						  
	];
	
			  
			  ebook_path = "audio-summary-by-aadi-gurudas";
			  ebook_id = "ebook_card_1";
			  book_cover_path = "./img-bookcovers/";
			  pdf_path = "./pdf-ebooks/"
			  loadEbooks();		 
			  
			  
			  
			  
			  