import React, { useEffect, useState } from 'react';
import api from '../../config/axios';
import { TOKEN } from '../../redux/token';
import { toast } from 'react-toastify';
const ProfileTab = ({ user }) => {
    const [isEdit, setIsEdit] = useState(false);
    const toggleEdit = () => {
        setIsEdit((prevIsEdit) => !prevIsEdit);
    };
    const [userData, setUserData] = useState({
        taiKhoan: user.taiKhoan,
        hoTen: user.hoTen,
        matKhau: '123',
        soDT: user.soDT,
        maNhom: user.maNhom,
        maLoaiNguoiDung: user.maLoaiNguoiDung,
        email: user.email
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const res = await api.put(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, userData, {
                headers: { TokenCybersoft: TOKEN },
            });
            if (res.status === 200) {
                toast.success("Update user success")
                setIsEdit(false)
            }
            else {
                toast.error("Update user error")
            }
        } catch (error) {
            toast.error(error)
        }
    };
    return (
        <>
            <div className="card mb-3">
                <div className="card-body">
                    {isEdit ? (
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <h6 className="mb-3">
                                    Name:{' '}
                                    <span>
                                        <input
                                            type="text"
                                            name="hoTen"
                                            placeholder="input name"
                                            value={userData.hoTen}
                                            onChange={handleChange}
                                        />
                                    </span>
                                </h6>
                                <hr />
                                <h6 className="mb-3 mt-3">
                                    Email:{' '}
                                    <span>
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="input email"
                                            value={userData.email}
                                            onChange={handleChange}
                                        />
                                    </span>
                                </h6>
                                <hr />
                                <h6 className="mb-2 mt-3">
                                    Phone:{' '}
                                    <span>
                                        <input
                                            type="text"
                                            name="soDT"
                                            placeholder="input phone"
                                            value={userData.soDT}
                                            onChange={handleChange}
                                        />
                                    </span>
                                </h6>
                                <hr />
                                <h6 className="mb-2 mt-3">
                                    Password:{' '}
                                    <span>
                                        <input
                                            type="password"
                                            name="matKhau"
                                            placeholder="input phone"
                                            value={userData.matKhau}
                                            onChange={handleChange}
                                        />
                                    </span>
                                </h6>

                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <h6 className="mb-3 ">
                                    Account:{' '}
                                    <span>
                                        <input
                                            type="text"
                                            name="taiKhoan"
                                            placeholder="input account"
                                            value={userData.taiKhoan}
                                            onChange={handleChange}
                                        />
                                    </span>
                                </h6>
                                <hr />
                                <h6 className="mb-3 mt-3">
                                    Group:{' '}
                                    <span>
                                        <input
                                            type="text"
                                            name="maNhom"
                                            placeholder="input group code"
                                            value={userData.maNhom}
                                            onChange={handleChange}
                                        />
                                    </span>
                                </h6>
                                <hr />
                                <h6 className="mb-2 mt-3">
                                    Position:{' '}
                                    <span>
                                        <input
                                            type="text"
                                            name="maLoaiNguoiDung"
                                            placeholder="input type user code"
                                            value={userData.maLoaiNguoiDung}
                                            onChange={handleChange}
                                        />
                                    </span>
                                </h6>
                                <hr />
                            </div>
                        </div>
                    ) : (
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <h6 className="mb-3">
                                    Name: <span>{user.hoTen}</span>
                                </h6>
                                <hr />
                                <h6 className="mb-3 mt-3">
                                    Email: <span>{user.email}</span>
                                </h6>
                                <hr />
                                <h6 className="mb-2 mt-3">
                                    Phone: <span>{user.soDT}</span>
                                </h6>
                                <hr />
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <h6 className="mb-3 ">
                                    Account: <span>{user.taiKhoan}</span>
                                </h6>
                                <hr />
                                <h6 className="mb-3 mt-3">
                                    Group: <span>{user.maNhom}</span>
                                </h6>
                                <hr />
                                <h6 className="mb-2 mt-3">
                                    Position: <span>{user.maLoaiNguoiDung}</span>
                                </h6>
                                <hr />
                            </div>
                        </div>
                    )}
                </div>
                {isEdit ? (
                    <>

                        <button style={{ margin: 0, padding: '12px 0' }} onClick={toggleEdit}>
                            Cancel
                        </button>
                        <button style={{ margin: 0, padding: '12px 0' }} onClick={handleSubmit}>
                            Save
                        </button>
                    </>
                ) : (
                    <button style={{ margin: 0, padding: '12px 0' }} onClick={toggleEdit}>
                        Edit
                    </button>
                )}
            </div>

            <div className="row gutters-sm">
                <div className="col-sm-12 mb-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h6 className="d-flex align-items-center mb-3">
                                <i className="material-icons text-info mr-2 text-uppercase fw-bold">ACHIEVED SKILLS</i>
                            </h6>
                            <small>HTML</small>
                            <div className="progress mb-3" style={{ height: '5px' }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: '90%', background: '#1eb2a6' }}
                                    aria-valuenow="90"
                                    aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                            <small>CSS</small>
                            <div className="progress mb-3" style={{ height: '5px' }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: '85%', background: '#1eb2a6' }}
                                    aria-valuenow="85"
                                    aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                            <small>JavaScript</small>
                            <div className="progress mb-3" style={{ height: '5px' }}>
                                <div
                                    className="progress-bar "
                                    role="progressbar"
                                    style={{ width: '89%', background: '#1eb2a6' }}
                                    aria-valuenow="89"
                                    aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                            <small>ReactJS</small>
                            <div className="progress mb-3" style={{ height: '5px' }}>
                                <div
                                    className="progress-bar "
                                    role="progressbar"
                                    style={{ width: '55%', background: '#1eb2a6' }}
                                    aria-valuenow="55"
                                    aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                            <small>MongoDB</small>
                            <div className="progress mb-3" style={{ height: '5px' }}>
                                <div
                                    className="progress-bar "
                                    role="progressbar"
                                    style={{ width: '49%', background: '#1eb2a6' }}
                                    aria-valuenow="49"
                                    aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileTab;
