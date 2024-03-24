import { Injectable } from '@nestjs/common';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppService {
  private _lamp$ = new BehaviorSubject<boolean>(false);
  private _call$ = new BehaviorSubject<boolean>(false);
  private _door$ = new BehaviorSubject<boolean>(false);
  private _power$ = new BehaviorSubject<boolean>(true);

  getLampStatus(): Promise<boolean> {
    return Promise.resolve(this._lamp$.value);
  }

  getCallStatus(): Promise<boolean> {
    return Promise.resolve(this._lamp$.value);
  }

  getDoorStatus(): Promise<boolean> {
    return Promise.resolve(this._door$.value);
  }

  getPowerStatus(): Promise<boolean> {
    return Promise.resolve(this._power$.value);
  }

  async patchLampStatus(status: boolean): Promise<void> {
    this._lamp$.next(status);
  }

  async patchCallStatus(status: boolean): Promise<void> {
    this._call$.next(status);
  }

  async patchDoorStatus(status: boolean): Promise<void> {
    this._door$.next(status);
  }

  async patchPowerStatus(status: boolean): Promise<void> {
    this._power$.next(status);
  }
}
