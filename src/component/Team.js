import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
// import './App.css';

function Team() {

    const [teams, setTeams] = useState([])

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://www.balldontlie.io/api/v1/teams',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(response.data.data);
                setTeams(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    return (

        teams.map((team) => {
            return (
<div className=''>

                <Table striped bordered hover key={team.id}>
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
                        <tr>
                            <td>{team.id}</td>
                            <td>{team.abbreviation}</td>
                            <td>{team.city}</td>
                            <td>{team.conference}</td>
                            <td>{team.division}</td>
                            <td>{team.full_name}</td>
                            <td>{team.name}</td>
                        </tr>

                    </tbody>
                </Table>
                </div>

            )
        })


    )
}

export default Team