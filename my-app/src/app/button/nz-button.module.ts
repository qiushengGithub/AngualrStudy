/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzWaveModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzButtonComponent } from './nz-button.component';

@NgModule({
  declarations: [NzButtonComponent],
  exports: [NzButtonComponent],
  imports: [CommonModule, ObserversModule, NzWaveModule, NzIconModule]
})
export class NzButtonModule {}
