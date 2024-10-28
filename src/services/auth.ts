import jwt from "jsonwebtoken";

export const generateToken = (owner: { number: string; givenName: string; surname: string; email: string }) => {
  const payload = {
    ownerNumber: owner.number,
    name: '${owner.givenName} ${owner.surname}',
    email: owner.email,
  };
  return jwt.sign(payload, "clave-secreta", { expiresIn: "1h" });
};
