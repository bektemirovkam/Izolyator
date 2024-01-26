import { Product } from "@/types/product";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useReducer,
} from "react";

interface ISearchContext {
  search: string;
  products: Product[];
  loading: boolean;
  isEmpty: boolean;
  setSearch: (search: string) => void;
  setProducts: (products: Product[]) => void;
  setLoading: (value: boolean) => void;
  setIsEmpty: (value: boolean) => void;
}

type Action =
  | { type: "SET_SEARCH"; payload: string }
  | { type: "SET_PRODUCTS"; payload: Product[] }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_IS_EMPTY"; payload: boolean };

const SET_SEARCH = "SET_SEARCH";
const SET_PRODUCTS = "SET_PRODUCTS";
const SET_LOADING = "SET_LOADING";
const SET_IS_EMPTY = "SET_IS_EMPTY";

const initialState: ISearchContext = {
  search: "",
  products: [],
  loading: false,
  isEmpty: false,
  setSearch: () => {},
  setProducts: () => {},
  setLoading: () => {},
  setIsEmpty: () => {},
};

export const SearchContext = createContext(initialState);

const searchReducer = (
  state: ISearchContext,
  action: Action
): ISearchContext => {
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, search: action.payload };
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_IS_EMPTY:
      return { ...state, isEmpty: action.payload };
    default:
      return state;
  }
};

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  const setSearch = (search: string) => {
    dispatch({ type: "SET_SEARCH", payload: search });
  };

  const setProducts = (products: Product[]) => {
    dispatch({ type: "SET_PRODUCTS", payload: products });
  };

  const setLoading = (loading: boolean) => {
    dispatch({ type: "SET_LOADING", payload: loading });
  };

  const setIsEmpty = (isEmpty: boolean) => {
    dispatch({ type: "SET_IS_EMPTY", payload: isEmpty });
  };

  return (
    <SearchContext.Provider
      value={{
        search: state.search,
        products: state.products,
        loading: state.loading,
        isEmpty: state.isEmpty,
        setSearch,
        setProducts,
        setLoading,
        setIsEmpty,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = (): ISearchContext => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
