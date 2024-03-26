import React from 'react';
import api from '../../config/axios';
import { TOKEN } from '../../redux/token';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const CourseTab = ({ course, user }) => {
    const navigate = useNavigate();
    const handleCancelCourse = async (maKhoaHoc) => {
        try {
            const res = await api.post(
                'QuanLyKhoaHoc/HuyGhiDanh',
                {
                    maKhoaHoc: maKhoaHoc,
                    taiKhoan: user.taiKhoan,
                },
                {
                    headers: {
                        TokenCybersoft: TOKEN,
                    },
                }
            );
            if (res.status === 200) {
                navigate('/');
                toast.success('Cancel course success');
            } else {
                toast.error('Error: ', res.error);
            }
        } catch (error) {
            toast.error('Error: ', error);
        }
    };
    return (
        <>
            {course.map((e, index) => (
                <div className="col-6 mb-3">
                    <div className="card h-100" key={index}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={e.hinhAnh}
                                    className="img-fluid"
                                    alt={e.alt}
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null; // prevents looping
                                        currentTarget.src =
                                            'https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/software-development-specialist.jpg?';
                                    }}
                                    style={{ borderTopLeftRadius: '4px', width: '100%', height: '100%', objectFit: 'cover', imageResolution: 'from-image', maxHeight: '160.8px' }}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title" style={{
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        WebkitLineClamp: 1, // Giới hạn văn bản chỉ hiển thị ở 3 dòng
                                    }}>{e.tenKhoaHoc}</h5>
                                    <p
                                        className="card-text"
                                        style={{
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            WebkitLineClamp: 1, // Giới hạn văn bản chỉ hiển thị ở 3 dòng
                                        }}>
                                        {e.moTa}
                                    </p>
                                    <p className="card-text">
                                        <small className="text-body-secondary">{e.ngayTao}</small>
                                    </p>
                                    <button
                                        onClick={() => {
                                            handleCancelCourse(e.maKhoaHoc);
                                        }}
                                        className="border-2 mt-2 p-1 text-bg-danger">
                                        Cancel Course
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CourseTab;
