import { Collapse, Rate } from 'antd';
import React from "react";


const items = [
    {
        key: '1',
        label: <p> <i className="fa fa-bookmark"></i> MỤC 1: GIỚI THIỆU </p>,
        children: <div>
            <ul>
                <li> <i className="fa fa-file-alt"></i> Các khái niệm về React Component
                </li>
                <li><i className="fa fa-file-alt"></i> Thiết lập môi trường cho Windows </li>
                <li><i className="fa fa-file-alt"></i> Tạo ứng dụng React - React-Scripts </li>
                <li><i className="fa fa-file-alt"></i> Ghi chú nhanh về dấu ngoặc kép cho string interpolation
                </li>
            </ul>
        </div>,
    },
    {
        key: '2',
        label: <p> <i className="fa fa-bookmark"></i> MỤC 2: KIẾN THỨC CĂN BẢN </p>,
        children: <ul>
            <li> <i className="fa fa-file-alt"></i> Trang chủ và thành phần thư mục
            </li>
            <li><i className="fa fa-file-alt"></i> Hướng dẫn khóa học + Liên kết Github
            </li>
            <li><i className="fa fa-file-alt"></i> Tạo ứng dụng React - React-Scripts Trang chủ thương mại điện tử + thiết lập SASS
            </li>
            <li><i className="fa fa-file-alt"></i> Tệp CSS và SCSS
            </li>
            <li><i className="fa fa-file-alt"></i> React 17: Cập nhật các gói + Phiên bản React mới nhất
            </li>
        </ul>,
    },
    {
        key: '3',
        label: <p> <i className="fa fa-bookmark"></i> MỤC 3: KIẾN THỨC CHUYÊN SÂU</p>,
        children: <ul>
            <li><i className="fa fa-file-alt"></i> connect() and mapStateToProps</li>
            <li><i className="fa fa-file-alt"></i> Trạng thái thư mục vào Redux</li>
            <li><i className="fa fa-file-alt"></i> Thành phần Tổng quan về Bộ sưu tập</li>
        </ul>,
    },
];
const CourseDetailsTab = () => {

    return (
        <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="home-tab-pane"
                        aria-selected="true"
                    >
                        MÔ TẢ
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="profile-tab-pane"
                        aria-selected="false"
                    >
                        NHỮNG GÌ BẠN SẼ HỌC
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="contact-tab-pane"
                        aria-selected="false"
                    >
                        CHƯƠNG TRÌNH GIẢNG DẠY
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="review-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#review-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="review-tab-pane"
                        aria-selected="false"
                    >
                        ĐÁNH GIÁ TỪ HỌC VIÊN
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div
                    className="tab-pane fade show active"
                    id="home-tab-pane"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabindex="0"
                >
                    React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện đại, phản ứng cho web.Khóa học này dạy bạn về React chuyên sâu, từ cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản cốt lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các khái niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn ví dụ và bản trình diễn, bài tập và bài tập cũng như vô số kiến ​​thức quan trọng bị hầu hết các nguồn khác bỏ qua - sau cùng, có một lý do tại sao khóa học này lại rất lớn! Và trong trường hợp bạn thậm chí không biết tại sao bạn lại muốn học React và bạn chỉ ở đây vì một số quảng cáo hoặc "thuật toán" - đừng lo lắng: ReactJS là một công nghệ quan trọng với tư cách là một nhà phát triển web và trong khóa học này, tôi sẽ cũng giải thích TẠI SAO điều đó lại quan trọng!


                </div>
                <div
                    className="tab-pane fade"
                    id="profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabindex="0"
                >
                    <li>Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện với người dùng và phản ứng nhanh</li>
                    <li>Đăng ký công việc được trả lương cao hoặc làm freelancer trong một trong những lĩnh vực được yêu cầu nhiều nhất mà bạn có thể tìm thấy trong web dev ngay bây giờ</li>
                    <li>Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận dụng sức mạnh của JavaScript một cách dễ dàng
                        Tìm hiểu tất cả về React Hooks và React Components</li>
                    <li>Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp Javascript NPM, Webpack, Babel và ES6 / ES2015
                    </li>
                    <li> Nhận ra sức mạnh của việc xây dựng các thành phần có thể kết hợp
                    </li>
                    <li> Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản
                    </li>
                    <li>Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các ứng dụng Redux
                    </li>
                </div>
                <div
                    className="tab-pane fade"
                    id="contact-tab-pane"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                    tabindex="0"
                >
                    <Collapse accordion items={items} />
                </div>
                <div
                    className="tab-pane fade"
                    id="review-tab-pane"
                    role="tabpanel"
                    aria-labelledby="review-tab"
                    tabindex="0"
                >
                    <div >

                        <div className="review_rating_container row">
                            <div className="review_rating col-lg-4 col-md-12">
                                <h3>COURSE REVIEWS</h3>
                                <div className="review_rating_num">4.5</div>
                                <div className="review_rating_stars">
                                    <Rate />
                                </div>
                                <div className="review_rating_text">(28 Ratings)</div>
                            </div>
                            <div className="review_rating_bars col-lg-8 col-md-12">
                                <ul>
                                    <li><span>5 Star</span><div className="bg-secondary review_rating_bar"><div style={{ width: '90%', height: '30px' }} className='bg-danger'></div></div></li>
                                    <li><span>4 Star</span><div className="review_rating_bar"><div style={{ width: '75%' }}></div></div></li>
                                    <li><span>3 Star</span><div className="review_rating_bar"><div style={{ width: '32%' }}></div></div></li>
                                    <li><span>2 Star</span><div className="review_rating_bar"><div style={{ width: '10%' }}></div></div></li>
                                    <li><span>1 Star</span><div className="review_rating_bar"><div style={{ width: '3%' }}></div></div></li>
                                </ul>
                            </div>
                        </div>
                        <Rate defaultValue={4.5} />
                        <div className="feedeback">
                            <h6>Your Feedback</h6>
                            <textarea name="feedback" className="form-control" cols="10" rows="10"></textarea>
                            <div className="mt-10 text-right">
                                <button href="#" className=" btn btn-dark text-right rounded text-white">Submit</button>
                            </div>
                        </div>
                        <div className="comments-area mb-30">
                            <div className="comment-list">
                                <div className="single-comment single-reviews justify-content-between d-flex">
                                    <div className="user justify-content-between d-flex">
                                        <div className="thumb">
                                            <img src="https://i.pravatar.cc/50" alt="" srcset="" />
                                        </div>
                                        <div className="desc">
                                            <h5><a href="#">Emilly Blunt</a>
                                                <Rate disabled defaultValue={2} />
                                            </h5>
                                            <p className="comment">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-list">
                                <div className="single-comment single-reviews justify-content-between d-flex">
                                    <div className="user justify-content-between d-flex">
                                        <div className="thumb">
                                            <img src="https://i.pravatar.cc/50" alt="" srcset="" />
                                        </div>
                                        <div className="desc">
                                            <h5><a href="#">Elsie Cunningham</a>
                                                <Rate disabled defaultValue={2} />
                                            </h5>
                                            <p className="comment">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-list">
                                <div className="single-comment single-reviews justify-content-between d-flex">
                                    <div className="user justify-content-between d-flex">
                                        <div className="thumb">
                                            <img src="https://i.pravatar.cc/50" alt="" srcset="" />
                                        </div>
                                        <div className="desc">
                                            <h5><a href="#">Maria Luna</a>
                                                <Rate disabled defaultValue={2} />
                                            </h5>
                                            <p className="comment">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default CourseDetailsTab;
