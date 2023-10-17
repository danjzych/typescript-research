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

### Enums

A special "class" that defines a collection of constants (unchangeable variables). It allows us to declare a set of related values that can be **numbers or strings** as a set of named constants.

Enums is a great way to organize our code to make it more readable and type-safe, as we can group constant values into one data structure.

It provides flexibility that makes it easy to express and document our intentions and use cases when writing our code.

It is ideally used in situations where there are distinct values that can be seen as constants, or in data sets where we know all possible values at compile time.

Types:

- Numeric
- String
- Heterogeneous

Numeric:

- Enums are number-based by default.
- They increment just like array indices.
- Can initialize your own values.

Strings:

- Values can also be strings.

Homogeneous:

- Values can be either strings or numbers in enums.
