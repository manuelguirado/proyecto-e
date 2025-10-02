import { PrismaClient,categories,Product } from "../app/generated/prisma";
const prisma = new PrismaClient();

export type categorieType = {
    name: string,
    description: string,
    products: Product[]
}