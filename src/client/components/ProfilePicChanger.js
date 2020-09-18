import React, { Component } from 'react';
import 'antd/dist/antd.css'
import '../app.css'
import { Modal, Button } from 'antd';


class ProfilePicChanger extends Component{
    constructor(props){
        super(props)
     this.state = { 
         
        visible: false, 
        imagesArray: [props.zoom, props.arizona,props.underwater,props.tired]
    };
    }
    

    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
    
      });
    };




    render(){
        const imageMapper = this.state.imagesArray.map((image, index) => {

            return(
                <img src={image}  key = {index} onClick = {() => this.props.handleImageChange(image)}
                height = "100px"
                />
            )

        })
           
        return(
            <div>
        <Button type="primary" onClick={this.showModal}> Select Profile Image</Button>
         <Modal
          title="Select a Profile Image"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
         {imageMapper}
        </Modal>
            </div>

        )
    }

}

export default ProfilePicChanger