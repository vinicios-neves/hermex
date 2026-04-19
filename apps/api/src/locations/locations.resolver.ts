import { Resolver, Query } from '@nestjs/graphql';
import { Location } from './location.model';
import { PrismaService } from '../prisma/prisma.service';

@Resolver(() => Location)
export class LocationsResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [Location], { name: 'locations' })
  async findAll(): Promise<Location[]> {
    return this.prisma.location.findMany({
      orderBy: { name: 'asc' },
    }) as Promise<Location[]>;
  }
}
