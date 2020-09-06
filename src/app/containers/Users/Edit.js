import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import Input from '../../components/Input';
import { getUser, updateUser } from '../../../redux/actions/userAction';

const Edit = (props) => {
    const { getUser, updateUser } = props
    const user_id = useParams().id

    useEffect(() => {
        getUser(user_id)
    }, [user_id])

    return (
        <>
            {((props.user !== null) || (props.user !== undefined)) ? <UserEditForm {...props.user} updateUser={updateUser} user_id={user_id}/> : "B"}
        </>
    )
}

class UserEditForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id : '',
            first_name : '',
            last_name : '',
            email : ''
        }
    }

    componentDidMount(){
        this.setState({...this.props})
    }

    componentWillReceiveProps(newProps){
        this.setState({...newProps})
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit = () => {
        this.props.updateUser(this.state.id, {...this.state})
        this.props.history.push('/login')
    }

    render() {
        return (
            <>
            {this.props.first_name}
            <p>
                <Input type="text" name="first_name" id="first_name" 
                    placeholder="Enter the First Name" 
                    onChange={this.handleChange} value={this.state.first_name} />

                <Input type="text" name="last_name" id="last_name" 
                    placeholder="Enter the Last Name" 
                    onChange={this.handleChange} value={this.state.last_name} />
                
                <Input type="text" name="email" id="email" 
                    placeholder="Enter the Email" 
                    onChange={this.handleChange} value={this.state.email} />
                <button onClick={this.handleSubmit}> Update</button>
            </p>
        </>  
        )
    }
}

// const UserEditForm = (props) => {
//     const history = useHistory()
//     const [email, setEmail] = useState('')
//     const [last_name, setLast_name] = useState('')
//     const [first_name, setFirst_name] = useState('')
//     const [userID, setuserID] = useState(props.user_id)

//     useEffect(() => {
//         setuserID(props.id)
//         setEmail(props.email)
//         setLast_name(props.last_name)
//         setFirst_name(props.first_name)
//     }, [props])

//     const handleSubmit = () => {
//         let data = {
//             email,
//             last_name,
//             name : first_name,
//         }
//         props.updateUser(userID, data)
//         history.push('/login')
//     }

//     return (
//         <>
//             <p>
//                 <Input type="text" name="first_name" id="first_name" 
//                     placeholder="Enter the First Name" 
//                     onChange={(e) => setFirst_name(e.target.value)} value={first_name} />

//                 <Input type="text" name="last_name" id="last_name" 
//                     placeholder="Enter the Last Name" 
//                     onChange={(e) => setLast_name(e.target.value)} value={last_name} />
                
//                 <Input type="text" name="email" id="email" 
//                     placeholder="Enter the Email" 
//                     onChange={(e) => setEmail(e.target.value)} value={email} />
//                 <button onClick={handleSubmit}> Update</button>
//             </p>
//         </>
//     )
// } 

const mapStateToProps = (state) => ({
    user : state.users.selectedUser
})

const mapDispatchToProps = {
    getUser, updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);