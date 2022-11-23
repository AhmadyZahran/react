import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { useParams } from 'react-router-dom';
// import './App.css';

function Team({ TeamId }) {

    const [teams, setTeams] = useState([])
    const search = useParams();
    const [result, setResult] = useState(TeamId);

    useEffect(() => {
        // console.log(playerId);
        let urli;
        if (TeamId) {
            urli = `https://www.balldontlie.io/api/v1/teams/${TeamId}`;
            console.log(urli);
            var config = {
                method: 'get',
                url: urli,
                headers: {}
            };

            axios(config)
                .then(function (response) {
                    // console.log(response);
                    setTeams([response.data])
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else {
            urli = `https://www.balldontlie.io/api/v1/teams`;
            console.log(urli);
            var config = {
                method: 'get',
                url: urli,
                headers: {}
            };

            axios(config)
                .then(function (response) {
                    // console.log(response);
                    setTeams(response.data.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }, [TeamId])

    return (

        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>id</th>
                    <th>abbreviation</th>
                    <th>city</th>
                    <th>conference</th>
                    <th>division</th>
                    <th>full_name</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                {teams?.map((team) => {
                    return (
                        <tr key={team.id} >
                            <td>{team.id}</td>
                            <td>{team.abbreviation}</td>
                            <td>{team.city}</td>
                            <td>{team.conference}</td>
                            <td>{team.division}</td>
                            <td>{team.full_name}</td>
                            <td>{team.name}</td>
                        </tr>
                    )
                })}

            </tbody>
        </Table>



    )

}

export default Team