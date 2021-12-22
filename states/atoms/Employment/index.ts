import { atom } from "recoil";

const EmploymentModal = atom({
  key: "employment-modal",
  default: false,
});

const EmploymentModalChecked = atom({
  key: "employment-checkbox",
  default: false,
});
