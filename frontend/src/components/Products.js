import React, { Component } from "react";
import firebase from "firebase";
import firebaseConfig from "../firebase";

export class Products extends Component {
  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    this.state = {
      listproduct: [],
      locallist: [],
      loadingdata: true,
      singleproduct: {},
    };
  }

  fetchProduct = () => {
    let ref = firebase.database().ref("/products");

    ref.on("value", (snapshot) => {
      const newstate = snapshot.val();
      const newstate2 = snapshot.val();
      this.setState({
        listproduct: newstate,
        locallist: newstate2,
        loadingdata: false,
      });
      if (!this.state.loadingdata) {
        setTimeout(() => this.getimage(), 300);
      }
    });
    ref.on("child_added", (child, childkey) => {
      var newState =
        this.state.listproduct !== null ? this.state.listproduct : [];
      newState.push(child);
      this.setState({
        listproduct: newState,
        locallist: newState,
        loadingdata: false,
      });
      if (!this.state.loadingdata) {
        setTimeout(() => this.getimage(), 300);
      }
    });
    ref.on("child_removed", (oldSnapshot) => {
      var newState = this.state.listproduct.filter((prod) => {
        return prod.id !== oldSnapshot.id;
      });
      this.setState({
        listproduct: newState,
        locallist: newState,
        loadingdata: false,
      });
      if (!this.state.loadingdata) {
        setTimeout(() => this.getimage(), 300);
      }
    });
  };
  saveProduct = () => {
    firebase.database().ref("/products").set(this.state.listproduct);
  };

  componentDidMount() {
    this.fetchProduct();
  }

  getimage = () => {
    const storage = firebase.storage();
    if (this.state.listproduct !== null) {
      this.state.listproduct.map((data) => {
        storage
          .ref(`/images/${data.img}`)
          .getDownloadURL()
          .then((link) => {
            let newState = this.state.locallist.map((nestdata) => {
              if (nestdata.id === data.id) {
                nestdata.img = link;
              }
              return nestdata;
            });
            this.setState({ locallist: newState });
          });
      });
    }
  };

  onClickAddCart = (id) => {
    let cart = {
      id: id,
      qty: 1
    };
    let ref = firebase.database().ref(`/carts/enggarrahayu64@gmail/products`);
    ref.get().then(snapshot=>{
      let products= snapshot.val()
      if(products === null){
        let newCart = []
        newCart.push(cart)
        ref.set(newCart).then(val=>alert('Added to Cart'))
      }else if(products.length > 0){
        let index = products.findIndex(element=>{
          return element.id === id
        })
        if(index>-1 && index<products.length){
          products[index].qty +=1
          ref.set(products).then(val=>alert('Added to Cart'))
        }else{
          products.push(cart)
          ref.set(products).then(val=>alert('Added to Cart'))
        }
      }
    })
  };

  render() {
    const { locallist, listproduct } = this.state;
    return (
      <div>
        <div className="products-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-all text-center">
                  <h1>All Products</h1>
                </div>
              </div>
            </div>
            <div className="row special-list" >
              {locallist !== null &&
                locallist.map((data) => {
                  return (
                    <div className="col-lg-3 col-md-6 special-grid best-seller" height='250'>
                      <div key={data.id}>
                        <div className="products-single fix">
                          <div className="box-img-hover">
                            <div className="type-lb">
                              <p className="new">{data.name}</p>
                            </div>
                            <img
                              src={data.img}
                              className="img-fluid"
                              alt="Image"
                            />
                            <div className="mask-icon">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="View"
                                  >
                                    <i className="fas fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare"
                                  >
                                    <i className="fas fa-sync-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Add to Wishlist"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                              <a className="cart" onClick={() => this.onClickAddCart(data.id)}>
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="why-text">
                            <h4>{data.description}</h4>
                            <h5> Rp. {data.price}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
           
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
