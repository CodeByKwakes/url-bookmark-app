import { NgModule } from '@angular/core';
import { StorageModule } from '@phantom/util/storage';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [StorageModule, HttpClientModule],
})
export class ApiModule {}
