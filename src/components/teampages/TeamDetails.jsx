import React from 'react'
import TeamDetailsArray from '../ArrayFiles/teamDetailsArray'
import
{
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsLinkedin
} from "react-icons/bs";
import "../../assest/css/teamcss/teamCard.css"
import { Link } from 'react-router-dom';
const TeamDetails = () =>
{
    return (
        <>
            <section className="rk_team_card">
                <div className='team_leaders'>
                    <div className='container'>
                        <div className='row gy-3'>
                            {
                                TeamDetailsArray.map((index, id) =>
                                {
                                    return (
                                        <>
                                            <div className='col-lg-3 col-sm-6' key={id}>
                                                <Link to={`/team-detail/${id + 1}`}>
                                                    <div className='team_style_card'>
                                                        <div className='img_wrap'>
                                                            <img src={index.image} alt={index.image} />
                                                            <div className='social'>
                                                                <div>
                                                                    <p className='mb-0' to="/">
                                                                        <BsFacebook />
                                                                    </p>
                                                                    <p className='mb-0' to="/">
                                                                        <BsInstagram />
                                                                    </p>
                                                                    <p className='mb-0' to="/">
                                                                        <BsTwitter />
                                                                    </p>
                                                                    <p className='mb-0' to="/">

                                                                        <BsLinkedin />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3 className='service_title text-center mt-2 mt-md-5 mb-2'>
                                                           {index.name}
                                                        </h3>
                                                        <p className='detail_text2 text-center mb-2 mb-md-5 mt-0'>{index.degination}</p>
                                                    </div>
                                                </Link>

                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeamDetails