import { Request, Response } from "express";
import Arduinos from "../../models/ArduinoModel";

const HomeController = {
  get: (_: Request, res: Response): void => {
    const arduinos = Arduinos;

    res.render("pages/index", { arduinos });
  },

  post: (req: Request, res: Response): void => {
    const { id, dim, useSensor, useLightSensor, useMotionSensor, useButton } = req.body;

    const arduino = Arduinos.find((arduino) => arduino.id.toString() === id);

    console.log(req.body);

    if (arduino) {
      arduino.lights = arduino.lights.map((light) => {
        return {
          ...light,
          dim: Number.parseInt(dim[light.id - 1]) || 0,
          useSensor: (useSensor as string[] | undefined)?.includes(light.id.toString()) ?? false,
          useLightSensor: (useLightSensor as string[] | undefined)?.includes(light.id.toString()) ?? false,
          useMotionSensor: (useMotionSensor as string[] | undefined)?.includes(light.id.toString()) ?? false,
          useButton: (useButton as string[] | undefined)?.includes(light.id.toString()) ?? false,
        };
      });
    };
  
    res.redirect("/");
  },
};

export default HomeController;
