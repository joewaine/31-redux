import React from 'react'
import {connect} from 'react-redux'
import {categoryCreate} from '../../actions/category-actions'


class CategoryForm extends React.Component {


  constructor(props) {
    super(props)
    this.state = this.props.category
      ? this.props.category
      : {
        title: '',
        amount: ''
      }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onComplete(this.state)
    console.log(this.state)
  }

  render() {
    return  (
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="item"
          value={this.state.title}
          onChange={this.handleChange}/>
        <input
          type="number"
          name="amount"
          placeholder="$0.00"
          min="0.01"
          step="0.01"
          value={this.state.amount}
          onChange={this.handleChange}/>
        <button type="submit">{this.props.buttonText}</button>
      </form>
    )
  }
}

export default CategoryForm

