import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
// import './App.css';

function Player() {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://www.balldontlie.io/api/v1/players',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                // console.log(response.data.data);
                setPlayers(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])



    return (

        players.map((player) => {
            return (


                <Table striped bordered hover key={player.id}>
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
                        <tr>
                            <td>{player.id}</td>
                            <td>{player.first_name}</td>
                            <td>{player.height_feet}</td>
                            <td>{player.height_inches}</td>
                            <td>{player.last_name}</td>
                            <td>{player.position}</td>

                        </tr>

                    </tbody>
                </Table>


            )
        })


    )
}

export default Player;

