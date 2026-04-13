import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class Vehicle {
  @Field(() => ID)
  id: string;

  @Field()
  brand: string;

  @Field()
  model: string;

  @Field(() => Int)
  year: number;

  @Field()
  licensePlate: string;

  @Field(() => Float)
  dailyRate: number;

  @Field()
  available: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
