/**
 * Created by Lee Jongki on 2017-02-10.
 * generated using :
 * http://schemaguru.snowplowanalytics.com/#
 */


export interface SectionModelSchema {
  model: {
    crv_name: string,
    pre_crv_length: number,
    pts_of_pre_crv: Array<Array<number>>,
    pts_of_pst_crv: Array<Array<number>>,
    pts_of_opp_pre_crv: Array<Array<number>>,
    median_major_axis_vector: Array<number>
  },
  sections: Array<SectionSechema>
}


export interface SectionSechema{
  section : number,

  bdy_major_outline : Array<Array<number>>,
  cnl_pre_major_outline : Array<Array<number>>,
  cnl_pst_major_outline : Array<Array<number>>,
  cnl_pst_major_p2_outline : Array<Array<number>>,

  cnl_pre_opp_major_outline : Array<Array<number>>,
  cnl_pst_opp_major_outline : Array<Array<number>>,

  cnl_pre_major_outline_exist : boolean,
  tangential_CH_pt_at_pst_crv : Array<number>,
  cwt_ratio : number,
  pt_at_pst_crv : Array<number>,
  cnl_straightened : Array<any>,
  pst_mindist : Array<any>,
  cnl_pre_narrow : Array<any>,
  CH_pt_at_pst_crv : Array<number>,
  major_axis_vector : Array<number>,
  median_major_axis_used : boolean,
  area_cnl_pst : number,
  cnl_transportation : Array<any>,
  pt_at_opp_pre_crv : Array<number>,
  area_cnl_pre : number,
  cnl_pst_narrow: Array<any>,
  t_vector_at_pre_crv : Array<number>,
  tangential_CH_pt_at_CH_axis : Array<number>,
  bdy_major_outline_exist : boolean,
  cnl_pre_wide : Array<any>,
  pt_at_pre_crv : Array<number>,
  pt_cnl_pre_cwt : Array<number>,
  pre_mindist : Array<any>,
  cnl_straightening : Array<any>,
  major_axis_t_vector : Array<number>,
  cnl_pst_wide : Array<any>,
  cnl_pst_major_outline_exist: boolean,
  CH_pt_at_CH_axis : Array<number>,
}


export interface  ViewSectionSchema{
  bdy_major_outline : any,
  cnl_pre_major_outline : any,
  cnl_pst_major_outline : any,
}
