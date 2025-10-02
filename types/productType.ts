import { Product,PrismaClient,manufacturer,User,categories,reviews,cart } from "../app/generated/prisma";
const prisma = new PrismaClient();
export type productType = {
    title: string,
    category: string,
    stock: number,
    description: string,
    price: number,
    image: string,
    manufacturerName: string,
    manufacturerId?: string,
    user: User[],
    categories: categories[],
    reviews?: reviews[],
    cart?: cart[]
  
}