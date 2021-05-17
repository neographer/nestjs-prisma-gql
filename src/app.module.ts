import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [EmployeesModule, UsersModule, GraphQLModule.forRoot({
    debug: false,
    playground: true,
    include: [UsersModule],
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
