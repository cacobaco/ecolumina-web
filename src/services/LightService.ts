import Lights, { LightModel } from "../models/LightModel";

export const getLights = () => {
  return Lights;
};

export const getLight = (id: number) => {
  return Lights.find((light) => light.id === id);
};

export const addLight = (light: LightModel) => {
  Lights.push(light);
};

export const deleteLight = (id: number) => {
  const index = Lights.findIndex((light) => light.id === id);
  Lights.splice(index, 1);
};
