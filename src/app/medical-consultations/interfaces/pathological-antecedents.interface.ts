import { DropdownOption } from "src/app/shared/interfaces/dropdown-options.interface";
import { Option } from "./options.interface";

export interface PathologicalAntecedents {
  date:string;
  gender:string;
  diseasesSelected:  Option[];
  surgeriesSelected: Option[];
  vaccinesSelected:  Option[];
  allergiesSelected: Option[];
}