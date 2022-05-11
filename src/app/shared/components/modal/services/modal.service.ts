import { BodyInjectorService } from './../../../../body-injectot';
import { ModalComponent } from './../modal.component';
import { ComponentFactory, ComponentFactoryResolver, Injector, TemplateRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { ModalConfig } from '../interfaces/modal-config';

@Injectable()
export class ModalService {
  private componenteFactory: ComponentFactory<ModalComponent>;

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private bodyInjector: BodyInjectorService
  ) {
    componentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  public open(config: ModalConfig): ModalRef {
    const componentRef = this.createComponentRef(this.injector);
    componentRef.instance.config = config;
    console.log(componentRef.instance);
    console.log('open called');
    this.bodyInjector.stackBeforeAppRoot(componentRef);
    return new ModalRef(componentRef);
  }
  createComponentRef(injector: Injector) {
    return this.componenteFactory.create(this.componenteFactory);
  }
}

export class ModalRef {
  public close(): void {
    console.log('close called');
  }
}
