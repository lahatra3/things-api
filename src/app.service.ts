import { Injectable } from '@nestjs/common';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppService {
  private _lamp$ = new BehaviorSubject<boolean>(false);

  private _call$ = new BehaviorSubject<boolean>(false);

  getLampStatus(): Promise<boolean> {
    return Promise.resolve(this._lamp$.value);
  }

  getCallStatus(): Promise<boolean> {
    return Promise.resolve(this._lamp$.value);
  }

  patchLampStatus(status: boolean): void {
    this._lamp$.next(status);
  }

  patchCallStatus(status: boolean): void {
    this._call$.next(status);
  }
}
