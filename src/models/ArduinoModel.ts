import { LightModel } from "./LightModel";
import { ReadingModel } from "./ReadingModel";

export interface ArduinoModel {
  id: number;
  lights: LightModel[];
  readings: ReadingModel[];
}

const dummyArduino: ArduinoModel = {
  id: 1,
  lights: [
    {
      id: 1,
      dim: 0,
      useSensor: true,
      useLightSensor: true,
      useMotionSensor: true,
      useButton: true,
    },
    {
      id: 2,
      dim: 0,
      useSensor: true,
      useLightSensor: true,
      useMotionSensor: true,
      useButton: true,
    },
    {
      id: 3,
      dim: 0,
      useSensor: true,
      useLightSensor: true,
      useMotionSensor: true,
      useButton: true,
    },
  ],
  readings: [],
};

const Arduinos: ArduinoModel[] = [dummyArduino];

export default Arduinos;
