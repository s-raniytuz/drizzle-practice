require('dotenv').config();
import {User} from "./models/User";
import {UserService} from "./services/UserService";
import {IService} from "./base/IService";

const user = new User({
  name: "Vadim10",
  age: 21,
  email: "saranin20410@example.com"
})

async function main() {

  try {
    const Service: IService = await new UserService(user).Init();

    await Service.Insert()

  } catch (error) {
    if(error instanceof Error) {
      console.log(error.message)
    }
  }
}

main()