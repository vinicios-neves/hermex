jest.mock('../prisma/prisma.service', () => ({
  PrismaService: class PrismaServiceMock {},
}));

import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesResolver } from './categories.resolver';
import { PrismaService } from '../prisma/prisma.service';

describe('CategoriesResolver', () => {
  let resolver: CategoriesResolver;
  let findMany: jest.Mock;

  beforeEach(async () => {
    findMany = jest.fn();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesResolver,
        {
          provide: PrismaService,
          useValue: { category: { findMany } },
        },
      ],
    }).compile();

    resolver = module.get(CategoriesResolver);
  });

  it('retorna a lista de categorias do Prisma', async () => {
    const categories = [
      { id: '1', name: 'Hatch', createdAt: new Date(), updatedAt: new Date() },
      { id: '2', name: 'Sedan', createdAt: new Date(), updatedAt: new Date() },
    ];
    findMany.mockResolvedValue(categories);

    await expect(resolver.findAll()).resolves.toEqual(categories);
  });

  it('busca categorias ordenadas por name ASC', async () => {
    findMany.mockResolvedValue([]);

    await resolver.findAll();

    expect(findMany).toHaveBeenCalledWith({ orderBy: { name: 'asc' } });
  });
});
