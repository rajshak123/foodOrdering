import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action.js';
import FilterOptions from "./filterOptions";

const initialstate = {
    allItems: [],
    filteredItems: [],
    filterNameText: '',
    filterCategoryText: '',
    filterRatingText: '',
    filterPriceText: ''
};
class Filters extends Component {

    constructor(props) {
        super(props);
        this.state = initialstate;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.items && nextProps.items.length > 0) {
            this.setState({
                allItems: JSON.parse(JSON.stringify(nextProps.items)),
                filteredItems: JSON.parse(JSON.stringify(nextProps.filteredItems))
            });
        }
    }

    handleFilteration = (event, ops) => {
        const filterText = event.target.value;
        let filterCategoryText = this.state.filterCategoryText;
        let filterRatingText = this.state.filterRatingText;
        let filterNameText = this.state.filterNameText;
        let filterPriceText = this.state.filterPriceText;
        let array = [...this.state.allItems] || [];
        if (ops === 'category') {
            filterCategoryText = filterText;
        } else if (ops === 'rating') {
            filterRatingText = filterText;
        } else if (ops === 'price') {
            filterPriceText = filterText;
        } else {
            filterNameText = filterText;
        }
        console.log('filter',filterPriceText)
        let filteredItems = array.filter((obj, idx) => {
            let ok = true;
            if (ok && filterPriceText !== '') {
                const finalPrice = obj.price;
                ok = (finalPrice > filterPriceText.split(",")[0] && (filterPriceText.split(",")[1] && finalPrice <= filterPriceText.split(",")[1]));
            }
            if (ok && filterNameText !== '') {
                ok = (obj.itemname.toLowerCase().search(filterNameText.toLowerCase()) > -1);
            }
            return ok;
        });
        // set State
        this.setState({ filterNameText, filterCategoryText, filterRatingText, filterPriceText, filteredItems });
        this.props.filterItems(filteredItems);
    }

    calculatePrice = (op, d) => {
        return (op - (Number(op) * Number(d) / 100));
    }


    render() {
        return (
            <FilterOptions
                filterCategoryText={this.state.filterCategoryText}
                filterRatingText={this.state.filterRatingText}
                filterNameText={this.state.filterNameText}
                filterPriceText={this.state.filterPriceText}
                handleFilteration={this.handleFilteration}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.DashboardReducer.items,
        filteredItems: state.DashboardReducer.filteredItems
    };
}

//  Set the actions which will prompt the reducers to check for matching types
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        filterItems: actions.filterMenu
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);