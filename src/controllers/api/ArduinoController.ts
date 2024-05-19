import { Request, Response } from "express";
import Arduinos from "../../models/ArduinoModel";
import { ReadingModel } from "../../models/ReadingModel";

const ArduinoController = {
  get: (req: Request, res: Response) => {
    console.log("-------------------------");
    console.log("GET /api/arduinos/" + req.params.id);
    console.log(req.params);
    console.log("-------------------------");

    const id = parseInt(req.params.id);

    const arduino = Arduinos.find((arduino) => arduino.id === id);

    if (!arduino) {
      res.status(404).send("Arduino not found");
      return;
    }

    res.status(200).json({ id: arduino.id, lights: arduino.lights });
  },

  post: (req: Request, res: Response) => {
    console.log("-------------------------");
    console.log("POST /api/arduinos/" + req.params.id);
    console.log(req.body);
    console.log("-------------------------");

    const id = parseInt(req.params.id);

    const arduino = Arduinos.find((arduino) => arduino.id === id);

    if (!arduino) {
      res.status(404).send("Arduino not found");
      return;
    }

    const reading = req.body as ReadingModel;

    reading.id = arduino.readings.length + 1;
    reading.date = new Date();

    reading.light = mapValue(reading.light);
    reading.motion = mapValue(reading.motion);
    reading.button = reading.button == 1 ? 100 : 0;

    for (let i = 0; i < reading.dims.length; i++) {
      const dim = reading.dims[i];
      arduino.lights[i].dim = mapValue(dim);
    }

    arduino.readings.push(reading);
    res.status(201).json(arduino.readings[arduino.readings.length - 1]);
  },
};

export default ArduinoController;

const mapValue = (value: number) => Math.round((value / 255) * 100);
