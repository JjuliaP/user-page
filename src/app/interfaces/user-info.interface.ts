import { ChipOption } from './chip-option.interface';

export interface UserInfo {
  firstName: string;
  lastName: string;
  birthday: string;
  citizenship: Array<ChipOption>;
  files: Array<string>;
  instagram: string;
  email: string;
  tweeter: string;
  facebook: string;
}
