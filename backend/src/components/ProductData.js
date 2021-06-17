import React, { Component } from "react";
import firebase from 'firebase'
import firebaseConfig from "../firebase"

export class ProductData extends Component {
  constructor(props){
    super(props)
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)
    }
    this.state = {
      listproduct: [],
      locallist: [],
      loadingdata:true,
      singleproduct:{}
    }
  }

  fetchProduct = () =>{
    let ref = firebase.database().ref('/products')

    ref.on('value', snapshot => {
      const newstate = snapshot.val()
      const newstate2 = snapshot.val()
      this.setState({listproduct: newstate, locallist: newstate2, loadingdata: false})
      if(!this.state.loadingdata){
        setTimeout(()=>this.getimage(), 300)
      }
    })
    ref.on('child_added', (child, childkey)=> {
      var newState = this.state.listproduct !== null ? this.state.listproduct : []
      newState.push(child)
      this.setState({listproduct: newState, locallist: newState, loadingdata: false})
      if(!this.state.loadingdata){
        setTimeout(()=>this.getimage(), 300)
      }
    })
    ref.on('child_removed', oldSnapshot=> {
      var newState = this.state.listproduct.filter(prod => {return prod.id !== oldSnapshot.id})
      this.setState({listproduct: newState, locallist: newState, loadingdata: false})
      if(!this.state.loadingdata){
        setTimeout(()=>this.getimage(), 300)
      }
    })
  }
  saveProduct = () =>{
    firebase.database()
      .ref('/products')
      .set(this.state.listproduct)
  }
  deleteProduct = (index) => {
    firebase.database()
      .ref(`/products/${index}`)
      .remove()
  }
  deleteImage = (id) => {
    let filename = ""
    const {locallist} = this.state
    locallist.map(data=> {
      if(data.id === id){
        filename = data.img
      }
    })
    firebase.storage().ref("/images").child(filename)
      .delete().catch(error => {
        console.log(error)
      })
  }
  componentDidMount(){
    this.fetchProduct()
  }

  handleDelete = (id) =>{
    console.log(this.state.listproduct)
    const ref = firebase.database().ref('/products')
    const {listproduct} = this.state
    const newlist = listproduct.filter(data => {
      return data.id !== id
    })
    this.deleteProduct(listproduct.findIndex(prod => prod.id === id))
    this.deleteImage(id)
    this.setState({listproduct: newlist})
  }
  getimage = () => {
    const storage = firebase.storage()
    if (this.state.listproduct !== null){
      this.state.listproduct.map(data=> {
        storage.ref(`/images/${data.img}`).getDownloadURL()
        .then(link => {
          let newState = this.state.locallist.map(nestdata => {
            if(nestdata.id === data.id){
              nestdata.img = link
            }
            return nestdata
          })
          this.setState({locallist: newState})
        })
      })
  }
  }

  render() {
    const {locallist, listproduct} = this.state
    return (
      <div className="dark-edition">
        <div className="main-panel">
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header card-header-primary">
                      <h4 className="card-title ">Product List</h4>
                      <p className="card-category">
                        {" "}
                        List of Product Handled By Admin
                      </p>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table color="white" className="table">
                          <thead className=" text-primary">
                            <tr>
                              <th>ID</th>
                              <th>Image</th>
                              <th>Product Name</th>
                              <th>Price</th>
                              <th>Stock</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                          {locallist !== null && locallist.map(data => {
                            return(
                            <tr key={data.id}>
                              <td>{data.id}</td>
                              <td><img src={data.img}  width='100' height = '100'/></td>
                              <td>{data.name}</td>
                              <td> {data.price}</td>
                              <td>{data.stock}</td>
                              <td style={{textAlign: 'center'}} className="td-actions text-right">
                                <button
                                  type="button"
                                  rel="tooltip"
                                  title="Edit Task"
                                  className="btn btn-white btn-link btn-sm"
                                >
                                  <i className="material-icons">edit</i>
                                </button>
                                <a
                                  type="button"
                                  rel="tooltip"
                                  title="Remove"
                                  href="#"
                                  onClick={() => this.handleDelete(data.id)}
                                  className="btn btn-white btn-link btn-sm"
                                >
                                  <i className="material-icons">close</i>
                                </a>
                              </td>
                            </tr>
                            )
                          })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductData;
