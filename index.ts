
import express from "express";
import cron from "node-cron";
import { runDistributionCycle } from "./workers/cycle.js";

const app = express();
cron.schedule("*/10 * * * *", runDistributionCycle);
app.listen(8789);
