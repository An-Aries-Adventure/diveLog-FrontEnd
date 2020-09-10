import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Navigation from './Navigation'


function ProfilePage(props) {

    let [responseData,
        setResponseData] = useState('');
    const fetchData = useCallback(() => {


        axios({
            "method": "GET",
            "url": "http://localhost:5000/api/users/" + props.userInfo._id
        }).then((response) => {
            setResponseData(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const rootImagePath = "src/client/components/images";
    const images = [
        `${rootImagePath}/crush.jpg`,
        `${rootImagePath}/dolphin.jpg`,
        `${rootImagePath}/lobster.jpg`,
        `${rootImagePath}/nemo.jpg`,
        `${rootImagePath}/patrick.jpg`,
        `${rootImagePath}/seal.jpg`,
        `${rootImagePath}/shark.jpg`,
        `${rootImagePath}/squirt.jpg`,
        `${rootImagePath}/whale.jpg`,
        `${rootImagePath}/dory.jpg`
    ]

    const setProfileImage = (event) => {

        axios.put('http://localhost:5000/api/users/updateImage', {
            "id": props.userInfo._id,
            "profileImage": event.target.value
        })
            .then(res => {
                setResponseData(res.data)

            }, function (err) {

                console.log(err)
            })

    }

    return (

        <div>
            <Navigation handleLogout={props.handleLogout}/>
            <h2 className="text-center text-white">Profile Page</h2>
            <div className="container dark-red1" style={{ marginTop: "50px" }}>

                <div className="row">
                    <div className="col-md-6 img">
                        <img src={responseData.profileImage} alt="" className ="img-rounded" />
                    </div>
                    <div className="col-md-6 details">
                        <blockquote>
                            <h5>{responseData.firstName} {responseData.lastName}</h5>
                            <small><cite title="Source Title">Jacksonville, FL <i className="icon-map-marker"></i></cite></small>
                        </blockquote>
                        <p>
                            Diver Certification Level <br />
                                    Created Account on {responseData.timeStamp}
                        </p>
                        <hr />
                        <p>Select Profile Image </p>
                        <select className="select-board-size" onChange={setProfileImage}>
                            {images.map(value => <option key={value} value={value}>{value}</option>)}
                        </select>
                        <br />
                        Note! Some images in this application may still display the previous image. Log out and log back in to ensure all images are up to date.

                    </div>
                </div>
            </div>
        </div>


    )
}

export default ProfilePage
