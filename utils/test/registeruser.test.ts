import registerUser from "../registerUser";
import { userType } from '../../types/userType';
import 'jest';
describe("registerUser", () => {
    it("should register a new user", async () => {

        const newUser: userType = {
            name: "Test User",
            email: "testuser@example.com",
            password: "password123",
            phone: "123-456-7890",
            bank_account: "123456789",
            bank_name: "Test Bank"
        };
        const result = await registerUser(newUser);
        expect(result).toEqual(newUser);
    });
});
