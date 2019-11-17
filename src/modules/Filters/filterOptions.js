import React from 'react';

const FilterOptions = (props) => {
  return (
    <div className="row">
      <div className="col col-xs-3 col-md-3">
        <label htmlFor="namefilter" className="pull-left">Name:</label>
        <input name="namefilter" type="text" autoFocus placeholder="Search" className="inputBox" value={props.filterNameText ? props.filterNameText : ''} onChange={e => props.handleFilteration(e, 'name')} />
      </div>
      <div className="col col-xs-3 col-md-3">
        <label htmlFor="pricefilter" className="pull-left">Price:</label>
        <select name="pricefilter" className="inputBox" value={props.filterPriceText ? props.filterPriceText : ''} onChange={e => props.handleFilteration(e, 'price')}>
          <option value="">{'All'}</option>
          <option value="0,15">{'₹0 - ₹15'}</option>
          <option value="15,30">{'₹15 - ₹30'}</option>
          <option value="30,60">{'₹30 - ₹60'}</option>
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;
