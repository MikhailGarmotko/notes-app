import { Sequelize } from "sequelize";

const sequelizeInstance = new Sequelize (
  process.env.PGDATABASE as string,
  process.env.PGUSER as string,
  process.env.PGPASSWORD as string, {host:process.env.PGHOST, dialect:"postgres"}
);

export default sequelizeInstance;