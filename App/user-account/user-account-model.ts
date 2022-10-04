import { db } from "../database/db-config";

interface UserAddress {
  username: string;
  phone: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment_suite_etc: string;
  city: string;
  state: string;
  zipcode: string;
  id: number;
}

export const addUserAddressInfo = async (userInfo: UserAddress) => {
  const [userAddressInfo] = await db("userAddressInfo").insert(userInfo, [
    "username",
    "phone",
    "firstName",
    "lastName",
    "address",
    "apartment_suite_etc",
    "city",
    "state",
    "zipcode",
    "id",
  ]);

  return userAddressInfo;
};
