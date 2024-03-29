import React, { useState } from 'react';
// import "../common/css/index-admin.css";
import HomePageForm from './Product_management';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import './css/style.css';

import SizeColorPageForm from './Manage_size_and_color';
import CategoryPageForm from './Manage_product_categories';
import ProductPageForm from './Product_management';
import AllProductPageForm from './All_products';
import DiscountPageForm from './Discount';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Trang chủ', '1', <HomeOutlined />),
    getItem('Quản lý', 'sub1', <HomeOutlined />, [
        getItem('Quản lý hàng hóa', '2'),
        getItem('Quản lý size và màu', '3'),
        getItem('Quản lý sản phẩm', '4'),
        getItem('Tất cả sản phẩm', '5'),
        getItem('Giảm giá', '6'),
        getItem('Dịch vụ', '7'),
    ]),
    getItem('Quản lý khách hàng', 'sub2', <HomeOutlined />, [
        getItem('Tom', '8'),
        getItem('Bill', '9'),
        getItem('Alex', '10'),
    ]),
    getItem('Quản lý đơn hàng', 'sub3', <HomeOutlined />, [getItem('Team 1', '11'), getItem('Team 2', '12')]),
    getItem('Hỗ trợ và liên hệ', 'sub4', <HomeOutlined />, [getItem('Team 1', '13'), getItem('Team 2', '14')]),
    getItem('Quản lý đơn hàng', 'sub5', <HomeOutlined />, [getItem('Team 1', '15'), getItem('Team 2', '16')]),
    getItem('Quản lý đơn hàng', 'sub6', <HomeOutlined />, [getItem('Team 1', '17'), getItem('Team 2', '18')]),
    getItem('Quản lý đơn hàng', 'sub7', <HomeOutlined />, [getItem('Team 1', '19'), getItem('Team 2', '20')]),
];
const Indexadmin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [selectedMenuItem, setSelectedMenuItem] = useState('1');


    const handleMenuItemClick = (item) => {
        setSelectedMenuItem(item);
    };
    const formComponents = {
        '1': <HomePageForm />,
        '2': <CategoryPageForm/>,
        '3': <SizeColorPageForm />,
        // '4': <ProductPageForm/>,
        '5': <AllProductPageForm/>,
        '6': <DiscountPageForm/>
        // Thêm các item khác nếu cần
    };


   
    const renderBreadcrumb = () => {
        switch (selectedMenuItem) {
            case '1':
                return (
                    <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                );




            case '2':
                return (
                    <Breadcrumb.Item>Quản lý</Breadcrumb.Item>


                );


            // Add more cases for other menu items if needed
            default:
                return (
                    <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                );
        }
    };
    return (
        <Layout style={{ minHeight: '100vh', }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ padding: 0, marginRight: 30 }}
            >
                <div className="demo-logo-vertical" /><a href="/" className=" ">
                    {/* <img src={logoHeader} className="img-fluid " alt="Logo" /> */}
                </a>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={({ key }) => handleMenuItemClick(key)} />


            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer, }}
                >
                {/* <Space direction="vertical">  
                    <Search placeholder="input search text" onSearch={onSearch} enterButton />  
                </Space> */}
                </Header>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{ margin: '16px 0', }}
                    >
                        <Breadcrumb.Item>Admin</Breadcrumb.Item>
                        {renderBreadcrumb()}
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}


                    >
                        <div style={{ padding: 24, minHeight: 360, background: '#fff' }}>
                        {formComponents[selectedMenuItem]}
                        </div>
                    </div>


                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default Indexadmin;


// import React from 'react';
// import { Form } from 'antd';


// const HomePageForm = () => {
//     return (
//         <Form title="Trang chủ">
//             <Form.Item>Quản lý hàng hóa</Form.Item>
//         </Form>
//     );
// };


// export default HomePageForm;


// import React from 'react';
// import { Form } from 'antd';


// const HomePageForm = () => {
//     return (
//         <Form title="Trang chủ">
//             <Form.Item>Trang chủ</Form.Item>
//         </Form>
//     );
// };


// export default HomePageForm;

