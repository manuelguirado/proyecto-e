import {PrismaClient,User,Product } from "../app/generated/prisma";
const prisma = new PrismaClient();

export type cartType = {
    userId: string,
    products: Product[],
    quantity: number,
    addedDate: Date
}