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
type appleHater = Exclude<Fruit, "apple">;
type nonUsers = Exclude<ObjectKey, `user${string}`>;
type noSearches = Exclude<Routes, { search: any }>;


// make variables from excluded types