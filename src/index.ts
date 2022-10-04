import mongoose from "mongoose";
import { app } from "./app";

const PORT: any = process.env.PORT ?? 8080;
mongoose
  .connect(`${process.env.DB_CONN_STRING}`)
  .then(() => {
    console.log("Connected Successfully to the Database");
    app.listen(PORT, () => console.log("Server running on PORT", PORT));
  })
  .catch(console.error);