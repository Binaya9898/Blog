import React from 'react'
import '../CSS/Register.css'

export default function Register() {
  return (
    <div>
    <div className="main-div">
    <div className="row col-md-12">

    <div className="row1 col-md-6">
    <div class="login-block">
    <h1>Login</h1>
    <input type="text"  placeholder="Username" id="username" />
    <input type="password"  placeholder="Password" id="password" />
    <button>Submit</button>
</div>

    </div>

    <div className="row2 col-md-6">
    <div class="login-block">
    <h1>Create New Account</h1>
    <input type="text"  placeholder="Name" id="username" />
    <input type="text"  placeholder="Email" id="username" />
    <input type="text"  placeholder="Contact" id="username" />
    <input type="text"  placeholder="Username" id="username" />
    <input type="password"  placeholder="Password" id="password" />
    <button>Submit</button>
</div>

    </div>

    </div>
    




    </div>

</div>

  )
}

