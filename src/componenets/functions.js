import { themes } from "../themes";

export const getPlanetInfo = (planetArr, section) => {
  if (section === "overview") {
    return planetArr.overview;
  } else if (section === "structure") {
    return planetArr.structure;
  } else if (section === "geology") {
    return planetArr.geology;
  }
};

export const getImgPath = (planetArr, section) => {
  if (section === "structure") {
    return `../.${planetArr.images.internal}`;
  } else {
    return `../.${planetArr.images.planet}`;
  }
};

export const getColor = (planetName) => {
  return themes.colors.planetColors[planetName.toLowerCase()];
};
