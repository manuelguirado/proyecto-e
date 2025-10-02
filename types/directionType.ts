import {PrismaClient,Directions} from "../app/generated/prisma";

const prisma = new PrismaClient();

export type directionType = {
    street: string,
    city: string,
    postalCode: string,
    country: string,
    userId: string
}