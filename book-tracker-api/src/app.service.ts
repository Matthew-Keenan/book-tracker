import { Injectable } from '@nestjs/common';
import { Book } from './models/book.model';

@Injectable()
export class AppService {
  getCurrentReads(): Book[] {
    return [
      { title: "The Way of Kings", author: "Brandon Sanderson"},
      { title: "Words of Radiance", author: "Brandon Sanderson"},
      { title: "Oathbringer", author: "Brandon Sanderson"}
    ];
  }

  getToBeRead(): Book[] {
    return [
      { title: "The Way of Kings", author: "Brandon Sanderson"},
      { title: "Words of Radiance", author: "Brandon Sanderson"},
      { title: "Oathbringer", author: "Brandon Sanderson"},
      { title: "The Way of Kings", author: "Brandon Sanderson"},
      { title: "Words of Radiance", author: "Brandon Sanderson"},
      { title: "Oathbringer", author: "Brandon Sanderson"},
      { title: "The Way of Kings", author: "Brandon Sanderson"},
      { title: "Words of Radiance", author: "Brandon Sanderson"},
      { title: "Oathbringer", author: "Brandon Sanderson"}
    ];
  }

  getTrending(): Book[] {
    return [
      { title: "The Way of Kings", author: "Brandon Sanderson"},
      { title: "Words of Radiance", author: "Brandon Sanderson"},
      { title: "Oathbringer", author: "Brandon Sanderson"},
      { title: "The Way of Kings", author: "Brandon Sanderson"},
      { title: "Words of Radiance", author: "Brandon Sanderson"},
      { title: "Oathbringer", author: "Brandon Sanderson"}
    ];
  }

  getNewAndNoteworthy(): Book[] {
    return [
      { title: "The Way of Kings", author: "Brandon Sanderson"},
      { title: "Words of Radiance", author: "Brandon Sanderson"},
      { title: "Oathbringer", author: "Brandon Sanderson"},
      { title: "The Way of Kings", author: "Brandon Sanderson"},
      { title: "Words of Radiance", author: "Brandon Sanderson"},
      { title: "Oathbringer", author: "Brandon Sanderson"},
      { title: "The Way of Kings", author: "Brandon Sanderson"},
      { title: "Words of Radiance", author: "Brandon Sanderson"},
      { title: "Oathbringer", author: "Brandon Sanderson"}
    ];
  }
}
