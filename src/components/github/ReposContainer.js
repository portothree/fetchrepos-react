import React from 'react'
import { fetchRepos } from '../../service/repos-api'

class ReposContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            repos: []
        }
    }


    componentDidMount() {
        fetchRepos('portothree').then(res => window.console.log(res.data))

    }

    render () {
        return (
            <h1>Repos Container</h1>
        )
    }
}

export default ReposContainer