export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type Role = Record<UserRole, string>;

const RoleDescription: Role = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

//або
// const RoleDescription: Record<UserRole, string> = {
//   [UserRole.admin]: "Admin User",
//   [UserRole.editor]: "Editor User",
//   [UserRole.guest]: "Guest User",
// };
