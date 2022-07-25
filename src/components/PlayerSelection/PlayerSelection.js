import React from 'react'
import {useState, useEffect} from 'react';

// DB information
import playerDb from '../../db/playerDb';
import gameModes from '../../db/gameMode';

// Player selection drop down
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// statcard component
import StateCard from '../StatCard/StatCard';

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
    const [playerStats, setPlayerStats] = useState([])


    // handles which player was picked
    const handlePlayerPicked = (e) => {
        // get id from DOM
        setId(e.target.id);
        
        // Set the players team to a state
        playerDb.map(player => {
            setPlayerTeam(player.team);
        })
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
    let average = ""

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
                const playerMaps = playerStats.maps

                // gives us object of map picked by user and comes with the player stats picked
                const comparedMap = playerMaps.filter(compared => compared.map === compareMap);

                // maps into stats object 
                comparedMap.map(sel => {
                    // pushes stats into an array
                    statArr.push(sel.stats)
                    console.log(sel.stats);
                })

            })
        })

    }
  
    const handleStats = () => {
        statArr.map(stats => {

            const playerKills = stats.kills;
            playerKills.map(kill => {playerKillz.push(kill);});

            const playerOpponent = stats.Opponent;
            playerOpponent.map(op => {playerOp.push(op)});

            average = stats.Average;

            // console.log(playerKillz);
            // playerKillz.map(lol => console.log(lol))
            // console.log("Helloooooo there")
        })
    }

    // load our player picked
    useEffect(() => {
        handleComparisons()
        handleStats()
        console.log(playerKillz);
    })
    

    // used to gather maps available for certain gamemodes
    const handleGameModePick = (e) => {
        // take in id 
        const chosenMode = e.target.id;

        // set the chosen mode to compare state
        setCompareGamemode(chosenMode)

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
        setCompareMap(chosenMap)
    }



    const chicken = "34.3"

    // issue with stateArr on line 78 
    // not saving to arr or something as its not working in the return
    // Only hardpoint for scump is structured correctly

  return (
    <>
        {/* Player choices */}
        <DropdownButton id="dropdown-basic-button" title="Player Choices">
            {playerDb.map(player => (
                <Dropdown.Item id={player.name} onClick={handlePlayerPicked}>{player.name}</Dropdown.Item>
            ))}
        </DropdownButton>



        {/* If a player has been selected display their name, team and image of them*/}
        {(playerId !== "") ? (
          <div>
            <img src={`images/Players/${playerId}.png`} alt={`picture of ${playerId}`} />
            <h4>{playerId}</h4>
            <h4>{selectedPlayerTeam}</h4>

            {/* Drop downs for gamemode */}
            <DropdownButton id="dropdown-basic-button" title="Gamemode">
                {gameModes.map(mode => (
                    <Dropdown.Item id={mode.title} onClick={handleGameModePick}> {mode.title} </Dropdown.Item>
                ))}
            </DropdownButton>

            {(compareGamemode !== "") ? (
                <h4>{compareGamemode}</h4>
            ) : (
                <div></div>
            )}

            {/* Drop downs for maps */}
            <DropdownButton id="dropdown-basic-button" title="Maps">
                {modes.map(maps => (
                    <Dropdown.Item id={maps} onClick={MapsFromGameMode}> {maps} </Dropdown.Item>
                ))}
            </DropdownButton>

            {(compareMap !== "") ? (
                <h4>{compareMap}</h4>
            ) : (
                <div></div>
            )}


            {/* Player stats will go here */}
            {(compareMap !== "") ? (
                
                playerKillz.map(stats => (
                   <h4>{stats}</h4>
                ))
            ) : (
                <div>hello</div>
            )}

            {average}


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