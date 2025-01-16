import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Book } from './models/book.model';

@Controller('books')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('current-reads')
  getCurrentReads(): Book[] {
    return this.appService.getCurrentReads();
  }

  @Get('to-be-read')
  getToBeRead(): Book[] {
    return this.appService.getToBeRead();
  }

  @Get('trending')
  getTrending(): Book[] {
    return this.appService.getTrending();
  }

  @Get('new-and-noteworthy')
  getNewAndNoteworthy(): Book[] {
    return this.appService.getNewAndNoteworthy();
  }
}
