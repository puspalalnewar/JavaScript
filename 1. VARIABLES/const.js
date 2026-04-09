const num = 10;

// ! num = 5; Can not be reassignment

// Constants are block-scoped, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be re-declared (i.e. through a variable declaration). However, if a constant is an object or array its properties or items can be updated or removed.

// {
//     const name = "Puspalal Newar";
//     console.log(name);
// }

// console.log(num);

const x = 1;
{
  console.log(x);
  const x = 2;
}
