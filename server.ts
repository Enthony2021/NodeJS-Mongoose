require("dotenv").config();
import app from "./index";
import { App } from "./index";
import conn from './db/conn';

conn.main()
  .then(() => {
    app.listen(App.port, () => {
      console.log(`Server running: ${process.env.SERVER_LOCAL_ADRESS}${App.port}`);
    });
  })
  .catch((err) => {
    console.log(err)
  })

