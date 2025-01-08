import React from "react";

// PascalCase (Start with capital letter) for Component to differentiate between HTML tag and react Component
// It is only convention not mendatory
function Heading() {
    return <h1>I will finish Today Keeper App part 1 and part 2</h1>
}


// We are exporting the function name Heading not the file name
export default Heading;


// Default Export vs Named Export
// Default Export:

// You can import it with any name.
// Example:
// export default Heading;

// import MyComponent from "./Heading"; // Allowed
// Named Export:

// You must use the same name when importing or use as to alias.
// Example:
// export function Heading() { ... }

// import { Heading } from "./Heading"; // Must match the name
// import { Heading as MyComponent } from "./Heading"; // Aliased import
