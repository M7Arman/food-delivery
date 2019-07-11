import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getMenuItems } from '../../actions/menu.action'

export class MenuItems extends Component {
  static propTypes = {
    getMenuItems: PropTypes.func.isRequired
  }

  componentWillMount() {
    if(!this.props.menuItems.length)
      this.props.getMenuItems();
  }

  render() {
    const menuItemsElem = this.props.menuItems.map(menuItem => <h2 key={menuItem._id}>{menuItem.name}: {menuItem.min_price}</h2>)
    return (
      <div>
        {menuItemsElem}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  menuItems: state.menu.menuItems
})

const mapDispatchToProps = {
  getMenuItems
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItems)
