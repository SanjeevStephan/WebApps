   /*
     parent script : audio_script.js
	 description    : this script displays the audio file name along with playable audio track next to it.
	 audio_script.js uses below variables[ audio_files  | audio_titles | audio_id ] to load the list 
   */
   
   audio_files = [
                         "Rich_Dad_Poor_Dad_(Robert_Kiyosaki_and_Sharon_Lechter)_Book_Summary_in_Hinglish_By_Adi_Gurudas.mp3",
						 "RICH_VS_POOR_MINDSET___An_Eye_Opening_Interview_with_Robert_Kiyosaki(256kbps).mp3",
						 "ROBERT_KIYOSAKI_Life_Advice_Will_Change_Your_Future_(LISTEN_TO_THIS_EVERY_DAY!)(256kbps).mp3",
						 "[Robert_Kiyosaki]_4_Assets_that_make_people_Rich(256kbps).mp3",
						 "Money_Makes_You_Poor_If_You_Knew_This_You_Wouldnt_Be_Poor_Robert_Kiyosaki_Speech.mp3",
						 "Robert_Kiyosaki_Rich_Dad_Poor_Dad__How_To_Use_Debt_To_Get_Rich.mp3",
						 "Robert_Kiyosaki_2019_The_Speech_That_Broke_The_Internet!_KEEP_THEM_POOR!(256kbps).mp3",
						 "The_Shocking_Truth_About_Your_Future_Robert_Kiyosaki(256kbps).mp3"
						  
						  ];
			   audio_titles = [ 
			              "Rich Dad Poor Dad (Robert_Kiyosaki_and_Sharon_Lechter) Book Summary in Hinglish By Adi_Gurudas",
						  "RICH VS POOR MINDSET An Eye Opening Interview with Robert_Kiyosaki",
						  "ROBERT KIYOSAKI Life Advice Will Change Your Future",
						  "4 Assets that make people Rich ",
						  "Money Makes You Poor If You Knew this,you wouldn't be poor",
						  "Robert Kiyosaki Rich Dad Poor Dad How To Use Debt To Get_Rich.mp3",
						  "Robert Kiyosaki 2019 The Speech That Broke The Internet! KEEP THEM POOR",
						  "The Shocking Truth About Your Future Robert Kiyosaki"
					 ];
					 
			  
			  audio_path = "audio-robert-kiyosaki";
			  audio_id = "audio_card_2";
			  loadAudio();		 