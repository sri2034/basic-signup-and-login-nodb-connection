import logo from '.././logo.svg';
import './reg.css'
function Registration() {
    return (
        <div className='registration-container row'>
            <div className='logo col-lg-6 col-md-6 col-sm-12'><img src={logo} alt="logo" required /></div>
            <div className='reg-form col-lg-6 col-md-6 col-sm-12'>
                <form className='form'>
                    <table className='mx-auto'>
                        <thead>
                            <td colSpan={2}>
                                <h3 className='text-center'>Register Yourself</h3>
                                <p className='text-center'>& share what you write</p>
                            </td>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='p-1'><label className='form-label'>Name</label></td>
                                <td className='p-1'><input style={{borderWidth:'3px'}} className='form-control rounded-1 ms-4' type="text" required /></td>
                            </tr>
                            <tr>
                                <td className='p-1'><label className='form-label'>Username</label></td>
                                <td className='p-1'><input style={{borderWidth:'3px'}} className='form-control rounded-1 ms-4' type="text" required /></td>
                            </tr>
                            <tr>
                                <td className='p-1'><label className='form-label'>Email</label></td>
                                <td className='p-1'><input style={{borderWidth:'3px'}} className='form-control rounded-1 ms-4' type="email" required /></td>
                            </tr>
                            <tr>
                                <td className='p-1'><label className='form-label'>Phone Number</label></td>
                                <td className='p-1'><input style={{borderWidth:'3px'}} className='form-control rounded-1 ms-4' type="tel" required /></td>
                            </tr>
                            <tr>
                                <td className='p-1'><label className='form-label'>Password</label></td>
                                <td className='p-1'><input style={{borderWidth:'3px'}} className='form-control rounded-1 ms-4' type="password" required /></td>
                            </tr>
                            <tr>
                                <td className='p-1'><label className='form-label'>Confirm Password</label></td>
                                <td className='p-1'><input style={{borderWidth:'3px'}} className='form-control rounded-1 ms-4' type="password" required /></td>
                            </tr>
                            <tr>
                                <td className='p-1'><label className='form-label'>Date of birth</label></td>
                                <td className='p-1'><input style={{borderWidth:'3px'}} className='form-control rounded-1 ms-4' type="date" required /></td>
                            </tr>
                            <tr>
                                <td className='p-1'><label className='form-label'>Bio</label></td>
                                <td className='p-1'><input style={{borderWidth:'3px'}} className='form-control rounded-1 ms-4' type="text" required /></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <td className='text-center pt-3' colSpan={2}>
                                <button className='btn btn-primary'>Signup</button>
                            </td>
                        </tfoot>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default Registration;