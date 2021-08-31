import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { phoneBookSelectors, phoneBookActions } from "redux/contacts";
import SearchIcon from '@material-ui/icons/Search';
import { SearchIconWrapper, Search, StyledInputBase } from "./Filter.styled";

function Filter() {
    const value = useSelector(phoneBookSelectors.getFilter);
    const dispatch = useDispatch();

    return (
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
        <StyledInputBase
          autoFocus
                placeholder="Find contacts by name"
                type="text"
                value={value}
              onChange={(e) => dispatch(phoneBookActions.changeFilter(e.target.value))}
            />
          </Search>
    )
}

export default Filter; 
