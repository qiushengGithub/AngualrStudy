import {ComponentFactoryResolver, Injectable, Type, ViewContainerRef} from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {MyMessageData, MyMessageDataOptions} from './nz-message.definitions';
import {MyMessageContainerComponent} from './my-message-container.component';

let globalCounter = 0;

@Injectable({
  providedIn: 'root'
})
export class MyMessageService {

  //private containerClass: Type<MyMessageContainerComponent>;
  private containerInstance: MyMessageContainerComponent;
  constructor(private overlay: Overlay, private resolver: ComponentFactoryResolver) {
    this.createContainer();
  }
  createContainer() {
    const containerPortal = new ComponentPortal(MyMessageContainerComponent);
    const overlayRef = this.overlay.create();
    const componentRef = overlayRef.attach(containerPortal);
    this.containerInstance = componentRef.instance;
  }
  createMessage(message: MyMessageData, options: MyMessageDataOptions) {
      const myMessageResult = {
        ...(message as MyMessageData),
        ...{
          createdAt: new Date(),
          messageId: this.generateMessageId(),
          options
        }
      };
      this.containerInstance.createMessage(myMessageResult);
  }
   generateMessageId(): string {
    return 'myMessage' + globalCounter++;
  }
  success(content: string, options?: MyMessageDataOptions) {
    const message = {
      type: 'success',
      content,
    };
    this.createMessage(message, options);
  }
}
