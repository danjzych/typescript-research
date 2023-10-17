// Type to exclude from a non-declared union
type Example = Exclude<string | boolean | number, boolean>;
// Example will only either be a string or a number
// boolean will throw an error

// const stringOrNum: Example = "hello";
// const boolean: Example = false;




// Unions
type Fruit = "apple" | "banana" | "orange" | "peach";

// Discriminated Union
type ObjectKey =
  | "userId"
  | "postId"
  | "id"
  | "userName"
  | "postName";

// Discriminated Union
type Routes =
  | {
      route: "/user";
      search: {
        id: string;
      };
    }
  | {
      route: "/user/create";
    }
  | {
      route: "/user/edit";
      search: {
        id: string;
      };
    };




// types that "exclude" certain members from unions

type NoApples = Exclude<Fruit, "apple">;
type NonUsers = Exclude<ObjectKey, `user${string}`>;
type NoSearches = Exclude<Routes, { search: any }>;



// make variables from excluded types

// const appleHater: NoApples[] = ["banana", "orange"];
// const appleLover: NoApples[] = ["apple", "peach"];


// const postKeys: NonUsers[] = ["postId", "postName"];
// const userKeys: NonUsers[] = ["id", "userId", "userName"];



// const createRoute: NoSearches = { route: "/user/create" };
// const userRoutes: NoSearches[] = [
//   {
//   route: "/user";
//   search: {
//     id: string;
//   };
// },
// {
//   route: "/user/edit";
//   search: {
//     id: string;
//   };
// }];