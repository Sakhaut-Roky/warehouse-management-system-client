import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Items from '../Items/Items';
import PageTitle from '../shared/PageTitle/PageTitle';

const MyItem = () => {
    // const {inventoryId} = useParams();
    // const [myItem, setMyItem] = useState([]);
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    // useEffect( () => {
    //     const url = `https://stark-bayou-80955.herokuapp.com/inventory/${inventoryId}`
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setMyItem(data))
    // }, [])
    
    useEffect( () => {
        const getItems = async() => {
            const email = user.email;
            const url = `https://stark-bayou-80955.herokuapp.com/myitem?email=${email}`;
            const {data} = await axios.get(url)
            setItems(data);
            try{
                const {data} = await axios.get(url, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                    setItems(data);
            }
            catch(error){
                if(error.response.status === 401 || 403){
                    signOut(auth);
                    navigate('/login');
                }

            }
        }
        getItems();
    }, [user])

    
    return (
        <div>
            <PageTitle title="My-item"></PageTitle>
            <h2>My Item: {items.length}</h2>
            <div className='row'>
                {
                    items.map(item => <Items
                        key={item._id}
                        item = {item}
                    ></Items>)
                    
                }
            </div>
        </div>
    );
};

export default MyItem;