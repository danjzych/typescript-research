# TypeScript Utility Types

## Utility Types

TypeScript offers many `utility types` that are used for common type transformations.

## Exclude

It is a utility type that removes member(s) from a `union`.

<u><b>Union</u></b>: a variable that can store multiple types of values -> (type1, type2, ...) - Defines a variable with multiple types.

<b><u>Discriminated Union</b></u>: a union made up of objects that have common properties that can be used to distinguish between them.

### Union Types

Can define a type that can be on of several specified values:

```typescript
type myUnionType = "a" | "b" | "c" | "d";

const firstString: myUnionType = "a"; //all good!

const secondString: myUnionType = "e"; //THROW AN ERROR!
```

## Enums

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

## Partial

`Partials` can be used to define a type that has some, but not all properties, of an interface.

Partial will change all properties on a type to optional when referencing that interface to define a type.

Constructs a type with all properties of type set to optional (question marks). This is often seen when passing arguments into a function, so that all inputs are optional.

The opposite of this is `required`.

## ReturnType

ReturnType can be used to construct a type defined by the type of the return value of a function.

In older verions of TypeScript, you must use the keyword `Awaited` to get the desired ReturnType, otherwise it will simply be a Promise. This is not the case in TypeScript 5.2.

## Implements

The keyword ‘implements’ can be used to confirm that a Class satisfies a particular interface. An error will be raised if a class fails to correctly implement it. Classes can implement multiple interfaces.
