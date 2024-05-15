import { Request, Response } from "express";
import Arduinos from "../../models/ArduinoModel";

const HomeController = {
  get: (_: Request, res: Response): void => {
    const arduinos = Arduinos;

    res.render("pages/index", { arduinos });
  },

  post: (req: Request, res: Response): void => {
    const { id, dim, useSensor, useLightSensor, useMotionSensor, useButton } = req.body;

    const arduino = Arduinos.find((arduino) => arduino.id === id);

    if (arduino) {
      arduino.lights = arduino.lights.map((light) => {
        const i = light.id - 1;

        return {
          ...light,
          dim: dim[i],
          useSensor: useSensor[i],
          useLightSensor: useLightSensor[i],
          useMotionSensor: useMotionSensor[i],
          useButton: useButton[i],
        };
      });
    };
  
    res.redirect("/");
  },
};

export default HomeController;
