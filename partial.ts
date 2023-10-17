interface UserInterface {
  username: string;
  firstName: string;
  lastName: string;
  age: number;
  isAdmin: boolean;
  bio: string;
};

type partialUser = Partial<UserInterface>;

function updateUser(user: UserInterface, updateFields: Partial<UserInterface>): UserInterface {
  return {...user, ...updateFields}
}

const user1: UserInterface = {
  username: 'Daniel',
  firstName: 'Daniel',
  lastName: 'Zych',
  age: 100,
  isAdmin: true,
  bio: 'Has a nice shiny bald head.'
}

const myUpdate = {
  username: 'DanielZ',
  age: 1,
  bio: 'On 10/17/23, Daniel figured out how to use TpyScript partials.',
  potato: 'yum'
}

console.log(user1)

console.log(updateUser(user1, myUpdate))