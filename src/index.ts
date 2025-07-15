


// type Manager={
//     id:number;
//     role:'manager';
//     fullContro:true;
// }

// type Admin={
//     id:number;
//     role:'admin'
// }


// type User=Manager | Admin


//  const doSomething=(user:User)=>{
    
//     if(user.role=='admin'){
        
//         console.log(user.role)
//     }
//     else{
//         console.log(user.fullContro)
//     }

//  }

//  doSomething({id:1,role:'admin'})


// type MathOperation = (a: number, b: number) => number;

// const add: MathOperation = (a, b) => a + b;
// const subtract: MathOperation = (a, b) => a - b;

// console.log(add(5, 3)); // 8
// console.log(subtract(5, 3)); // 2



// type UnionType = Type1 | Type2 | Type3;

// // Use Case 1: Flexible Function Arguments
// function formatValue(value: string | number): string {
//   if (typeof value === "string") {
//     return value.toUpperCase();
//   }
//   return value.toFixed(2);
// }

// console.log(formatValue("hello")); // HELLO
// console.log(formatValue(42));      // 42.00
// // console.log(formatValue(true)); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

// // Use Case 2: API Responses
// type ErrorResponse = {
//   error: true;
//   message: string;
// };

// type SuccessResponse = {
//   error: false;
//   data: string;
// };

// type ApiResponse = ErrorResponse | SuccessResponse;

// function handleResponse(response: ApiResponse) {
//   if (response.error) {
//     console.error(response.message);
//   } else {
//     console.log(response.data);
//   }
// }





// type IntersectionType = Type1 & Type2 & Type3;

// // Use Case 1: Merging Interfaces
// type Person = {
//   name: string;
//   age: number;
// };

// type Employee = {
//   employeeId: number;
//   department: string;
// };

// type EmployeeDetails = Person & Employee;

// const john: EmployeeDetails = {
//   name: "John",
//   age: 30,
//   employeeId: 12345,
//   department: "Engineering",
// };

// console.log(john);

// // Use Case 2: Component Properties in a UI Library
// type BaseProps = {
//   id: string;
//   className?: string;
// };

// type ButtonSpecificProps = {
//   label: string;
//   onClick: () => void;
// };

// type ButtonProps = BaseProps & ButtonSpecificProps;

// const button: ButtonProps = {
//   id: "btn1",
//   label: "Submit",
//   onClick: () => console.log("Button clicked!"),
// };

// console.log(button);

// // Use Case 3
// type Admin = {
//   accessLevel: "admin";
//   manageUsers: () => void;
// };

// type Editor = {
//   accessLevel: "editor";
//   editContent: () => void;
// };

// type SuperUser = Admin & Editor;

// const superUser: SuperUser = {
//   accessLevel: "admin", // Access level is now narrowed to match both types
//   manageUsers: () => console.log("Managing users"),
//   editContent: () => console.log("Editing content"),
// };

// superUser.manageUsers();
// superUser.editContent();


// Generic functions allow you to define functions that work with multiple types without losing type safety.

function functionName<T>(parameter: T): T {
  return parameter;
}
// Here, T is the generic type parameter (a placeholder for the type).

// // Example 1
// function identity<T>(value: T): T {
//   return value;
// }

// console.log(identity<string>("Hello, TypeScript!")); // "Hello, TypeScript!"
// console.log(identity<number>(42));                  // 42

// // Example 2
// function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
//   return { ...obj1, ...obj2 };
// }

// const merged = mergeObjects({ name: "Alice" }, { age: 30 });
// console.log(merged); // { name: "Alice", age: 30 }



// Generics can also be used to define custom types.

// Example 1
// type Box<T> {
//   value: T;
// }

// const numberBox: Box<number> = { value: 42 };
// const stringBox: Box<string> = { value: "Hello" };

// console.log(numberBox.value); // 42
// console.log(stringBox.value); // Hello

// // Example 2
// type Pair<T, U> = [T, U];

// const coordinates: Pair<number, number> = [10, 20];
// const nameAge: Pair<string, number> = ["Alice", 30];

// console.log(coordinates); // [10, 20]
// console.log(nameAge);     // ["Alice", 30]

// // Example 3
// type APIResponse<T> = {
//   data: T;
//   status: number;
//   message: string;
// };

// type User = {
//   id: number;
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function fetchUser(): Promise<APIResponse<User>> {
//   return fetch("/api/user").then((res) => res.json());
// }

// // Example 4: Extended Example 3

// const fetchData = async <T>(url: string): Promise<ApiResponse<T>> => {
//   const response = await fetch(url);
//   const data = await response.json();
//   return {
//     data,
//     error: null,
//     status: 'success',
//   };
// };

// const result = await fetchData<User[]>('https://api.example.com/users');
// console.log(result);

// // Example 5: React Dropdown
// interface DropdownProps<T> {
//   options: T[];
//   renderOption: (option: T) => string;
//   onSelect: (option: T) => void;
// }

// function Dropdown<T>({ options, renderOption, onSelect }: DropdownProps<T>) {
//   return (
//     <select onChange={(e) => onSelect(options[e.target.selectedIndex])}>
//       {options.map((option, index) => (
//         <option key={index}>{renderOption(option)}</option>
//       ))}
//     </select>
//   );
// }

// const items = [{ id: 1, label: "Item 1" }, { id: 2, label: "Item 2" }];
// <Dropdown
//   options={items}
//   renderOption={(item) => item.label}
//   onSelect={(item) => console.log(item)}
// />;


