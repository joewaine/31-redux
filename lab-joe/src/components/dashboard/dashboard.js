import React from 'react'
import {connect} from 'react-redux'
import {categoryCreate} from '../../actions/category-actions'
import CategoryForm from '../category-form/category-form'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.category
      ? this.props.category
      : {
        title: '',
      }

    this.removeAndDelete = this.removeAndDelete.bind(this)


}


  removeAndDelete(i) {
    console.log(i)
    console.log(this.props.categories)

var filterEd = this.props.categories.filter(function( obj ) {
  return obj._id !== i;
});

console.log(filterEd)

    console.log(this.props.categories)
  }

  render() {
    return (
      <section>
        <h1>Welcome to my Budget Tracker</h1>
        <CategoryForm
          buttonText='create'
          onComplete={this.props.dashboardCategoryCreate}/>
        {this.props.categories ?
          this.props.categories.map(cat =>
            <div id={cat._id} key={cat._id} onClick={this.removeAndDelete(cat._id)}>
              <h3>{cat.title}</h3>
              {cat.amount}
            </div>)
          :
          undefined
        }
      </section>
    )
  }
}

const mapStateToProps = state => ({
  categories: state
})

const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryCreate: category => dispatch(categoryCreate(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)