/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  BookingSeat, // @ts-ignore
  Attendee, // @ts-ignore
  Booking,
} from "@prisma/client";

export class BookingSeatServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BookingSeatCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingSeatCountArgs>
  ): Promise<number> {
    return this.prisma.bookingSeat.count(args);
  }

  async bookingSeats<T extends Prisma.BookingSeatFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingSeatFindManyArgs>
  ): Promise<BookingSeat[]> {
    return this.prisma.bookingSeat.findMany(args);
  }
  async bookingSeat<T extends Prisma.BookingSeatFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingSeatFindUniqueArgs>
  ): Promise<BookingSeat | null> {
    return this.prisma.bookingSeat.findUnique(args);
  }
  async createBookingSeat<T extends Prisma.BookingSeatCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingSeatCreateArgs>
  ): Promise<BookingSeat> {
    return this.prisma.bookingSeat.create<T>(args);
  }
  async updateBookingSeat<T extends Prisma.BookingSeatUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingSeatUpdateArgs>
  ): Promise<BookingSeat> {
    return this.prisma.bookingSeat.update<T>(args);
  }
  async deleteBookingSeat<T extends Prisma.BookingSeatDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingSeatDeleteArgs>
  ): Promise<BookingSeat> {
    return this.prisma.bookingSeat.delete(args);
  }

  async getAttendee(parentId: number): Promise<Attendee | null> {
    return this.prisma.bookingSeat
      .findUnique({
        where: { id: parentId },
      })
      .attendee();
  }

  async getBooking(parentId: number): Promise<Booking | null> {
    return this.prisma.bookingSeat
      .findUnique({
        where: { id: parentId },
      })
      .booking();
  }
}
