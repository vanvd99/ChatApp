import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import firebase, { auth} from '../../firebase/config';
import { addDocument } from '../../firebase/services';
// import { addDocument } from '../../firebase/services';


const {Title} = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

export default function Login() {
    const handleFbLogin = async () => {
       const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);

       if (additionalUserInfo?.isNewUser) {
           addDocument('user', {
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    uid: user.displayName,
                    providerId: additionalUserInfo.providerId,
           });
        }
    };
 
    return (
        <div>
            <Row justify = 'center' style = {{height: 800}}>
                <Col span = {8}>
                    <Title style = { {textAlign: 'center'}} level = {3}>
                        Chào mừng bạn đến với V-Digital! 
                        <br/>
                        Hãy đăng nhập để sử dụng nhé
                    </Title>
                    <Button style = {{width: '100%', marginBottom: 5}} onClick={handleFbLogin}>
                        Đăng nhập với Facebook
                    </Button>
                    <Button style = {{width: '100%'}}>
                        Đăng nhập với Google
                    </Button>
                </Col>
            </Row>
        </div>
    )
}
