import { Resolver, Query } from '@nestjs/graphql';
import { Category } from './category.model';
import { PrismaService } from '../prisma/prisma.service';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [Category], { name: 'categories' })
  async findAll(): Promise<Category[]> {
    return this.prisma.category.findMany({
      orderBy: { name: 'asc' },
    }) as Promise<Category[]>;
  }
}
