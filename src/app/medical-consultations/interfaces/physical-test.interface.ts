export interface PhysicalTest {
    text:  string;
    options:PhysicalTestOption[]
}

export interface PhysicalTestSection {
    head:  PhysicalTest;
    neck:PhysicalTest,
    anteriorThorax:PhysicalTest,
    posteriorThorax:PhysicalTest,
    abdoment:PhysicalTest,
    peripheralNervousSystem:PhysicalTest,
    motorNervousSystem:PhysicalTest,
    extremities:PhysicalTest
}

export interface PhysicalTestOption {
    id:    number;
    label:  string;
    description?:string;
    isSelected:boolean
}