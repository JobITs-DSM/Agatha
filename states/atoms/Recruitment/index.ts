import { atom } from "recoil";

export const RecruitmentModal = atom({
  default: false,
  key: "recruit-modal",
});

export const RecruitmentCheckBox = atom({
  default: false,
  key: "recruit-checkbox"
})