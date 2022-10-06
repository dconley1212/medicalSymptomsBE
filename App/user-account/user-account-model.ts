import { db } from "../database/db-config";

// there is a problem when I send a post request with the insert model
// I believe it is because the data I am sending over doesn't fill all
// has more values than columns in userAddresssInfo table and the
// foreign key column was never created beacause I set it up incorrectly
// so I as a next step I need to rollback the last migration and edit
// the create table function to be able to modify the table to represent
// what I am sending over in the post request.

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
  id: string;
}

export const addUserAddressInfo = async (userInfo: UserAddress) => {
  console.log(userInfo);
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
  ]);
  return userAddressInfo;
};