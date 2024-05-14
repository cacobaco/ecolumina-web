import { Request, Response } from "express";
import Arduinos from "../../models/ArduinoModel";

const StatsController = {
  get: (req: Request, res: Response): void => {
    const arduinos = Arduinos;

    res.render("pages/stats", { arduinos });
  },
};

export default StatsController;
