import * as Sequelize from "sequelize";
import db from "../util/database";

const Notes = db.define("notes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING },
  createdAt: { type: Sequelize.STRING },
  category: { type: Sequelize.STRING },
  content: { type: Sequelize.STRING },
  dates: { type: Sequelize.STRING },
  status: { type: Sequelize.STRING },
});

export default Notes;