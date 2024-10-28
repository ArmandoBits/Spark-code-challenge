import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Reservation {
  @Field()
  reservationId!: string;

  @Field()
  siteName!: string;

  @Field()
  checkInDate!: Date;

  @Field()
  checkOutDate!: Date;

  @Field()
  status!: string;
}

@ObjectType()
export class ReservationHistory {
  @Field(() => [Reservation])
  upcomingReservations!: Reservation[];

  @Field(() => [Reservation])
  pastReservations!: Reservation[];
}
