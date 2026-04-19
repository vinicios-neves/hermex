jest.mock('../prisma/prisma.service', () => ({
  PrismaService: class PrismaServiceMock {},
}));

import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesResolver } from './vehicles.resolver';
import { PrismaService } from '../prisma/prisma.service';
import { Transmission } from './transmission.enum';

describe('VehiclesResolver', () => {
  let resolver: VehiclesResolver;
  let findMany: jest.Mock;

  beforeEach(async () => {
    findMany = jest.fn();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VehiclesResolver,
        {
          provide: PrismaService,
          useValue: { vehicle: { findMany } },
        },
      ],
    }).compile();

    resolver = module.get(VehiclesResolver);
  });

  it('retorna veículos com imageUrl, transmission e category populados', async () => {
    const vehicles = [
      {
        id: 'v1',
        brand: 'Fiat',
        model: 'Argo',
        year: 2023,
        licensePlate: 'ABC1D23',
        dailyRate: 150,
        available: true,
        imageUrl: 'https://cdn.hermex.com/argo.png',
        transmission: Transmission.MANUAL,
        categoryId: 'c1',
        category: {
          id: 'c1',
          name: 'Hatch',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    findMany.mockResolvedValue(vehicles);

    await expect(resolver.findAll()).resolves.toEqual(vehicles);
  });

  it('inclui a relação category no findMany (evita N+1)', async () => {
    findMany.mockResolvedValue([]);

    await resolver.findAll();

    expect(findMany).toHaveBeenCalledWith({ include: { category: true } });
  });

  it('aceita veículos sem category, imageUrl e transmission (campos opcionais)', async () => {
    const vehicles = [
      {
        id: 'v2',
        brand: 'VW',
        model: 'Gol',
        year: 2020,
        licensePlate: 'XYZ9K87',
        dailyRate: 120,
        available: true,
        imageUrl: null,
        transmission: null,
        categoryId: null,
        category: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    findMany.mockResolvedValue(vehicles);

    await expect(resolver.findAll()).resolves.toEqual(vehicles);
  });
});
