import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Role {
  @Field()
  description!: string;

  @Field()
  type!: string;
}

@ObjectType()
export class OwnerProfile {
  @Field()
  number!: string;

  @Field()
  givenName!: string;

  @Field()
  surname!: string;

  @Field()
  email!: string;

  @Field(() => [Role])
  roles!: Role[];
}
