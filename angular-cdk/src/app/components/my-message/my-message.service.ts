import {Injectable, Type} from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {MyMessageData, MyMessageDataOptions} from './nz-message.definitions';

let globalCounter = 0;

@Injectable({
  providedIn: 'root'
})
export class MyMessageService<MyMessageContainer> {

  private containerClass: Type<MyMessageContainer>;
  private containerInstance: MyMessageContainer;
  constructor(private overlay: Overlay) {
    this.createContainer();
  }
  createContainer() {
    const containerPortal = new ComponentPortal(this.containerClass);
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
  success(content: string, options: MyMessageDataOptions) {
    const message = {
      type: 'success',
      content: content,
    };
    this.createMessage(message, options);
  }
}
