import { Client } from 'pg';
import { randomUUID } from 'node:crypto';

const CATEGORIES = ['Hatch', 'Sedan', 'SUV', 'Minivan', 'Picape'];

const LOCATIONS = [
  {
    name: 'Filial Paulista',
    address: 'Av. Paulista, 1000',
    city: 'São Paulo',
    state: 'SP',
  },
  {
    name: 'Filial Copacabana',
    address: 'Av. Atlântica, 500',
    city: 'Rio de Janeiro',
    state: 'RJ',
  },
  {
    name: 'Filial Savassi',
    address: 'Rua Pernambuco, 200',
    city: 'Belo Horizonte',
    state: 'MG',
  },
];

const client = new Client({ connectionString: process.env.DATABASE_URL });

await client.connect();

try {
  for (const name of CATEGORIES) {
    await client.query(
      `INSERT INTO categories (id, name, "createdAt", "updatedAt")
       VALUES ($1, $2, NOW(), NOW())
       ON CONFLICT (name) DO NOTHING`,
      [randomUUID(), name],
    );
  }

  for (const loc of LOCATIONS) {
    await client.query(
      `INSERT INTO locations (id, name, address, city, state, "createdAt", "updatedAt")
       VALUES ($1, $2, $3, $4, $5, NOW(), NOW())
       ON CONFLICT (name) DO NOTHING`,
      [randomUUID(), loc.name, loc.address, loc.city, loc.state],
    );
  }
} finally {
  await client.end();
}
