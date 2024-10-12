import { NgModule, ModuleWithProviders } from '@angular/core';
import { ApiConfigService } from './api-config.service';
import { ServiceConfig } from './service-config.interface';

@NgModule({
  providers: [
    ApiConfigService,
  ]
})
export class AngularApiAbstractionModule {

  static forRoot(config: ServiceConfig): ModuleWithProviders<AngularApiAbstractionModule> {
    return {
      ngModule: AngularApiAbstractionModule,
      providers: [
        { provide: 'config', useValue: config },
        ApiConfigService,
      ]
    };
  }
}
