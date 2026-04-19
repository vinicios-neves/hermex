import { Module } from '@nestjs/common';
import { LocationsResolver } from './locations.resolver';

@Module({
  providers: [LocationsResolver]
})
export class LocationsModule {}
