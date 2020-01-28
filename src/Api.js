import React, { Component } from 'react'
import axios from 'axios'
class Api extends Component {
    state = {
        users: []
      }

    async getDataFetch(){
        const response = await axios.post("http://api.q2pay.co.in/api/v1/accounts/view",
          {header:{'X-API-KEY':'eyJlbWFpbCI6IlEyUDY5MDgiLCJpYXQiOjE1NTc4Mjg0MjR9.NHsXgEC6Cfq9rvlb89eqDTuuS3IpUi9NDVjdNxJAuY4'}}
          )
        console.log(await response)
        this.setState.users({
            users:response.accounts
        })
    }
    render() {
        const list=this.state.users.map((data)=>{
            return data
        })
        return (
            <div>
                <li>{list}</li>   
                hello
            </div>
        )
    }
}

export default Api
