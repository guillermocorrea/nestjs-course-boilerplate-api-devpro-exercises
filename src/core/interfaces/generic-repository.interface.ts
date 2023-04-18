// generic repository interface
export interface GenericRepositoryInterface<TKey, TData extends { id: TKey }> {
  create(data: TData): Promise<TData>;
  update(id: TKey, data: TData): Promise<TData>;
  delete(id: TKey): Promise<TData>;
  findAll(): Promise<TData[]>;
  findOne(id: TKey): Promise<TData>;
}
