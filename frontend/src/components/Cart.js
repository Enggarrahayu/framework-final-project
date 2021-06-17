import React, { Component } from "react";
import firebase from "firebase";
import firebaseConfig from "../firebase";

class Cart extends Component {
  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    this.state = {
      listCart: [],
      productCart: [],
      totalprice: 0,
      loadingcart: true,
      loadinganim: "",
    };
  }
  cartItem = (product, cart) => {
    let newCart = {
      ...product,
      ...cart,
    };
    return newCart;
  };
  fetchCart = () => {
    const cartref = firebase.database().ref(`/carts/enggarrahayu64@gmail`);

    const productref = firebase.database().ref("/products");
    cartref.on("value", (snapshot) => {
      let carts = snapshot.val();
      if (carts !== null) {
        this.setState({ listCart: carts });
      }
      productref.on("value", (productSnapshot) => {
        console.log(productSnapshot);
        let products = productSnapshot.val();
        let newproductcart = [];
        if (products != null && carts != null) {
          let total = 0;
          products.map((item) => {
            carts.products.map((cart) => {
              if (item.id === cart.id) {
                newproductcart.push(this.cartItem(item, cart));
                this.setState({
                  productCart: newproductcart,
                  loadingcart: false,
                });
                total += item.price * cart.qty;
              }
            });
          });
          this.countTotalPrice(total);
        } else {
          this.setState({ productCart: [], totalprice: 0, loadingcart: false });
        }
        this.getImage();
      });
    });
  };
  componentDidMount() {
    this.fetchCart();
    this.loadanim();
  }
  countTotalPrice = (price) => {
    this.setState({ totalprice: price });
  };
  deleteCart = (productid) => {
    let newCarts = this.state.listCart.products.filter((item) => {
      return item.id !== productid;
    });
    console.log(this.state.productCart);
    firebase
      .database()
      .ref("/carts/enggarrahayu64@gmail/products")
      .set(newCarts);
  };
  getImage = () => {
    const storage = firebase.storage();
    this.state.productCart.map((item) => {
      storage
        .ref(`/images/${item.img}`)
        .getDownloadURL()
        .then((link) => {
          let newCart = this.state.productCart.map((cart) => {
            if (item.id === cart.id) {
              cart.img = link;
            }
            return cart;
          });
          this.setState({ productCart: newCart });
        });
    });
  };
  setQty = (id, qty) => {
    let ref = firebase.database().ref(`/carts/enggarrahayu64@gmail/products`);
    ref.get().then((snapshot) => {
      let carts = snapshot.val();
      if (qty > 0) {
        let index = carts.findIndex((element) => {
          return element.id === id;
        });
        if (index > -1 && index < carts.length) {
          carts[index].qty = qty;
          ref.set(carts);
        }
      }
    });
  };
  loadanim = () => {
    let inter = {};
    if (this.state.loadingcart) {
      let load = "";
      inter = setInterval(() => {
        if (load.length < 3) {
          load += ".";
        } else {
          load = "";
        }
        this.setState({ loadinganim: load });
      }, 500);
    } else {
      if (inter) {
        clearInterval(inter);
      }
    }
  };
  render() {
    return (
      <div>
        <div class="all-title-box">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h2>Cart</h2>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Shop</a>
                  </li>
                  <li class="breadcrumb-item active">Cart</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-box-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="table-main table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Images</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.loadingcart && (
                        <tr className="text-center">
                          <td colSpan="6">
                            <h6>Please Wait {this.state.loadinganim}</h6>
                          </td>
                        </tr>
                      )}

                      {!this.state.loadingcart &&
                        this.state.productCart.length == 0 && (
                          <tr className="text-center">
                            <td colSpan="6">
                              <h4>Your Cart is Empty</h4>
                            </td>
                          </tr>
                        )}
                      {this.state.productCart.map((item) => {
                        return (
                          <tr>
                            <td className="thumbnail-img">
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src={item.img}
                                  alt=""
                                />
                              </a>
                            </td>
                            <td className="name-pr">
                              <a href="#">{item.name}</a>
                            </td>
                            <td className="price-pr">
                              <p>Rp. {item.price}</p>
                            </td>
                            <td className="quantity-box">
                              <button
                                type="button"
                                className="ml-auto btn hvr-hover"
                                style={{
                                  margin: "auto",
                                  color: "white",
                                  background: "#56575c",
                                  height: "35px",
                                  width: "38px"
                                }}
                                data-type="minus"
                                data-field="quant[1]"
                                onClick={() => this.setQty(item.id, --item.qty)}
                              >
                                <i className="fas fa-minus" />
                              </button>

                              <input
                                type="number"
                                size={4}
                                min={0}
                                value={item.qty}
                                className="c-input-text qty text"
                              />

                              <button
                                type="button"
                                className="ml-auto btn hvr-hover"
                                style={{
                                  margin: "auto",
                                  color: "white",
                                  background: "#56575c",
                                  height: "35px",
                                  width: "38px"
                                }}
                                data-type="plus"
                                data-field="quant[1]"
                                onClick={() => this.setQty(item.id, ++item.qty)}
                              >
                                <i className="fas fa-plus" />
                              </button>
                            </td>
                            <td className="total-pr">
                              <p>Rp. {item.price * item.qty}</p>
                            </td>
                            <td className="remove-pr">
                              <a href="#">
                                <i
                                  className="fas fa-times"
                                  onClick={() => this.deleteCart(item.id)}
                                />
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-lg-8 col-sm-12" />
              <div className="col-lg-4 col-sm-12">
                <div className="order-box">
                  <h3>Order summary</h3>
                  <div className="d-flex">
                    <h4>Sub Total</h4>
                    <div className="ml-auto font-weight-bold">
                      {" "}
                      Rp. {this.state.totalprice}{" "}
                    </div>
                  </div>
                  <div className="d-flex">
                    <h4>Discount</h4>
                    <div className="ml-auto font-weight-bold"> Rp. 0 </div>
                  </div>
                  <hr className="my-1" />
                  <div className="d-flex">
                    <h4>Tax</h4>
                    <div className="ml-auto font-weight-bold"> Rp. 0 </div>
                  </div>
                  <div className="d-flex">
                    <h4>Shipping Cost</h4>
                    <div className="ml-auto font-weight-bold"> Free </div>
                  </div>
                  <hr />
                  <div className="d-flex gr-total">
                    <h5>Grand Total</h5>
                    <div className="ml-auto h5">
                      {" "}
                      Rp. {this.state.totalprice}{" "}
                    </div>
                  </div>
                  <hr />{" "}
                </div>
              </div>
              <div className="col-12 d-flex shopping-box">
                <a href="checkout.html" className="ml-auto btn hvr-hover">
                  Checkout
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
