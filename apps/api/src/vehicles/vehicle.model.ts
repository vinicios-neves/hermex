import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';
import { Category } from '../categories/category.model';
import { Transmission } from './transmission.enum';

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

  @Field(() => String, { nullable: true })
  imageUrl?: string | null;

  @Field(() => Transmission, { nullable: true })
  transmission?: Transmission | null;

  @Field(() => ID, { nullable: true })
  categoryId?: string | null;

  @Field(() => Category, { nullable: true })
  category?: Category | null;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
