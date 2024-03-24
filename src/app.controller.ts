import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('lamp')
  getLampStatus() {
    return this.appService.getLampStatus();
  }

  @Post('lamp/:status')
  patchLampStatus(@Param('status') status: boolean) {
    this.appService.patchLampStatus(status);
  }

  @Get('call')
  getCallStatus() {
    return this.appService.getCallStatus();
  }

  @Post('call/:status')
  patchCallStatus(@Param('status') status: boolean) {
    this.appService.patchCallStatus(status);
  }
}
