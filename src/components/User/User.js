import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image, Href, UserDiv, UserUl, UserLi } from '../../elements';
import { faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';

const User = props => {
    const { data } = props;
    return (
        <>
            <Image src={data.avatarUrl} name="User photo" width="70" height="70" />
            <UserDiv>
                <UserUl>
                <UserLi>
                    <Href target="_blank" href={data.url}><span>{data.login} &#9;</span></Href><span>{data.name}</span>
                </UserLi>
                <UserLi>{data.bio}</UserLi>
                <UserLi>
                    { data.location &&
                        <>
                            <FontAwesomeIcon icon={faMapMarker} />
                            <span> {data.location} &emsp;</span>
                        </>
                    }
                    { data.email &&
                        <>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span> {data.email}</span>
                        </>
                    }
                </UserLi>
                </UserUl>
            </UserDiv>
        </>
    )
}

export default User;