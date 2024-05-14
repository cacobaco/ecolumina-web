import { Request, Response } from "express";
import Arduinos from "../../models/ArduinoModel";

const HomeController = {
  get: (req: Request, res: Response): void => {
    const arduinos = Arduinos;

    res.render("pages/index", { arduinos });
  },
};

export default HomeController;
