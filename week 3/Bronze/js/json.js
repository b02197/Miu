//Michael Eaton
//Miu week 2
//1303



var gameData = {
	"game1":{
		"gen": ["Genre:","RPG"],
		"gName": ["Game Name:","Final Fantasy XIII"],
		"con": ["Console:", "PS3"],
		"enjoy": ["Enjoy Game:", "Yes"],
		"beat": ["Beaten Game:", "Yes"],
		"date": ["Date Beaten:", "2012-07-12"],
		"rate": ["Rate Game:", "4"],
		"notes": ["Extra Notes:", "Still have to replay and get the rest of the trophies."]
	},
	
	"game2":{
		"gen": ["Genre:","Shooter"],
		"gName": ["Game Name:","Halo 3"],
		"con": ["Console:", "Xbox360"],
		"enjoy": ["Enjoy Game:", "Yes"],
		"beat": ["Beaten Game:", "No"],
		"date": ["Date Beaten:", ""],
		"rate": ["Rate Game:", "3"],
		"notes": ["Extra Notes:", "About half way through the game."]
	},


	"game3":{
		"gen": ["Genre:","Adventure"],
		"gName": ["Game Name:","Legend of Zelda:SWS"],
		"con": ["Console:", "Wii"],
		"enjoy": ["Enjoy Game:", "Yes"],
		"beat": ["Beaten Game:", "No"],
		"date": ["Date Beaten:", ""],
		"rate": ["Rate Game:", "5"],
		"notes": ["Extra Notes:", "Heading into the 3rd temple."]
	},
	
	"game4":{
		"gen": ["Genre:","Action"],
		"gName": ["Game Name:","Uncharted"],
		"con": ["Console:", "PS3"],
		"enjoy": ["Enjoy Game:", "Yes"],
		"beat": ["Beaten Game:", "Yes"],
		"date": ["Date Beaten:", "2010-07-15"],
		"rate": ["Rate Game:", "4"],
		"notes": ["Extra Notes:", "Great game. Need to do another play through."]
	},
	
	"game5":{
		"gen": ["Genre:","Shooter"],
		"gName": ["Game Name:","Call of Duty: MW2"],
		"con": ["Console:", "PS3"],
		"enjoy": ["Enjoy Game:", "Yes"],
		"beat": ["Beaten Game:", "Yes"],
		"date": ["Date Beaten:", "2011-03-13"],
		"rate": ["Rate Game:", "4"],
		"notes": ["Extra Notes:", "Enjoyed the Multiplayer"]
	},
	
	"game6":{
		"gen": ["Genre:","Platformer"],
		"gName": ["Game Name:","Super Mario Bros. 3DS"],
		"con": ["Console:", "3DS"],
		"enjoy": ["Enjoy Game:", "Yes"],
		"beat": ["Beaten Game:", "No"],
		"date": ["Date Beaten:", ""],
		"rate": ["Rate Game:", "3"],
		"notes": ["Extra Notes:", "In world 4."]
	},
	
	"game7":{
		"gen": ["Genre:","RPG"],
		"gName": ["Game Name:","Persona 4 Golden"],
		"con": ["Console:", "PSV"],
		"enjoy": ["Enjoy Game:", "Yes"],
		"beat": ["Beaten Game:", "No"],
		"date": ["Date Beaten:", ""],
		"rate": ["Rate Game:", "5"],
		"notes": ["Extra Notes:", "On August 10th"]
	},
	
	"game8":{
		"gen": ["Genre:","RPG"],
		"gName": ["Game Name:","World of Warcraft"],
		"con": ["Console:", "PC"],
		"enjoy": ["Enjoy Game:", "Yes"],
		"beat": ["Beaten Game:", "No"],
		"date": ["Date Beaten:", ""],
		"rate": ["Rate Game:", "4"],
		"notes": ["Extra Notes:", "Working on a shaman alt."]
	},
	
	"game9":{
		"gen": ["Genre:","Action"],
		"gName": ["Game Name:","Assassin's Creed"],
		"con": ["Console:", "PC"],
		"enjoy": ["Enjoy Game:", "Yes"],
		"beat": ["Beaten Game:", "Yes"],
		"date": ["Date Beaten:", "2008-08-14"],
		"rate": ["Rate Game:", "4"],
		"notes": ["Extra Notes:", "Have also play on the PS3."]
	},
	
	"game10":{
		"gen": ["Genre:","Adventure"],
		"gName": ["Game Name:","Sonic Adventure DX"],
		"con": ["Console:", "PS3"],
		"enjoy": ["Enjoy Game:", "Yes"],
		"beat": ["Beaten Game:", "Yes"],
		"date": ["Date Beaten:", "2012-07-17"],
		"rate": ["Rate Game:", "5"],
		"notes": ["Extra Notes:", "I have loved this game since it came out on the Dreamcast."]
	},
	
	"game11":{
		"gen": ["Genre:","Adventure"],
		"gName": ["Game Name:","Sonic Adventure 2"],
		"con": ["Console:", "PS3"],
		"enjoy": ["Enjoy Game:", "Yes"],
		"beat": ["Beaten Game:", "Yes"],
		"date": ["Date Beaten:", "2012-08-20"],
		"rate": ["Rate Game:", "5"],
		"notes": ["Extra Notes:", "Love this game!!"]
	},
	
	"game12":{
		"gen": ["Genre:","RPG"],
		"gName": ["Game Name:","Dark Souls"],
		"con": ["Console:", "PS3"],
		"enjoy": ["Enjoy Game:", "Yes"],
		"beat": ["Beaten Game:", "No"],
		"date": ["Date Beaten:", ""],
		"rate": ["Rate Game:", "4"],
		"notes": ["Extra Notes:", "I have to play a little and take a brake. This game is hard."]
	},
	
	"game13":{
		"gen": ["Genre:","Racing"],
		"gName": ["Game Name:","Forza 3"],
		"con": ["Console:", "Xbox360"],
		"enjoy": ["Enjoy Game:", "No"],
		"beat": ["Beaten Game:", "No"],
		"date": ["Date Beaten:", ""],
		"rate": ["Rate Game:", "3"],
		"notes": ["Extra Notes:", "I'm not big on the racing games."]
	},
	
	"game14":{
		"gen": ["Genre:","Shooter"],
		"gName": ["Game Name:","Metal Gear Solid 3: Snake Eater"],
		"con": ["Console:", "3DS"],
		"enjoy": ["Enjoy Game:", "No"],
		"beat": ["Beaten Game:", "No"],
		"date": ["Date Beaten:", ""],
		"rate": ["Rate Game:", "2"],
		"notes": ["Extra Notes:", "Controls are to clunky on the 3DS for a shooter. Beater on the PS2."]
	},
	
	"game15":{
		"gen": ["Genre:","Adventure"],
		"gName": ["Game Name:","Shadow of the Colossus"],
		"con": ["Console:", "PS3"],
		"enjoy": ["Enjoy Game:", "Yes"],
		"beat": ["Beaten Game:", "Yes"],
		"date": ["Date Beaten:", "2012-11-31"],
		"rate": ["Rate Game:", "5"],
		"notes": ["Extra Notes:", "Great game."]
	},
	
	"game16":{
		"gen": ["Genre:","Action"],
		"gName": ["Game Name:","Gravity Rush"],
		"con": ["Console:", "PSV"],
		"enjoy": ["Enjoy Game:", "Yes"],
		"beat": ["Beaten Game:", "No"],
		"date": ["Date Beaten:", ""],
		"rate": ["Rate Game:", "3"],
		"notes": ["Extra Notes:", "Good for a free game from the PSN."]
	},
	
	"game17":{
		"gen": ["Genre:","Action"],
		"gName": ["Game Name:","Assassin's Creed 2"],
		"con": ["Console:", "PS3"],
		"enjoy": ["Enjoy Game:", "Yes"],
		"beat": ["Beaten Game:", "Yes"],
		"date": ["Date Beaten:", "2009-10-30"],
		"rate": ["Rate Game:", "5"],
		"notes": ["Extra Notes:", "Fun game."]
	},
	
	"game18":{
		"gen": ["Genre:","Action"],
		"gName": ["Game Name:","Assassin's Creed: Brotherhood"],
		"con": ["Console:", "PS3"],
		"enjoy": ["Enjoy Game:", "Yes"],
		"beat": ["Beaten Game:", "No"],
		"date": ["Date Beaten:", ""],
		"rate": ["Rate Game:", "5"],
		"notes": ["Extra Notes:", "Would have beat this game but game file got corrupt."]
	},
	
	"game19":{
		"gen": ["Genre:","Action"],
		"gName": ["Game Name:","Assassin's Creed: Revolations"],
		"con": ["Console:", "PS3"],
		"enjoy": ["Enjoy Game:", "Yes"],
		"beat": ["Beaten Game:", "Yes"],
		"date": ["Date Beaten:", "2012-11-30"],
		"rate": ["Rate Game:", "5"],
		"notes": ["Extra Notes:", "Great game."]
	},
	
	"game20":{
		"gen": ["Genre:","Action"],
		"gName": ["Game Name:","Assassin's Creed 3"],
		"con": ["Console:", "PS3"],
		"enjoy": ["Enjoy Game:", "Yes"],
		"beat": ["Beaten Game:", "Yes"],
		"date": ["Date Beaten:", "2012-12-20"],
		"rate": ["Rate Game:", "5"],
		"notes": ["Extra Notes:", "Amazing game. Beat it one day before the game ended. Dec 21,2012."]
	}

}