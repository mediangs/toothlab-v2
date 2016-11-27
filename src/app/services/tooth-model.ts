export interface ToothModel{
  id : string;  //LJKMX01
  location : string; //Maxillary molar
  description? : string; //
  snapshot? : string; // LJKMX01.jpg
  x3ds? : X3dProperty[]; // [root.x3d, canal-pre.x3d, canal-ptu.x3d]
  path : string;

}

export interface X3dProperty{
  name : string;          // root           , canal-pre
  description? : string;   // Root Surface   , Root canal
  transparency? : number;
  prevTransperancy? : number;
  color? : string; // diffuseColor="1 1 0"

}
