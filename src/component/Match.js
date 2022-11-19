import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'


function Match() {
    const [matchs, setMatchs] = useState([])

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://www.balldontlie.io/api/v1/games',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                // console.log(response.data.data);
                setMatchs(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])



    return (

        matchs.map((match) => {
            return (


                <Table striped bordered hover key={match.id}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>date</th>
                            <th>home_team_score</th>
                            <th>period</th>
                            <th>postseason</th>
                            <th>season</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{match.id}</td>
                            <td>{match.date}</td>
                            <td>{match.home_team_score}</td>
                            <td>{match.period}</td>
                            <td>{match.postseason}</td>
                            <td>{match.season}</td>
                            <td>{match.status}</td>
                        </tr>

                    </tbody>
                </Table>


            )
        })


    )
}

export default Match

