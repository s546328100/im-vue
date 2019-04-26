export interface IPagination {
  current: number;
  prevPage: number;
  lastPage: number;
  nextPage: number;
  total: number;
  size: number;
}

export interface IPaginationQuery {
  current: number;
  size?: number;
}
