export const timeFormatter = (time) => {
  let hour = "";
  let minutes = "";

  for (let i = 0; i < 3; i++) {
    hour += time[i];
  }

  let frHour = parseInt(hour) + 2;

  for (let i = 3; i < 5; i++) {
    minutes += time[i];
  }

  return frHour + ":" + minutes;
};

export const dateFormatter = (date) => {
  let newDate = new Date(date).toLocaleDateString("fr-FR");

  return newDate;
};

export const dateLiveFormatter = (date) => {
  let newStr = date.substr(0, 10);

  let newDate = new Date(newStr).toLocaleDateString("fr-FR");
  return newDate;
};

export const capitalizeName = (name) => {
  const newStr = name.toLowerCase();
  const array = newStr.split(" ");

  const newArray = [];
  newArray.push(array[array.length - 1]);
  array.pop();
  const array3 = newArray.concat(array);

  for (let i = 0; i < array3.length; i++) {
    array3[i] = array3[i].charAt(0).toUpperCase() + array3[i].slice(1);
  }

  const newName = array3.join(" ");

  return newName;
};

export const leagueName = (id) => {
  if (id === "1") {
    return "Bundesliga";
  } else if (id === "2") {
    return "Premier league";
  } else if (id === "3") {
    return "Liga";
  } else if (id === "4") {
    return "Serie A";
  } else if (id === "5") {
    return "Ligue 1";
  } else if (id === "244") {
    return "UEFA Ligue des Champions";
  } else if (id === "245") {
    return "UEFA Europa League";
  } else if (id === "446") {
    return "UEFA Conference League";
  } else {
    return null;
  }
};

export const statsDataFormat = (object) => {
  // Nouveau tableau
  const newStatsObject = [];
  let newStat;

  for (let stat in object) {
    // Données de la stat sous forme de tableau, sans les ":"
    if (object[stat] !== null) {
      newStat = object[stat].split(":");
    } else {
      object[stat] = "0:0";
      newStat = object[stat].split(":");
    }

    // Enlève les "_" de chaque nom de stat
    stat = stat.split("_").join(" ");

    // Transforme le nom de stat en tableau
    const statArray = stat.split(" ");

    for (let j = 0; j < statArray.length; j++) {
      // La 1ere lettre de chaque nom de stat est en majuscule
      statArray[j] = statArray[j][0].toUpperCase() + statArray[j].substr(1);
    }

    // On ajoute dans le nouveau tableau la 1ere donnée de la stat, le nom de la stat, puis la 2eme donnée de la stat
    newStatsObject.push([newStat[0], statArray.join(" "), newStat[1]]);
  }

  console.log("newStatsObject :", newStatsObject);
  return newStatsObject;
};

export const translate = (word) => {
  switch (word) {
    case "Yellow Cards":
      return "Carton Jaunes";
    case "Red Cards":
      return "Carton Rouges";
    case "Substitutions":
      return "Remplacements";
    case "Possesion":
      return "Possession";
    case "Free Kicks":
      return "Coups Francs";
    case "Goal Kicks":
      return "Tirs";
    case "Throw Ins":
      return "Touches";
    case "Offsides":
      return "Hors Jeu";
    case "Corners":
      return word;
    case "Shots On Target":
      return "Tirs cadrés";
    case "Shots Off Target":
      return "Tirs Non Cadrés";
    case "Attempts On Goal":
      return "Tentatives";
    case "Saves":
      return "Arrêts";
    case "Fauls":
      return "Fautes";
    case "Treatments":
      return "Blessures";
    case "Penalties":
      return word;
    case "Shots Blocked":
      return "Tirs bloqués";
    case "Dangerous Attacks":
      return "Attaques Dangereuses";
    case "Attacks":
      return "Attaques";
    default:
      return word;
  }
};
