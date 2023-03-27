import Sequelize from "sequelize";

export const sequelize = new Sequelize("projects_db", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});
