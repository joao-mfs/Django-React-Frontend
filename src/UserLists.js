import React from 'react';
import List from './List';
export default class UserLists extends React.Component{
    state = {lists: [], loading: true}

    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token ' + localStorage.getItem('token');
        var url = process.env.REACT_APP_API_HOST +'list/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({lists: data, loading: false});
    } 

    render()
    {
        const listApi = this.state.lists;
            return(
                <div>
                    {listApi.map(list => <List key={list.id} listName={list.name} items={list.item_set} />)}
                </div>
                    )
    }
   
}