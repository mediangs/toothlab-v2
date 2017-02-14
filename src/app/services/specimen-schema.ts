export interface Specimen{
  id : string;  //LJKMX01
  location : string; //Maxillary molar
  description? : string; //
  snapshot? : string; // LJKMX01.jpg
  sections? : string; // JSON file name, which contain section info.
  x3dModels? : Array<X3dModel>; // [root.x3d, canal-pre.x3d, canal-ptu.x3d]
  path : string;

}

export interface X3dModel{
  name : string;          // root           , canal-pre
  description? : string;   // Root Surface   , Root canal
  transparency? : number;
  prevTransperancy? : number;
  color? : string; // diffuseColor="1 1 0"
}
