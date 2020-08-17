

const Users = (props) => {
    return(
       <ul>
           {
           props.users.map(user => (
              <li>
                  <h5>{user.name}</h5>
              </li> 
           ))
       }
       </ul>
    )

    };

export default Users