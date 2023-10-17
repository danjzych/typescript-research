# TypeScript Utility Types

## Utility Types

TypeScript offers many `utility types` that are used for common type transformations.

Take note of the below interface _UserInterface_ for reference.

```typescript
interface UserInterface {
  username: string;
  firstName: string;
  lastName: string;
  age: number;
  isAdmin: boolean;
  bio: string;
}
```

## Partial

`Partials` can be used to define a type that has some, but not all properties, of an interface.

Partial will change all properties on a type to optional when referencing that interface to define a type.

Constructs a type with all properties of type set to optional (question marks). This is often seen when passing arguments into a function, so that all inputs are optional.

```typescript
type partialUser = Partial<UserInterface>;
```

The opposite of this is `required`.

## Exclude

<u><b>Union</u></b>: a variable that can store multiple types of values -> (type1, type2, ...) - Defines a variable with multiple types.

<b><u>Discriminated Union</b></u>: a union made up of objects that have common properties that can be used to distinguish between them.

### Union Types

Can define a type that can be on of several specified values:

```typescript
type myUnionType = "a" | "b" | "c" | "d";

const firstString: myUnionType = "a"; //all good!

const secondString: myUnionType = "e"; //THROW AN ERROR!
```

### Exclude
