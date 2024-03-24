import { Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('lamp')
  async getLampStatus() {
    return this.appService.getLampStatus();
  }

  @HttpCode(200)
  @Post('lamp/:status')
  async patchLampStatus(@Param('status') status: boolean) {
    this.appService.patchLampStatus(status);
  }

  @Get('call')
  async getCallStatus() {
    return this.appService.getCallStatus();
  }

  @HttpCode(200)
  @Post('call/:status')
  async patchCallStatus(@Param('status') status: boolean) {
    this.appService.patchCallStatus(status);
  }

  @Get('door')
  async getDoorStatus() {
    return this.appService.getDoorStatus();
  }

  @HttpCode(200)
  @Post('door/:status')
  async patchDoorStatus(@Param('status') status: boolean) {
    this.appService.patchDoorStatus(status);
  }

  @Get('power')
  async getPowerStatus() {
    return this.appService.getPowerStatus();
  }

  @HttpCode(200)
  @Post('power/:status')
  async patchPowerStatus(@Param('status') status: boolean) {
    this.appService.patchPowerStatus(status);
  }
}
