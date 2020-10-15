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
        config.headers['Authorization'] = 'Token f377b2affef48b271b56bf821c6015553c3ac3dd'
        var url = 'http://127.0.0.1:8000/list/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({lists: data, loading: false});
    } 

    render(){
        const listApi = this.state.lists;
         return(
            <div>
                {listApi.map(list => <List key={list.id} listName={list.name} items={list.item_set} />)}
            </div>
    );
    }
   
}