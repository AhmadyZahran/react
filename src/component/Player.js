import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { useParams } from 'react-router-dom';
// import './App.css';

function Player({ playerId }) {
    const [players, setPlayers] = useState([])
    const search = useParams();
    const [result, setResult] = useState(playerId);

    // // console.log(search + "fromPlayer");
    // console.log(result);
    // console.log(playerId);
    // if (playerId) {
    //     setResult(playerId);
    // }

    // console.log(playerId);

    useEffect(() => {
        // console.log(playerId);
        let urli;
        if (playerId) {
            urli = `https://www.balldontlie.io/api/v1/players/${playerId}`;
            console.log(urli);
            var config = {
                method: 'get',
                url: urli,
                headers: {}
            };

            axios(config)
                .then(function (response) {
                    // console.log(response);
                    setPlayers([response.data])
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else {
            urli = `https://www.balldontlie.io/api/v1/players`;
            console.log(urli);
            var config = {
                method: 'get',
                url: urli,
                headers: {}
            };

            axios(config)
                .then(function (response) {
                    // console.log(response);
                    setPlayers(response.data.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }, [playerId])

    // useEffect(() => {
    //     var config = {
    //         method: 'get',
    //         url: `https://www.balldontlie.io/api/v1/players/${result}`,
    //         headers: {}
    //     };

    //     axios(config)
    //         .then(function (response) {
    //             // console.log(response.data.data);
    //             setPlayers(response.data.data)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }, [result])


    return (



        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>id</th>
                    <th>first_name</th>
                    <th>height_feet</th>
                    <th>height_inches</th>
                    <th>last_name</th>
                    <th>position</th>

                </tr>
            </thead>
            <tbody>

                {players?.map((player) => {
                    return (
                        <tr key={player.id}>
                            <td>{player.id}</td>
                            <td>{player.first_name}</td>
                            <td>{player.height_feet}</td>
                            <td>{player.height_inches}</td>
                            <td>{player.last_name}</td>
                            <td>{player.position}</td>

                        </tr>
                    )
                })}

            </tbody>
        </Table>


    )
}

export default Player;

