import React, { Component, useState, useEffect } from "react";
import firebase from "firebase";
import firebaseConfig from "../firebase";
import {storage} from "../firebase"

class AddProducts extends Component {

  constructor(props) {
    super(props);

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    this.state = {
      listproduct: [],
      productprep: null,
      img: null,
      status: null,
    };
  }
  fetchProduct = () => {
    let ref = firebase.database().ref("/products");
    ref.on("value", (snapshot) => {
      const state = snapshot.val();
      this.setState({ listproduct: state });
    });
  };

  saveProduct = () => {
    firebase.database().ref("/products").set(this.state.listproduct);
  };

  saveImage = () => {
    if (this.state.imageref !== null) {
      firebase
        .storage()
        .ref(`/images/${this.state.productprep.img}`)
        .put(this.state.imageref);
    }
  };

  handleUploadError = (val) => {
    this.setState({
      status: `File ${val} gagal di upload`
    })
  }

  componentDidMount() {
    this.fetchProduct();
  }

  handleSave = () => {
    let imgfilename = "";
    if (this.state.imageref != null) {
      imgfilename = this.state.productprep.img;
    }
    var newprep = {
      id: new Date().getTime().toString(),
      name: this.refs.name.value,
      description: this.refs.description.value,
      price: parseInt(this.refs.price.value),
      stock: parseInt(this.refs.stock.value),
      img: imgfilename,
    };

    this.setState({ productprep: newprep });
    const mergeList = () => {
      let newList =
        this.state.listproduct !== null ? this.state.listproduct : [];
      newList.push(this.state.productprep);
      this.setState({ listproduct: newList });
      console.log(this.state.listproduct);
      console.log("merge");
      this.saveProduct();
      this.saveImage();
    };
    setTimeout(() => mergeList(), 100);
  };

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let filename = event.target.files[0].name;
      let timestamp = new Date().getTime().toString();
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({
          imageref: event.target.files[0],
          image: e.target.result,
          productprep: { img: timestamp + "_" + filename },
        });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  clearField = () => {
    document.getElementById("input-productname").value = "";
    document.getElementById("input-price").value = "";
    document.getElementById("input-stock").value = "";
    document.getElementById("input-description").value = "";
    document.getElementById("productimg").src = "";
  };
  render() {
    return (
      <div className="dark-edition">
        <form autoComplete="off">
          <div className="main-panel">
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-11">
                    <div className="card">
                      <div className="card-header card-header-primary">
                        <h4 className="card-title">Add Products</h4>
                        <p className="card-category">
                          Add Products Data by Admin
                        </p>
                      </div>
                      <div className="card-body">
                        <form>
                          <div className="row">
                            <div className="col-md-4">
                              <div className="form-group">
                                <label className="bmd-label-floating">
                                  Product Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  ref="name"
                                  // value={aUsername}
                                  // onChange={(e) => {
                                  //   setAUsername(e.target.value);
                                  // }}
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label className="bmd-label-floating">
                                  Price
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="password"
                                  ref="price"
                                  // value={aPassword}
                                  // onChange={(e) => {
                                  //   setAPassword(e.target.value);
                                  // }}
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label className="bmd-label-floating">
                                  Stocks
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  ref="stock"
                                  // value={aEmail}
                                  // onChange={(e) => {
                                  //   setAEmail(e.target.value);
                                  // }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="bmd-label-floating">
                                  Description
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  ref="description"
                                  // value={aAddress}
                                  // onChange={(e) => {
                                  //   setAAddress(e.target.value);
                                  // }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="feFirstName"
                              accept="image/*"
                              onChange={this.onImageChange}
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="customFileLang"
                            >
                              Select file
                            </label>
                          </div>
                        </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label>About Me</label>
                                <div className="form-group">
                                  <label className="bmd-label-floating">
                                    {" "}
                                    Lamborghini Mercy, Your chick she so
                                    thirsty, I'm in that two seat Lambo.
                                  </label>
                                  <textarea
                                    className="form-control"
                                    rows={5}
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary pull-right"
                            onClick={this.handleSave}
                          >
                            Add Products
                          </button>
                          <div className="clearfix" />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProducts;
