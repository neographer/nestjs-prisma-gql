import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {

  constructor(
    private readonly prismaService: PrismaService
    ) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    return this.prismaService.employee.create({
      data: createEmployeeDto,
    });
  }

  findAll() {
    return this.prismaService.employee.findMany();
  }

  findOne(id: number) {
    return this.prismaService.employee.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.prismaService.employee.update({
      where: {
        id: id,
      },
      data: updateEmployeeDto
    });
  }

  remove(id: number) {
    return this.prismaService.employee.delete({
      where: {
        id: id,
      },
    });
  }
}
