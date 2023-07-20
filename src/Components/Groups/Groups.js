// Librairies
import "./Groups.css";
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Loading from "../Loading/Loading";

const options = {
  method: "GET",
  url: "https://live-score-api.p.rapidapi.com/leagues/table.json",
  params: {
    secret: "PV6M5jOyDd2dzi4zNhmHV0X4I3DRHZkw",
    key: "ZucMTEEg8H5z8Els",
    season: "14",
    competition_id: "244",
  },
  headers: {
    "X-RapidAPI-Key": "ab5f486435mshf09c88ef632f937p1d9aafjsn78c2c6a11acf",
    "X-RapidAPI-Host": "live-score-api.p.rapidapi.com",
  },
};

function Groups() {
  const [groups, setGroups] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGroups = async () => {
      try {
        const response = await axios.request(options);

        // console.log("Groupes :", response.data.data.table);
        setGroups(response.data.data.table);
        groupsOrganisation(response.data.data.table);
      } catch (error) {
        console.log(error.response);
      }
    };

    setLoading(true);
    getGroups();
  }, []);

  // Variables
  const groupA = [];
  const groupB = [];
  const groupC = [];
  const groupD = [];
  const groupE = [];
  const groupF = [];
  const groupG = [];
  const groupH = [];

  // Fonctions
  const groupsOrganisation = async (array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].group_name === "A") {
        groupA.push(array[i]);
      } else if (array[i].group_name === "B") {
        groupB.push(array[i]);
      } else if (array[i].group_name === "C") {
        groupC.push(array[i]);
      } else if (array[i].group_name === "D") {
        groupD.push(array[i]);
      } else if (array[i].group_name === "E") {
        groupE.push(array[i]);
      } else if (array[i].group_name === "F") {
        groupF.push(array[i]);
      } else if (array[i].group_name === "G") {
        groupG.push(array[i]);
      } else if (array[i].group_name === "H") {
        groupH.push(array[i]);
      }
    }

    // console.log("Groupe A :", groupA);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="Groups">
          <div className="groupe">
            {groupA.map((team) => {
              return <div key={team.team_id}>{team.name}</div>;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Groups;
