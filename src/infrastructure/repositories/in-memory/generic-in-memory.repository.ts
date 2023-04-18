import { NotFoundException } from '@nestjs/common';
import { GenericRepositoryInterface } from 'src/core/interfaces/generic-repository.interface';

export class GenericInMemoryRepository<TKey, TData extends { id: TKey }>
  implements GenericRepositoryInterface<TKey, TData>
{
  private data: TData[] = [];

  async create(data: TData): Promise<TData> {
    this.data.push(data);
    return data;
  }

  async update(id: TKey, data: TData): Promise<TData> {
    const index = this.data.findIndex((data) => data.id === id);
    if (index === -1) throw new NotFoundException();
    this.data[index] = data;
    return data;
  }

  async delete(id: TKey): Promise<TData> {
    const index = this.data.findIndex((data) => data.id === id);
    if (index === -1) throw new NotFoundException();
    const data = this.data[index];
    this.data.splice(index, 1);
    return data;
  }

  async findAll(): Promise<TData[]> {
    return this.data;
  }

  async findOne(id: TKey): Promise<TData> {
    const data = this.data.find((data) => data.id === id);
    if (!data) throw new NotFoundException();
    return data;
  }
}
