import { db } from "../database/db-config";

export interface UserAddress {
  username: string;
  phone: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment_suite_etc: string;
  city: string;
  state: string;
  zipcode: string;
  user_id: number;
}

export const getUserAddressInfo = async (user_id: number) => {
  const addressInfo = await db("userAddressInfo").where("user_id", user_id);

  return addressInfo;
};

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
    "user_id",
  ]);

  return userAddressInfo;
};
