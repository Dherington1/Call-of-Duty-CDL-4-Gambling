const playerDb = [ 
    {

        "name": "Scump",
        "team": "Optic Texas",
        "gameModes": 
        [
            {
                
                "mode": "Hardpoint",
                "maps": 
                [
                    {
                        "map": "Tuscan",
                        "stats": {
                            "kills": ["17 / 22", "24 / 26", "21 / 20", "28 / 26", "23 / 12", "29 / 24", "28 / 31", "27 / 25", "21 / 26", "24 / 27", "23 / 29", "28 / 27", "27 / 22", "13 / 24"],
                            "Opponent": ["Rokkr", "Breach", "Ravens", "Faze", "Thieves", "Surge", "Thieves", "Mutineers", "Subliners", "Mutineers", "Ultra", "Breach", "Ultra", "Faze"],
                            "Average": "23.8"
                        }
                    },
                    { 
                        "map": "Bocage",   
                        "stats": {
                            "kills": ["35 / 29", "28 / 30", "33 / 32", "36 / 31", "34 / 32", "29 / 44", "36 / 32", "29 / 33", "38 / 30", "27 / 34", "30 / 36", "30 / 32", "31 / 27", "34 / 34", "31 / 29", "33 / 33", "34 / 33", "37 / 33", "24 / 28"],
                            "Opponent": ["Ravens", "Legion", "Ultra", "Surge", "Faze", "Surge", "Mutineers", "Surge", "Thieves", "Guerillas", "Breach", "Rokkr", "Legion", "Subliners", "Ultra", "Rokkr", "Breach", "Ultra", "Faze"],
                            "Average": "32.05"
                        }
                    },
                    { 
                        "map": "Berlin",
                        "stats": {
                            "kills": ["21 / 33", "31 / 32", "24 / 27", "29 / 35", "26 / 20", "24 / 19", "20 / 25", "21 / 25", "25 / 24", "25 / 20", "27 / 28", "15 / 26", "15 / 28", "33 / 21"," 27 / 31"],
                            "Opponent": ["Ravens", "Rokkr", "Ravens", "Thieves", "Rokkr", "Thieves", "Mutineers", "Faze", "Subliners", "Thieves", "Mutineers", "Thieves", "Rokkr", "Legion", "Subliners"],
                            "Average": "24.20"
                        }
                    },
                    {
                        "map": "Gavutu",
                        "stats": {
                            "kills": ["20 / 26", "33 / 14", "15 / 14", "28 / 19", "27 / 16", "20 / 19 ", "23 / 25", "26 / 20", "21 / 18", "22 / 20", "29 / 18", "26 / 20"],
                            "Opponent": ["Breach", "Faze", "Faze", "Guerillas", "Faze", "Rokkr", "Mutineers", "Faze", "Ravens", "Thieves", "Breach", "Rokkr"],
                            "Average": "24.17"
                        }
                    }
                ]
            },
            {
                "mode": "Search and Destroy",
                "maps": [
                    {
                        "map": "Tuscan",
                        "stats": {
                            "kills": ["2 / 7", "5 / 5", "6 / 8", "2 / 3", "6 / 7", "8 / 7", "3 / 8 ", "6 / 9", "4 / 5 ", "11 / 4", "4 / 3", "5 / 5", "5 / 4"],
                            "Opponent": ["Rokkr", "Ultra", "Breach", "Faze", "Faze", "Thieves", "Faze", "Surge", "Thieves", "Mutineers", "Legion", "Rokkr", "Breach"],
                            "Average": "5.15"
                        }
                    },
                    { 
                        "map": "Bocage",   
                        "stats": {
                            "kills": ["5 / 10", "11 / 4", "6 / 7", "9 / 8", "10 / 5", "5 / 7", "10 / 6", "11 / 5", "7 / 9", "4 / 4", "2 / 8", "3 / 7"],
                            "Opponent": ["Ravens", "Mutineers", "Thieves", "Faze", "Ravens", "Breach", "Rokkr", "Subliners", "Ultra", "Rokkr", "Ultra", "Faze"],
                            "Average": "6.92"
                        }
                    },
                    { 
                        "map": "Berlin",
                        "stats": {
                            "kills": ["10 / 8" ,"8 / 5", "3 / 7", "6 / 7", "5 / 6", "5 / 3", "9 / 6", "9 / 5", "4 / 6", "5 / 5", "3 / 8", "9 / 8", "5 / 6", "7 / 6", "11 / 4", "7 / 7", "4 / 7", "6 / 8", "5 / 7"],
                            "Opponent": ["Ravens", "Rokkr", "Legion", "Mutineers", "Faze", "Ravens", "Faze", "Mutineers", "Mutineers", "Guerillas", "Mutineers",  "Subliners", "Thieves", "Mutineers", "Guerillas", "Thieves", "Breach", "Ultra", "Ultra"],
                            "Average": "8.14"
                        }
                    },
                    {
                        "map": "Desert Seige",
                        "stats": {
                            "kills": ["5 / 8", "3 / 6", "5 / 6" , "4 / 8"],
                            "Opponent": ["Faze", "Thieves", "Guerillas", "Rokkr"],
                            "Average": "4.25"
                        }
                    }
                ]
            },
            {
        
                "mode": "Control",
                "maps": 
                [
                    {
                        "map": "Tuscan",
                        "stats": {
                            "kills": ["26 / 19", "28 / 24" ,"24 / 25", "24 / 27", "33 / 32", "29 / 26", "28 / 24", "20 / 16", "31 / 31", "23 / 23", "27 / 21", "23 / 16", "31 / 28", "26 / 25", "19 / 29", "19 / 13", "17 / 22", "22 / 22", "12 / 23", "27 / 33", "22 / 23", "34 / 36"],
                            "Opponent": ["Ravens", "Rokkr", "Legion", "Ultra", "Surge", "Faze", "Faze", "Thieves", "Surge", "Mutineers", "Surge", "Thieves", "Rokkr", "Subliner", "Mutineers", "Ravens", "Breach", "Rokkr", "Legion", "Rokkr", "Breach", "Faze"],
                            "Average": "24.77"
                        }
                    },
                    { 
                        "map": "Berlin",
                        "stats": {
                            "kills": ["28 / 27" ,"23 / 13", "18 / 21", "15 / 25", "25 / 17", "19 / 21", "25 / 23"],
                            "Opponent": ["Guerillas", "Faze", "Thieves", "Thieves", "Guerillas", "Subliners", "Ultra"],
                            "Average": "21.86"
                        }
                    },
                    {
                        "map": "Gavutu",
                        "stats": {
                            "kills": ["23 / 18", "13 / 12", "27 / 20", "32 / 27", "29 / 23", "24 / 14", "18 / 25"],
                            "Opponent": ["Breach", "Ravens", "Faze", "Guerillas", "Faze", "Mutineers", "Ultra"],
                            "Average": "23.71"
                        }
                    }
                ]
            }
        ]

    },
    {
        "name": "Dashy",
        "team": "Optic Texas",
        "gameModes": 
        [
            {
                
                "mode": "Hardpoint",
                "maps": 
                [
                    {
                        "map": "Tuscan",
                        "stats": {
                            "kills": [],
                            "Opponent": ["Rokkr", "Breach", "Ravens", "Faze", "Thieves", "Surge", "Thieves", "Mutineers", "Subliners", "Mutineers", "Ultra", "Breach", "Ultra", "Faze"],
                            "Average": "23.8"
                        }
                    },
                    { 
                        "map": "Bocage",   
                        "stats": {
                            "kills": [],
                            "Opponent": ["Ravens", "Legion", "Ultra", "Surge", "Faze", "Surge", "Mutineers", "Surge", "cc", "Guerillas", "Breach", "Rokkr", "Legion", "Subliners", "Ultra", "Rokkr", "Breach", "Ultra", "Faze"],
                            "Average": "32.05"
                        }
                    },
                    { 
                        "map": "Berlin",
                        "stats": {
                            "kills": [],
                            "Opponent": ["Ravens", "Rokkr", "Ravens", "Thieves", "Rokkr", "Thieves", "Mutineers", "Faze", "Subliners", "Thieves", "Mutineers", "Thieves", "Rokkr", "Legion", "Subliners"],
                            "Average": "24.20"
                        }
                    },
                    {
                        "map": "Gavutu",
                        "stats": {
                            "kills": [],
                            "Opponent": ["Breach", "Faze", "Faze", "Guerillas", "Faze", "Rokkr", "Mutineers", "Faze", "Ravens", "Thieves", "Breach", "Rokkr"],
                            "Average": "24.17"
                        }
                    }
                ]
            },
            {
                "mode": "Search and Destroy",
                "maps": [
                    {
                        "map": "Tuscan",
                        "stats": {
                            "kills": [],
                            "Opponent": [],
                            "Average": ""
                        }
                    },
                    { 
                        "map": "Bocage",   
                        "stats": {
                            "kills": [],
                            "Opponent": [],
                            "Average": ""
                        }
                    },
                    { 
                        "map": "Berlin",
                        "stats": {
                            "kills": [],
                            "Opponent": [],
                            "Average": ""
                        }
                    },
                    {
                        "map": "Desert Seige",
                        "stats": {
                            "kills": [],
                            "Opponent": [],
                            "Average": ""
                        }
                    }
                ]
            },
            {
        
                "mode": "Control",
                "maps": 
                [
                    {
                        "map": "Tuscan",
                        "stats": {
                            "kills": [],
                            "Opponent": [],
                            "Average": ""
                        }
                    },
                    { 
                        "map": "Berlin",
                        "stats": {
                            "kills": [],
                            "Opponent": [],
                            "Average": ""
                        }
                    },
                    {
                        "map": "Gavutu",
                        "stats": {
                            "kills": [],
                            "Opponent": [],
                            "Average": ""
                        }
                    }
                ]
            }
        ]

    }
]

export default playerDb;