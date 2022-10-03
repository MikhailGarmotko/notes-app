import * as Sequelize from "sequelize";
import db from "../util/database";
import { Note } from "../items/item.interface";

const Note = db.define("notes",
    {
        id: { type: Sequelize.NUMBER, autoIncrement: true, allowNull:false, unique:true },
        name: { type: Sequelize.STRING },
        createdAt: { type: Sequelize.STRING },
        category: { type: Sequelize.STRING },
        content: { type: Sequelize.STRING },
        dates: { type: Sequelize.STRING },
        status: { type: Sequelize.STRING },
    }
);

export default Note;