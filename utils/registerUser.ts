import { PrismaClient } from "../app/generated/prisma";
import { userType } from '../types/userType';


const prisma = new PrismaClient();

async function registerUser(userType: userType) : Promise<userType | null> {


   const userData: any = {
     name: userType.name,
     email: userType.email,
     password: userType.password,
    
   };
   if (!userType.name || !userType.email) {
     throw new Error("Name and email are required");
   }
   const existingUser = await prisma.user.findMany({
        where: { email: userType.email }
    });
    if (existingUser.length > 0) {
        console.log("User already exists with this email.");
        return null; // User already exists
    }

   // Only add properties that are defined
   if (userType.password) userData.password = userType.password;
   if (userType.phone) userData.phone = userType.phone;
   if (userType.bank_account) userData.bank_account = userType.bank_account;
   if (userType.bank_name) userData.bank_name = userType.bank_name;
   if (userType.email) userData.email = userType.email;
    
   const newUser = await prisma.user.create({
      data: userData
   });
   
   // Convert the Prisma User model to userType
   return {
     name: newUser.name || '',
     email: newUser.email,
     password: newUser.password || undefined,
     phone: newUser.phone || undefined,
     bank_account: newUser.bank_account || undefined,
     bank_name: newUser.bank_name || undefined
   };
}

// Export the function instead of calling it directly
export default registerUser;

    