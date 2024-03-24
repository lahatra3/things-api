import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('lamp')
  async getLampStatus() {
    return this.appService.getLampStatus();
  }

  @Post('lamp/:status')
  async patchLampStatus(@Param('status') status: boolean) {
    this.appService.patchLampStatus(status);
  }

  @Get('call')
  async getCallStatus() {
    return this.appService.getCallStatus();
  }

  @Post('call/:status')
  async patchCallStatus(@Param('status') status: boolean) {
    this.appService.patchCallStatus(status);
  }

  @Get('door')
  async getDoorStatus() {
    return this.appService.getDoorStatus();
  }

  @Post('door/:status')
  async patchDoorStatus(@Param('status') status: boolean) {
    this.appService.patchDoorStatus(status);
  }

  @Get('power')
  async getPowerStatus() {
    return this.appService.getPowerStatus();
  }

  @Post('power/:status')
  async patchPowerStatus(@Param('status') status: boolean) {
    this.appService.patchPowerStatus(status);
  }
}
