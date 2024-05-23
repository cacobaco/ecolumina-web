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

// setInterval(() => {
//   dummyArduino.readings.push({
//     id: 1,
//     dims: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
//     light: Math.random() * 100,
//     motion: Math.random() * 100,
//     button: Math.random() * 100 > 50 ? 100 : 0,
//     date: new Date(),
//   });
// }, 2000);

const Arduinos: ArduinoModel[] = [dummyArduino];

export default Arduinos;
