import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getData(key: string): any {
    return JSON.parse(window.localStorage.getItem(key));
  }

  setData(key: string, data: any) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }
}
