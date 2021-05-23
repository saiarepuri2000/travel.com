import React, { useState } from "react";
import "./Search.css";
import SearchIcon from '@material-ui/icons/Search';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {DateRangePicker} from "react-date-range";
import DateRangeIcon from '@material-ui/icons/DateRange';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

var Search = () =>{
    const [showdate,setshowdate] = useState(false);
    const [startDate,setStartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date());
    const [kids,setkids] = useState(0);
    const selectionRange = {
        startDate: startDate,
        endDate : endDate,
        key: "selection"
    };
    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return(
        <div className="search__display">
      <div className="search__center">
          <input 
             type="text" 
             placeholder="Where are you going?"
          />
           <SearchIcon/>
      </div>
      <div className="search__center">
      <button className="search__button" onClick={()=>setshowdate(!showdate)}>Check in</button><DateRangeIcon />
      </div>
      {showdate && <DateRangePicker
          ranges={[selectionRange]}
          onChange={handleSelect}
      />}
      <div className="search__center">
         <h4>Guests</h4>
        <AddCircleOutlineIcon onClick={()=>{setkids(kids+1)}}/><span>{kids}</span><RemoveCircleOutlineIcon onClick={()=>{kids>0 && setkids(kids-1)}}/>
      </div>
      <div className="search__center">
         <SearchIcon/><span>Search</span>
      </div>
      </div>
    )
}

export default Search;