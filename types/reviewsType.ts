
import { PrismaClient,User,Product } from "../app/generated/prisma";
const prisma = new PrismaClient();
export type userType ={
    user: User,
    products: Product[],
    rating ?: number
    comment ?: string
    reviewDate ?: Date
}