import React, { Component } from 'react'
import { connect } from 'react-redux'

class Navmenu extends Component {

    showcart = () => {
        var x = document.getElementById("openmodal");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    renderModal = () => {
        let dataProps = this.props.Minicart;
        return dataProps.map((sp, index) => {
            console.log('dataMTM',index);
            return <div key={index}>
                <img src={sp.image} alt="item1" width={50} />
                <span className="item-name">{sp.name}</span>
                <span className="item-price">Price{Number(sp.price).toLocaleString()}</span>
                <span className="item-quantity">Quantity: {sp.soluong}</span>
                <button className='btn btn-danger' onClick={()=> {this.props.delCart(index) }}>x</button>
            </div>
        })
    }

    render() {
        console.log('danh sach metamon',this.props.Minicart);
        return (
            <div>
                <nav className='bg-dark'>
                    <div className="container">
                        <ul className="navbar-left">
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                        </ul>
                        <ul className="navbar-right">
                            <li onClick={() => {
                                this.showcart()
                            }}>
                                <a href="#" id="cart"><i className="fa fa-shopping-cart" /> Cart
                                    <span className="badge"> 3</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container hide" id='openmodal'>
                    <div className="shopping-cart">
                        <div className="shopping-cart-header">
                            <i className="fa fa-shopping-cart cart-icon" /><span className="badge">3</span>
                            <div className="shopping-cart-total">
                                <span className="lighter-text">Total:</span>
                                <span className="main-color-text">$2,229.97</span>
                            </div>
                        </div>
                        <ul className="shopping-cart-items" style={{
                            padding:0
                        }}>
                            <li className="clearfix">
                                {this.renderModal()}
                                {/* <img src={dataProps.image} alt="item1" />
                                <span className="item-name">Sony DSC-RX100M III</span>
                                <span className="item-price">$849.99</span>
                                <span className="item-quantity">Quantity: 01</span> */}
                            </li>
                        </ul>
                        <a href="#" className="button">Checkout</a>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { Minicart: state.MinicartReducer.Minicart }
};
const mapDispatchToProps = (dispatch) =>{
    return {
      //Create function push data to reducer
      delCart:(index) =>{
        const action = {
          type: 'XOA_GIO_HANG',
          index //Noi dung gui len reducer
        }
        console.log('test',action);
        dispatch(action)
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Navmenu)