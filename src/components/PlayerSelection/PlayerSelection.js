import React from 'react'
import {useState, useEffect} from 'react';
import './PlayerSelection.css'

// DB information
import playerDb from '../../db/playerDb';
import gameModes from '../../db/gameMode';

// statcard component
import StateCard from '../StatCards/StatCard';

//  import MUI
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



const PlayerSelection = () => {
    // state to keep track of who was picked
    const [playerId, setId] = useState("");
    // players team
    const [selectedPlayerTeam, setPlayerTeam] = useState("");
    // modes to be used in dropdown selection
    const [modes, setModes] = useState([]);

    // gamemode picked from drop down to be compared to Player stats 
    const [compareGamemode, setCompareGamemode] = useState("");
    // map picked from drop down to be compared to Player stats
    const [compareMap, setCompareMap] = useState("");

    // player stats from comparing picked gamemode and map
    const [playerStatsKills, setPlayerStatsKills] = useState([]);
    const [playerStatsOpponent, setPlayerStatsOpponent] = useState([]);
    const [playerStatsAvg, setPlayerStatsAvg] = useState([]);

    // handles which player was picked
    const handlePlayerPicked = (e) => {
        // get id from DOM
        setId(e.target.id);
        
        // Set the players team to a state
        playerDb.map(player => {
            setPlayerTeam(player.team);
        })
    }

    // resets maps and gamemode when player is changed
    useEffect(() => {
        setCompareGamemode("")
        setCompareMap("")
        setModeName("")
        setMapName("")
    }, [playerId])
    
    // used to gather maps available for certain gamemodes
    const handleGameModePick = (e) => {
        // take in id 
        const chosenMode = e.target.id;

        // set the chosen mode to compare state
        setCompareGamemode(chosenMode);

        // map through that gamemode to get into that gamemode object
        const pickedObject = gameModes.filter(chosen => chosen.title === chosenMode);

        // map through that object to get the map array which is map through in the return drop down menu
        pickedObject.map(maps => {
            setModes(maps.Maps);
        })
    }

    // used to gather chosen map to be compared to player stats
    const MapsFromGameMode = (e) => {
        // take in id 
        const chosenMap = e.target.id;
        // set the chosen map to compare state
        setCompareMap(chosenMap);
    }

    // array used to get maps in handleComparisons() line 62
    let gameModeArr = []
    // array used for stats
    let statArr = []
    // for player kills
    let playerKillz = []
    // for player Opponenet
    let playerOp = []
    // for player average
    let average = "";

    // used to compare the gamemode picked to player picked stats
    const handleComparisons = () => {
        // set chosen to our picked player
        const chosenPlayer = playerDb.filter(player => player.name === playerId);

        // chosen is Player object so map to gamemodes
        chosenPlayer.map(picked => {
            // moves into gameMode array
            const playerGamemodes = picked.gameModes;

            // give gamemode chosen by user in the player object
            const comparedMode = playerGamemodes.filter(selected => selected.mode === compareGamemode);

            // push to arr used to get maps
            gameModeArr.push(comparedMode);
        })

        // moves into maps of the player selected
        gameModeArr.map(stats => {
            // stats is an array, map to get maps
            stats.map(playerStats => {
                const playerMaps = playerStats.maps;

                // gives us object of map picked by user and comes with the player stats picked
                const comparedMap = playerMaps.filter(compared => compared.map === compareMap);

                // maps into stats object 
                comparedMap.map(sel => {
                    // pushes stats into an array
                    statArr.push(sel.stats);
                    console.log(sel.stats);
                })

            })
        })
    }
  
    // setting current stats to arrays
    const handleStats = () => {
        statArr.map(stats => {
            // setting to playerKills
            const playerKills = stats.kills;
            playerKills.map(kill => {playerKillz.push(kill)});

            // setting to playerOp
            const playerOpponent = stats.Opponent;
            playerOpponent.map(op => {playerOp.push(op)});

            // setting to average String
            average = stats.Average;

        })
    }

    // Loads only when compare states are changed
    useEffect(() => {
        // calls comparing functions 
        handleComparisons();
        handleStats();

        // set results of compared to stats
        setPlayerStatsKills(playerKillz)
        setPlayerStatsOpponent(playerOp)
        setPlayerStatsAvg(average)
    }, [compareGamemode, compareMap])


    // For MUI player selection
    const [playerName, setPlayerName] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handlePlayerChange = (event) => {
        setPlayerName(event.target.value);
    };
    const handleClosePlayer = () => {
        setOpen(false);
    };
    const handleOpenPlayer = () => {
        setOpen(true);
    };


    // Item Mui component
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        textAlign: 'center',
    }));


    // For MUI Gamemode selection
    const [modeName, setModeName] = React.useState('');
    const [openMode, setOpenMode] = React.useState(false);

    const handleModeChange = (event) => {
        setModeName(event.target.value);
    };
    const handleCloseMode = () => {
        setOpenMode(false);
    };
    const handleOpenMode = () => {
        setOpenMode(true);
    };


     // For MUI map selection
    const [mapName, setMapName] = React.useState('');
    const [openMap, setOpenMap] = React.useState(false);

    const handleMapChange = (event) => {
        setMapName(event.target.value);
    };
    const handleCloseMap = () => {
        setOpenMap(false);
    };
    const handleOpenMap = () => {
        setOpenMap(true);
    };


  return (
    <>
        {/* centered Player Selection drop down */}
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Item>         
                        <div style={{justifyContent: "center"}}>
                            <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                            <InputLabel id="demo-controlled-open-select-label">Select Player</InputLabel>
                                <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={open}
                                value={playerName}
                                onChange={handlePlayerChange}
                                onClose={handleClosePlayer}
                                onOpen={handleOpenPlayer}
                                label="Select Player"
                                >
                                    {playerDb.map(player => (
                                        <MenuItem value={player.name} id={player.name} onClick={handlePlayerPicked}>{player.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </Box>

        {/* If a player has been selected display their name, team and image of them*/}
        {(playerId !== "") ? (
            <div >
                {/* Player image display */}
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Item>
                                <img className='PlayerImg' justify="center" src={`images/Players/${playerId}.png`} alt={playerId} />
                            </Item>
                        </Grid>
                    </Grid>
                </Box>

                {/* Player name and team display */}
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Item className='PlayerNameItem'>
                            <h4>{playerId}</h4>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            {selectedPlayerTeam}
                        </Item>
                    </Grid>
                </Grid>


                {/* Drop downs for gamemode */}
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Item>         
                                <div style={{justifyContent: "center"}}>
                                    <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                                    <InputLabel id="demo-controlled-open-select-label">Select Gamemode</InputLabel>
                                        <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={openMode}
                                        value={modeName}
                                        onChange={handleModeChange}
                                        onClose={handleCloseMode}
                                        onOpen={handleOpenMode}
                                        label="Select Gamemode"
                                        >
                                            {gameModes.map(mode => (
                                                <MenuItem value={mode.title} id={mode.title} onClick={handleGameModePick}>{mode.title}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>


                {/* Drop downs for maps */}
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Item>         
                                <div style={{justifyContent: "center"}}>
                                    <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                                    <InputLabel id="demo-controlled-open-select-label">Select Map</InputLabel>
                                        <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={openMap}
                                        value={mapName}
                                        onChange={handleMapChange}
                                        onClose={handleCloseMap}
                                        onOpen={handleOpenMap}
                                        label="Select Map"
                                        >
                                            {modes.map(maps => (
                                                <MenuItem value={maps} id={maps} onClick={MapsFromGameMode}>{maps}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>                                


                {/* Player stats will go here */}
                {/* if our state is not empty as we need it to be full with the compared information */}
                {(playerStatsKills.length > 0) ? (
                    
                    playerStatsKills.map(stats => (
                    <h4>{stats}</h4>
                    ))
                ) : (
                    <div>kills length is zero</div>
                )}
                {(playerStatsOpponent.length > 0) ? (
                    
                    playerStatsOpponent.map(stats => (
                    <h4>{stats}</h4>
                    ))
                ) : (
                    <div>Opponenet length is zero</div>
                )}
                {(playerStatsAvg.length !== "") ? (
                    <h4>{playerStatsAvg}</h4>
                ) : (
                    <div>Average length is zero</div>
                )}


            </div>
        ) : (
            <div>
                {/* empty */}
            </div>
        )}

   </>
  )
}

export default PlayerSelection;