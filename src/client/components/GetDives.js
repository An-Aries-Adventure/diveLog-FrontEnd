


      getDives = () => {
        axios.get('http://localhost:5000/api/diveRecord/').then(res => {
            this.setState({ friendPosts: res.data });
        }, function (err) {
            alert('Something went wrong.')
        })
    };