// Змінна, яка може містити або рядок, або число (union type)
let value: string | number;

value = "value";
value = 12;

//або описати type і потім типізувати ним змінну
// type value = string | number;
// let a: value = "value";
// let b: value = 12;

// Змінна, яка може містити лише одне з двох можливих рядкових значень (literal type)
let statusValue: "enable" | "disable";

statusValue = "enable";
statusValue = "disable";

//або описати type і потім типізувати ним змінну
// type statusValue = "enable" | "disable";
// let a: statusValue = "enable";
// a = "disable";
