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
  }
};
