import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { List, Avatar, Button, Row, Col, Tooltip } from 'antd'
import React from 'react'

export const UserItem = ({ user, deleteUser }) => {
  return (
    <>
        <List.Item>
                <Row className='w-full'>
                    <Col xs={24} lg={18}>
                        <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<a href="https://ant.design">{user.fullName}</a>}
                            description={user.email}
                            />
                    </Col>
                    <Col xs={24} lg={3}>
                        <Row gutter={5} justify='center' className='user-icons-actions'>
                            <Col lg={8}>
                                <Tooltip title='Borrar Usuario'>
                                    <Button type='primary' danger shape='circle' icon={<DeleteOutlined />} onClick={() => deleteUser(user._id)}/>
                                </Tooltip>
                            </Col>
                            <Col lg={8}>
                                <Tooltip title='Editar Usuario'>
                                    <Button shape='circle' icon={<EditOutlined />} />
                                </Tooltip>
                            </Col>
                            <Col lg={8}>
                                <Tooltip title='Editar Usuario'>
                                    <Button shape='circle' icon={<EditOutlined />} />
                                </Tooltip>
                            </Col>
                        </Row>
                    </Col>
                </Row>
        </List.Item>
    </>
  )
}
