import { HttpClient } from "@angular/common/http";
import { ApiServiceInterface } from "./api-service-interface.interface";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export abstract class ApiServiceImpl<T, ID> implements ApiServiceInterface<T, ID> {

  protected baseUrl!: string;

  constructor(protected http: HttpClient) {}

  get(id: ID): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${id}`);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}`);
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}`, item);
  }

  update(id: ID, item: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${id}`, item);
  }

  delete(id: ID): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  /**
   * Método abstrato que precisa ser implementado em cada serviço concreto.
   * Esse método deve retornar a URL do recurso (base URL) que será usado em cada requisição.
   */
  protected abstract getResourceUrl(): string;
}
