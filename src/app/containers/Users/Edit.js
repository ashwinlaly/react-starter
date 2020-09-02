import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import Input from '../../components/Input'; 
import { getUser } from '../../../redux/actions/userAction';

const Edit = (props) => {
    const { getUser } = props
    const user_id = useParams().id
    useEffect(() => {
        getUser(user_id)
    }, [user_id])
    
    return (
        <>
            {(props.user !== null) ? props.user.first_name : 1}
            {(props.user !== null) ? <UserEditForm {...props.user}  user_id={user_id}/> : null}
        </>
    )
}

const UserEditForm = (props) => {
    const [email, setEmail] = useState(props.email)
    const [last_name, setLast_name] = useState(props.last_name)
    const [first_name, setFirst_name] = useState(props.first_name)

    if(props.user_id === props.id){
        return null
    } else {
        return (
            <>
                <p>
                    <Input type="text" name="first_name" id="first_name" 
                        placeholder="Enter the First Name" 
                        onChange={(e) => setFirst_name(e.target.value)} value={first_name} />
    
                    <Input type="text" name="last_name" id="last_name" 
                        placeholder="Enter the Last Name" 
                        onChange={(e) => setLast_name(e.target.value)} value={last_name} />
                    
                    <Input type="text" name="email" id="email" 
                        placeholder="Enter the Email" 
                        onChange={(e) => setEmail(e.target.value)} value={email} />
                    
                </p>
            </>
        )
    }
} 

const mapStateToProps = (state) => ({
    user : state.users.selectedUser
})

const mapDispatchToProps = {
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);