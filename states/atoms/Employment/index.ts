import { atom } from "recoil";

export const EmploymentModal = atom({
  key: "employment-modal",
  default: false,
});

export const EmploymentChecked = atom({
  key: "employment-checkbox",
  default: false,
});

export const Mode = atom({
  key: "employment-mode",
  default: false,
});
