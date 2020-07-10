   /*
     parent script : audio_script.js
	 description    : this script displays the audio file name along with playable audio track next to it.
	 audio_script.js uses below variables[ audio_files  | audio_titles | audio_id ] to load the list 
   */
   
   audio_files = [
						 "[Audiobook]Rich_Dad_Poor_Dad_by_Robert_Kiyosaki.mp3",  
						 "[Audiobook]Increase_your_financial_IQ.mp3",
						 "[Audiobook]Cashflow_Quadrant_Guide_to_Financial_Freedom_Robert_T._Kiyosaki.mp3",
						 "[Audiobook]Rich_Dad_Guide_To_Investing_Robert_T._Kiyosaki_Part_1.mp3",
						 "[Audiobook]The_Business_of_the_21st_Century_Robert_T_Kiyosaki.mp3",
						
						  ];
			   audio_titles = [ 
						  "Rich_Dad_Poor_Dad",
						  "Increase_your_financial_IQ",
						  "Cashflow_Quadrant_Guide_to_Financial_Freedom",
						  "Rich_Dad's_Guide_To_Investing",
						  "The_Business_of_the_21st_Century",
					 ];
					 
			  
			  audio_path = "audio-robert-kiyosaki";
			  audio_id = "audio_card_1";
			  loadAudio();		 