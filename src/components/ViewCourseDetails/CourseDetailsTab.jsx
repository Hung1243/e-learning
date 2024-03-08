import { Collapse } from 'antd';
import React from "react";

const items = [
    {
        key: '1',
        label: <p> <i class="fa fa-bookmark"></i> MỤC 1: GIỚI THIỆU </p>,
        children: <div>
            <ul>
                <li> <i class="fa fa-file-alt"></i> Các khái niệm về React Component
                </li>
                <li><i class="fa fa-file-alt"></i> Thiết lập môi trường cho Windows </li>
                <li><i class="fa fa-file-alt"></i> Tạo ứng dụng React - React-Scripts </li>
                <li><i class="fa fa-file-alt"></i> Ghi chú nhanh về dấu ngoặc kép cho string interpolation
                </li>
            </ul>
        </div>,
    },
    {
        key: '2',
        label: <p> <i class="fa fa-bookmark"></i> MỤC 2: KIẾN THỨC CĂN BẢN </p>,
        children: <ul>
            <li> <i class="fa fa-file-alt"></i> Trang chủ và thành phần thư mục
            </li>
            <li><i class="fa fa-file-alt"></i> Hướng dẫn khóa học + Liên kết Github
            </li>
            <li><i class="fa fa-file-alt"></i> Tạo ứng dụng React - React-Scripts Trang chủ thương mại điện tử + thiết lập SASS
            </li>
            <li><i class="fa fa-file-alt"></i> Tệp CSS và SCSS
            </li>
            <li><i class="fa fa-file-alt"></i> React 17: Cập nhật các gói + Phiên bản React mới nhất
            </li>
        </ul>,
    },
    {
        key: '3',
        label: <p> <i class="fa fa-bookmark"></i> MỤC 3: KIẾN THỨC CHUYÊN SÂU</p>,
        children: <p>123444</p>,
    },
];
const CourseDetailsTab = () => {

    return (
        <div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button
                        class="nav-link active"
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
                <li class="nav-item" role="presentation">
                    <button
                        class="nav-link"
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
                <li class="nav-item" role="presentation">
                    <button
                        class="nav-link"
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
                <li class="nav-item" role="presentation">
                    <button
                        class="nav-link"
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
            <div class="tab-content" id="myTabContent">
                <div
                    class="tab-pane fade show active"
                    id="home-tab-pane"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabindex="0"
                >
                    React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện đại, phản ứng cho web.Khóa học này dạy bạn về React chuyên sâu, từ cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản cốt lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các khái niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn ví dụ và bản trình diễn, bài tập và bài tập cũng như vô số kiến ​​thức quan trọng bị hầu hết các nguồn khác bỏ qua - sau cùng, có một lý do tại sao khóa học này lại rất lớn! Và trong trường hợp bạn thậm chí không biết tại sao bạn lại muốn học React và bạn chỉ ở đây vì một số quảng cáo hoặc "thuật toán" - đừng lo lắng: ReactJS là một công nghệ quan trọng với tư cách là một nhà phát triển web và trong khóa học này, tôi sẽ cũng giải thích TẠI SAO điều đó lại quan trọng!


                </div>
                <div
                    class="tab-pane fade"
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
                    class="tab-pane fade"
                    id="contact-tab-pane"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                    tabindex="0"
                >
                    <Collapse accordion items={items} />
                </div>
                <div
                    class="tab-pane fade"
                    id="review-tab-pane"
                    role="tabpanel"
                    aria-labelledby="review-tab"
                    tabindex="0"
                >
                    ...

                </div>
            </div>
        </div>
    );
};

export default CourseDetailsTab;
