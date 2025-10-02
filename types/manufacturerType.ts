
import {PrismaClient,Product} from "../app/generated/prisma";

const prisma = new PrismaClient();

export type manufacturerType = {
    name: string,
    products?: Product[]
}