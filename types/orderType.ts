import { PrismaClient,orders,User,Product } from "../app/generated/prisma";
const prisma = new PrismaClient();
export type orderType = {
    userId: string,
    products: Product[],
    quantity: number,
    totalPrice: number,
    status: string,
    orderDate : Date
}