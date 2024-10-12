import { Injectable } from "@angular/core";
import { ServiceConfig } from "./service-config.interface";


@Injectable({
  providedIn: 'root',
})
export class ApiConfigService{

  private config!: ServiceConfig;

  setConfig(config: ServiceConfig) {
    this.config = config;
  }

  getConfig(): ServiceConfig {
    return this.config;
  }

  getUrl(id?: string | number): string {
    if (!this.config) {
      throw new Error('Configuração não definida');
    }

    let url = `${this.config.baseUrl}/${this.config.resource.join('/')}`;

    if (id) {
      url += `/${id}`;
    }

    return url;
  }
}
