import { reviews,cart,orders, User } from "../app/generated/prisma";
export type userType = {
    name: string,
    email: string,
    password?: string,
    oauthProvider?: string,
    oauthId?: string,
    direction?: string,
    city?: string,
    postalCode?: string,
    country?: string,
    street?: string,
    product?: string,
    productId?: string,
    orders?: orders[],
    reviews?: reviews[],
    cart?: cart[],
    phone?: string,
    bank_account?: string,
    bank_name?: string
}
