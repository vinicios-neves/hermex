jest.mock('../prisma/prisma.service', () => ({
  PrismaService: class PrismaServiceMock {},
}));

import { Test, TestingModule } from '@nestjs/testing';
import { LocationsResolver } from './locations.resolver';
import { PrismaService } from '../prisma/prisma.service';

describe('LocationsResolver', () => {
  let resolver: LocationsResolver;
  let findMany: jest.Mock;

  beforeEach(async () => {
    findMany = jest.fn();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocationsResolver,
        {
          provide: PrismaService,
          useValue: { location: { findMany } },
        },
      ],
    }).compile();

    resolver = module.get(LocationsResolver);
  });

  it('retorna a lista de locais do Prisma', async () => {
    const locations = [
      {
        id: '1',
        name: 'Filial Copacabana',
        address: 'Av. Atlântica, 500',
        city: 'Rio de Janeiro',
        state: 'RJ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        name: 'Filial Paulista',
        address: 'Av. Paulista, 1000',
        city: 'São Paulo',
        state: 'SP',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    findMany.mockResolvedValue(locations);

    await expect(resolver.findAll()).resolves.toEqual(locations);
  });

  it('busca locais ordenados por name ASC', async () => {
    findMany.mockResolvedValue([]);

    await resolver.findAll();

    expect(findMany).toHaveBeenCalledWith({ orderBy: { name: 'asc' } });
  });
});
