import { Resolver, Mutation, Arg } from "type-graphql";
import { generateToken } from "../services/auth";
import { connectToDatabase } from "../database/connection";

@Resolver()
export class AuthResolver {
  @Mutation(() => String)
  async createOwnerToken(
    @Arg("email") email: string,
    @Arg("number") number: string
  ): Promise<string | null> {
    const connection = await connectToDatabase();
    const [owner] = await connection.execute(
      "SELECT number, givenName, surname, email FROM Owner WHERE email = ? AND number = ?",
      [email, number]
    );

    if (!owner) return null;

    return generateToken(owner[0]);
  }
}
