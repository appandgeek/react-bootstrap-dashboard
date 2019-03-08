import * as actionTypes from "../store/action";

const initialState = {
  advanced_tbl: [
    {
      name: "Udaya",
      role: "developer",
      progress: 80,
      salary: "90000",
      tags: "Manager"
    },
    {
      name: "Sekar",
      role: "HR",
      progress: 40,
      salary: "50000",
      tags: "Manager"
    },
    {
      name: "Sathish",
      role: "Teamlead",
      progress: 20,
      salary: "120000",
      tags: "Manager"
    },
    {
      name: "Sarvesh",
      role: "designer",
      progress: 60,
      salary: "40000",
      tags: "Manager"
    },
    {
      name: "Shiva",
      role: "Engineer",
      progress: 70,
      salary: "30000",
      tags: "Manager"
    },
    {
      name: "Latha",
      role: "Manager",
      progress: 90,
      salary: "50000",
      tags: "Manager"
    }
  ],
  basic_table: [
    {
      name: "Udaya",
      company: "google",
      role: "developer",
      salary: "30000",
      tags: ["react", "php", "laravel"]
    },
    {
      name: "Sekar",
      company: "facebook",
      role: "HR",
      salary: "80000",
      tags: ["Marketing", "php", "laravel"]
    },
    {
      name: "Sathish",
      company: "amazon",
      role: "Teamlead",
      salary: "100000",
      tags: ["Angular", "php", "laravel"]
    },
    {
      name: "Sarvesh",
      company: "tcs",
      role: "designer",
      salary: "40000",
      tags: ["react"]
    },
    {
      name: "Shiva",
      company: "questorm",
      role: "Engineer",
      salary: "70000",
      tags: ["php", "laravel"]
    },
    {
      name: "Latha",
      company: "airbnb",
      role: "Manager",
      salary: "50000",
      tags: ["Java", "vue", "Springs"]
    }
  ],
  commentStatus: false,
  tabStatus: 1,
  addModal: false,
  hasSub: false,
  toggleSidebar: false,
  shortMenu: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETERECORD:
      return {
        ...state,
        advanced_tbl: state.advanced_tbl.filter(
          advanced_tbl => advanced_tbl.name !== action.val
        )
      };

    case actionTypes.TABCHANGE:

      return {
        ...state,

        commentStatus: !state.commentStatus
      };
    case actionTypes.HASSUB:

      return {
        ...state,

        hasSub: !state.hasSub
      };
    case actionTypes.SHORTMENU:
      return {
        ...state,
        shortMenu: !state.shortMenu
      };

    case actionTypes.TOGGLE_SIDEBAR:
      if (state.toggleSidebar) {
        document.body.classList.remove('side-nav-on-action');
      }
      else {
        document.body.classList.add('side-nav-on-action');
      }

      return {
        ...state,

        toggleSidebar: !state.toggleSidebar
      };

    case actionTypes.GRAPH_TAB:
      if (action.tab === 1) {
        return {
          ...state,
          tabStatus: 1
        };
      }
      if (action.tab === 2) {
        return {
          ...state,
          tabStatus: 2
        };
      }
      if (action.tab === 3) {
        return {
          ...state,
          tabStatus: 3
        };
      }
      break;
    case actionTypes.DELETE_BASIC_RECORD:
      return {
        ...state,
        basic_table: state.basic_table.filter(
          basic_table => basic_table.name !== action.name
        )
      };
    case actionTypes.ADD_MODAL:
      return {
        ...state,
        addModal: !state.addModal
      };
    case actionTypes.ADD_NEW_ELEMENT:
      const data = action.result;
      const tagslist = data.get("tags").split(",");

      const obj = {
        name: data.get("name"),
        company: data.get("company"),
        salary: data.get("salary"),
        role: data.get("role"),
        tags: tagslist
      };
      return {
        ...state,
        basic_table: state.basic_table.concat(obj),
        addModal: !state.addModal
      };

    default:
      return {
        ...state
      };
  }
  return state;
};

export default reducer;
