import React from "react";
import igdb from "../../api/igdb";
import axios from "axios";

class GamesList extends React.Component {
    componentDidMount = async () => {
        // THIS WORKS IF cors-anywhere PROXY SERVER IS RUNNING
        const response = await axios.get("http://0.0.0.0:8080/https://api-v3.igdb.com/games", {
            headers: {
                "user-key": "e34a9254f26b9a3ff8287de23edb3f68",
            },
        });
        console.log(response);
    };

    render() {
        return <div>MANY GAMES</div>;
    }
}

export default GamesList;

// TODO: clean up this code. cors-anywhere is inside of this package - move outside and maybe
// put them both under the same git repo
// api requests work after going through the proxy - clean this up by abtracting api setup in its own file
