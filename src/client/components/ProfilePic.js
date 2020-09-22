import React, { Component } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import '../app.css'
import ProfilePicChanger from './ProfilePicChanger'
import arizona from '../components/assets/arizona.jpg'
import zoom from '../components/assets/zoom.jpg'
import tired from '../components/assets/tired.jpg'
import underwater from '../components/assets/underwater.jpg'

class ProfilePic extends Component{

    constructor(props){
        super(props)
        this.state = {

            profileImage: props.user.profileImage

        }
    }

    handleImageChange = (profileImage) => {
        console.log('handleImageChange profileImage', profileImage)
        this.setState({
            profileImage
        })

        //TODO:
        //axios call to update profile image path.
    }


    render(){


        return(


            <div>
               <Avatar shape="square" size={200} icon = "" src = {this.state.profileImage}/> 
               <ProfilePicChanger handleImageChange = {this.handleImageChange} zoom = {zoom} arizona = {arizona} tired = {tired} underwater ={underwater}/>

            </div>


        )
    }

}

export default ProfilePic