import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const AddFriends = () => {
    const {push} = useHistory();
    const [form, setForm] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', form)
            .then(resp => {
                console.log(resp);
                push('/friends');
            })
            .catch(err => {
                console.log(err);
            })
        
    }
    
    return (
        <div>
            <h1>Add Friend</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Friend Name
                    <input 
                        type='text'
                        name='name'
                        // value=''
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <div>
                    <label>Friend Email
                    <input 
                        type='text'
                        name='email'
                        // value=''
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </div>
        )
    }


export default AddFriends;