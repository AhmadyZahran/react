import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { useParams } from 'react-router-dom';

function Match({matchId}) {
    const [matchs, setMatchs] = useState([])
    const search = useParams();
    const [result, setResult] = useState(matchId);

    // // console.log(search + "fromMatch");
    // console.log(result);
    // console.log(MatchId);
    // if (MatchId) {
    //     setResult(MatchId);
    // }
    console.log(matchId);
    // console.log(MatchId);

    useEffect(() => {
        // console.log(MatchId);
        let urli;
        if (matchId !== '') {
            setResult(matchId)
            urli = `https://www.balldontlie.io/api/v1/games/47179`;
            console.log(urli);
            let config = {
                method: 'get',
                url: urli,
                headers: {}
            };

            axios(config)
                .then(function (response) {
                    console.log(response.data.home_team);
                    setMatchs(response.data.home_team)
                    console.log(matchs);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else {
            urli = `https://www.balldontlie.io/api/v1/games`;
            console.log(urli);
            let config = {
                method: 'get',
                url: urli,
                headers: {}
            };
            
            axios(config)
            .then(function (response) {
                console.log(response.data.data);
                setMatchs(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        }

    },[matchId, result])



    return (



        <Table striped bordered hover >
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
                {matchs?.map((match) => {
                    return (
                        <tr key={match.id}>
                            <td>{match.id}</td>
                            <td>{match.date}</td>
                            <td>{match.home_team_score}</td>
                            <td>{match.period}</td>
                            <td>{match.postseason}</td>
                            <td>{match.season}</td>
                            <td>{match.status}</td>
                        </tr>

                    )
                })}
            </tbody>
        </Table>




    )
}

export default Match

