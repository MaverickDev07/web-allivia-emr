import { CancerSection } from "./cancer-section.interface";
import { DiabetesSection } from "./diabetes-section.interfaces";
import { HeartDiseases } from "./heart-diseases.interface";
import { Hypertension } from "./hypertension-section.interface";
import { PathologicalAntecedents } from "./pathological-antecedents.interface";
import { SocialAntecedent } from "./social-antecedent.interface";

export interface ClinicHistory {
   pathologicalBackground:PathologicalAntecedents,
   socialBackground:SocialAntecedent[],
   diabetesBackground:DiabetesSection[],
   cancerBackground:CancerSection[],
   heartBackground:HeartDiseases,
   hypertensionBackground:Hypertension,
  }