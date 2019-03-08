export const DELETERECORD = "DELETERECORD";
export const TABCHANGE = "TABCHANGE";
export const GRAPH_TAB = "GRAPHTAB";
export const DELETE_BASIC_RECORD = "DELETEBASICRECORD";
export const ADD_MODAL = "ADDMODAL";
export const ADD_NEW_ELEMENT = "ADDNEWELEMENT";
export const TOGGLE_SIDEBAR = "TOGGLESIDEBAR";
export const HASSUB = "HASSUB";
export const SHORTMENU = "SHORT_MENU";
export function addElement(value) {
  return {
    type: ADD_NEW_ELEMENT,
    result: value
  };
}
