import { error } from "winston";
import { ADMIN, USER } from "../constants";

const ROLES = {
  User: USER,
  Admin: ADMIN,
};

const checkRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req?.user && !req?.roles) {
      res.status(4001);
      throw new Error("You are not authorised to use our platform");
    }
    const rolesArray = [...allowedRoles];
    const roleFound = req.roles.map((role) =>
      rolesArray.include(role).find((value) => value === true)
    );
    if (!roleFound) {
      res.status(401);
      throw new Error("You are not authorised to perform the request");
    }
    next();
  };
};
const role = { ROLES, checkRole };
export default role;
