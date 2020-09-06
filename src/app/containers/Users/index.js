import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getAllUsers } from '../../../redux/actions/userAction';
import { Link } from 'react-router-dom';

const Index = (props) => {
    useEffect(() => {
        const { getAllUsers } =  props
        getAllUsers()
    }, [getAllUsers])

    return (
        <>
            <br/>
            <Link to="/user/add">Add</Link>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>Sl.no</th>
                        <th>Firat Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button> Delete </button>
                                    <Link to={`user/${user.id}`}> Edit</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

const mapStateToProps = (state) => ({
    users : state.users.users
})

const mapDispatchToProps = {
    getAllUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);