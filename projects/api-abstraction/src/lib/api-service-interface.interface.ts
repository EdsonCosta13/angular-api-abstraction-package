import { Observable } from "rxjs";

export interface ApiServiceInterface<T, ID> {
  get(id: ID): Observable<T>;
  getAll(): Observable<T[]>;
  create(item: T): Observable<T>;
  update(id: ID, item: T): Observable<T>;
  delete(id: ID): Observable<void>;
}
