import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';


class RenderSP extends Component {
  state = {
    dataProduct: []
  }
  componentDidMount() {
    axios.get(`https://market-api.radiocaca.com/nft-sales?saleType&category=13&tokenType&tokenId=-1&token_standard=BEP721&pageNo=1&pageSize=20&sortBy=single_price&order=desc&min_level=1&max_level=60&min_score=300&max_score=650`)
      .then(res => {
        const dataProduct = res.data.list;
        this.setState({ dataProduct });
      })
      .catch(error => console.log(error));
  }
  renderMetamon = () => {
    let dataMTM = this.state.dataProduct;
    return dataMTM.map((sp, index) => {
      return <div className="col-4 pt-5" key={index}>
        <div className="card">
          <img className="card-img-top" src={sp.image_url} alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">{sp.name} #{sp.token_id}</h4>
            <p className="card-text">Level: {sp.level}</p>
            <p className="card-text">Price: {Number(sp.fixed_price).toLocaleString()}</p>
            <button  className="btn btn-primary" onClick={()=>this.props.addCart(sp)}>Buy Sicamon</button>
          </div>
        </div>
      </div>

    })

  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Buy Sicamon </h1>
        <div className="row">
          {this.renderMetamon()}
        </div>
      </div>
    )
  }
}


// const mapStateToProps = (state) => {
//   return { Minicart: state.MinicartReducer.Minicart }
// };
const mapDispatchToProps = (dispatch) =>{
  return {
    //Create function push data to reducer
    addCart:(sp) =>{
      const spGioHang = {
        id: sp.id,
        name: sp.name,
        price: sp.fixed_price,
        image:sp.image_url,
        soluong:1
      }
      const action = {
        type: 'THEM_GIO_HANG',
        spGioHang:spGioHang //Noi dung gui len reducer
      }
      console.log('hihi',action);
      dispatch(action)
    }
  }
}
export default connect(null, mapDispatchToProps)(RenderSP)
