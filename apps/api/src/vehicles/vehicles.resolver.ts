import { Resolver, Query } from '@nestjs/graphql';
import { Vehicle } from './vehicle.model';
import { PrismaService } from '../prisma/prisma.service';

@Resolver(() => Vehicle)
export class VehiclesResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [Vehicle], { name: 'vehicles' })
  async findAll(): Promise<Vehicle[]> {
    return this.prisma.vehicle.findMany({
      include: { category: true },
    }) as Promise<Vehicle[]>;
  }
}
