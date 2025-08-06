import { UserLevel } from "./enums"

export const REGEX_EMAIL =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const USER_LEVEL_LABEL = {
  [UserLevel.MEMBER]: "Thành viên",
  [UserLevel.EXPERT]: "Chuyên gia",
}
